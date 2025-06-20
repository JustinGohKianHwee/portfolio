"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen max-w-6xl mx-auto">
      <h1 className="col-span-1 md:col-span-2 text-4xl font-bold mb-10 text-center"> Why Should You Hire Me? </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col space-y-6">
        <div>
          <label className="font-semibold block mb-2">
            1&#41; Upload a Job Description (PDF)
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            disabled={parsing}
          />
          {parsing && (
            <p className="mt-2 text-sm text-gray-400">Parsing PDF…</p>
          )}
        </div>

        <div>
          <label className="font-semibold block mb-2">
            2&#41; Or Paste in Job Description Text
          </label>
          <Textarea
          rows={15}
          placeholder="Paste job description here…"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          disabled={parsing}
          className="bg-[#1f1f1f] text-white border-gray-700 p-4"
        />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={`font-semibold px-6 py-3 rounded-md transition
            ${(!jobDesc.trim() || loading)
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-accent hover:bg-accent/90 text-white"}`
          }
          disabled={!jobDesc.trim() || loading}
        >
          {loading ? "Generating…" : "Generate why you should hire me"}
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        {!response && !parsing && (
          <div className="flex-1 bg-[#232329] border border-accent text-gray-500 p-6 rounded-lg">
            Your AI response will appear here.
          </div>
        )}

        {response && (
          <div className="flex-1 bg-[#232329] text-white p-6 rounded-lg border border-accent flex-1 overflow-auto">
            <h2 className="text-2xl font-semibold mb-4">AI Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
