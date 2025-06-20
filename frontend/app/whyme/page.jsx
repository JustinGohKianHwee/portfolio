"use client";

import { useState } from "react";

export default function WhyMePage() {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsing, setParsing] = useState(false);
  const [response, setResponse] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setParsing(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/api/whyme/upload_jd", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const { text } = await res.json();
      setJobDesc(text);
    } catch (err) {
      console.error("PDF parse error:", err);
      alert("Failed to parse PDF. Check console for details.");
    } finally {
      setParsing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/whyme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jobDesc }),
      });
      if (!res.ok) throw new Error(await res.text());
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
        <label className="font-semibold block mb-2"> 1&#41; Upload a Job Description (PDF)</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          disabled={parsing}
        />
        {parsing && <p className="text-sm text-gray-400">Parsing PDF…</p>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="font-semibold block mb-2">2&#41; Or Paste in Job Description Text</label>
          <textarea
            rows={10}
            className="w-full p-4 border border-gray-300 rounded-md bg-[#1f1f1f] text-white"
            placeholder="Paste job description here…"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            disabled={parsing}
          />
        </div>

        <button
          type="submit"
          className={`font-semibold px-6 py-3 rounded-md transition 
            ${!jobDesc.trim() || loading 
              ? "bg-gray-500 cursor-not-allowed" 
              : "bg-accent hover:bg-accent/90 text-white"
            }`}
          disabled={loading || !jobDesc.trim()}
        >
          {loading ? "Generating…" : "Generate why you should hire me"}
        </button>
      </form>

      {response && (
        <div className="mt-10 bg-[#232329] text-white p-6 rounded-lg border border-accent">
          <h2 className="text-2xl font-semibold mb-4">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
