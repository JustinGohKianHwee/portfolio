# backend/routes/whyme.py
from flask import Blueprint, request, jsonify
from lib.vectorstore.resumestore import get_resume_store
from langchain_openai import ChatOpenAI
from langchain.chains.combine_documents.stuff import create_stuff_documents_chain
from langchain.chains.retrieval import create_retrieval_chain
from lib.prompt import prompt

whyme_bp = Blueprint("whyme", __name__, url_prefix="/api/whyme")

@whyme_bp.route("", methods=["POST"])
def whyme():
    data = request.get_json()
    job_desc = data.get("jobDescription")
    if not job_desc:
        return jsonify({"error": "Missing job description"}), 400

    store = get_resume_store()
    retriever = store.as_retriever(search_kwargs={"k": 4})
    llm = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.3)
    combine_chain = create_stuff_documents_chain(llm=llm, prompt=prompt)
    chain = create_retrieval_chain(retriever=retriever, combine_docs_chain=combine_chain)
    result = chain.invoke({"input": job_desc})["answer"]
    return jsonify({"result": result})
