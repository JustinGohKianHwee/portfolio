"use client";

import { useState } from "react";

export default function WhyMePage() {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/whyme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jobDesc }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Request failed: ${res.status} - ${text}`);
      }

      const data = await res.json();
      setResponse(data.result);
    } catch (err) {
      console.error("Error:", err);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Why Should You Hire Me?</h1>

      <div className="mb-6">
        <label className="font-semibold block mb-2">Paste Job Description</label>
        <textarea
          rows={10}
          className="w-full p-4 border border-gray-300 rounded-md bg-[#1f1f1f] text-white"
          placeholder="Paste job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
      </div>

      <button
        className={`font-semibold px-6 py-3 rounded-md transition 
          ${jobDesc.trim() === "" || loading 
            ? "bg-gray-500 cursor-not-allowed" 
            : "bg-accent hover:bg-accent/90 text-white"
          }`}
        onClick={handleSubmit}
        disabled={loading || jobDesc.trim() === ""}
      >
        {loading ? "Generating..." : "Generate why you should hire me"}
      </button>

      {response && (
        <div className="mt-10 bg-[#232329] text-white p-6 rounded-lg border border-accent">
          <h2 className="text-2xl font-semibold mb-4">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
