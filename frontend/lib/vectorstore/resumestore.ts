import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";

const globalForVectorStore = globalThis as unknown as {
  resumeVectorStore?: MemoryVectorStore;
};

export async function getResumeStore() {
  if (globalForVectorStore.resumeVectorStore) {
    console.log("✅ [Resume Store] Using cached resume vector store");
    return globalForVectorStore.resumeVectorStore;
  }

  console.log("📄 [Resume Store] Loading and embedding resume PDF...");

  const loader = new PDFLoader("public/assets/resume.pdf");
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks = await splitter.splitDocuments(docs);
  const embeddings = new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY });

  const store = await MemoryVectorStore.fromDocuments(chunks, embeddings);
  globalForVectorStore.resumeVectorStore = store;

  console.log("🧠 [Resume Store] Resume embedded and cached successfully");

  return store;
}
