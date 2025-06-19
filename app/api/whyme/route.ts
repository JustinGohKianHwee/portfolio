import { NextRequest, NextResponse } from "next/server";
import { getResumeStore } from "@/lib/vectorstore/resumestore";
import { ChatOpenAI } from "@langchain/openai";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { prompt } from "@/lib/prompt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const jobDesc = body.jobDescription;

    if (!jobDesc) {
      return NextResponse.json({ error: "Missing job description" }, { status: 400 });
    }

    const vectorstore = await getResumeStore();
    const retriever = vectorstore.asRetriever({ k: 4 });

    const llm = new ChatOpenAI({ modelName: "gpt-4o-mini", temperature: 0.3 });
    const combineDocsChain = await createStuffDocumentsChain({ llm, prompt });

    const chain = await createRetrievalChain({
      retriever,
      combineDocsChain,
    });

    const response = await chain.invoke({ input: jobDesc });

    return NextResponse.json({ result: response.answer });

  } catch (error) {
    console.error("Error in /api/whyme route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
