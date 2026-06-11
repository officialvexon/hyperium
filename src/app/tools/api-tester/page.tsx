'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ApiTesterPage() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos/1");
  const [method, setMethod] = useState("GET");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<number | null>(null);

  const handleSend = async () => {
    if (!url) return;
    
    setLoading(true);
    setResponse("");
    setStatus(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method !== "GET" && method !== "HEAD") {
        if (requestBody) {
          try {
            // validate json format
            JSON.parse(requestBody);
            options.body = requestBody;
          } catch (e) {
            setResponse("Error: Invalid JSON Request Body");
            setLoading(false);
            return;
          }
        }
      }

      const res = await fetch(url, options);
      setStatus(res.status);

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setResponse(JSON.stringify(data, null, 2));
      } else {
        const text = await res.text();
        setResponse(text);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResponse(`Error: ${err.message}`);
      } else {
        setResponse("Error: Failed to fetch");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">API Tester</h1>
        <p className="text-neutral-400 mb-8">Test your API endpoints with a simple and intuitive interface.</p>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full md:w-32 bg-neutral-900 border border-white/10 rounded-xl p-4 text-rose-400 font-bold focus:outline-none"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input 
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-rose-500/50 font-mono"
              placeholder="https://api.example.com/v1/resource"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
              <label className="block text-sm font-medium text-neutral-400 mb-4">Request Body (JSON)</label>
              <textarea 
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                disabled={method === "GET" || method === "HEAD"}
                className="w-full flex-1 min-h-[300px] bg-black border border-white/10 rounded-xl p-4 font-mono text-sm text-rose-300 focus:outline-none focus:border-rose-500/50 disabled:opacity-50"
                placeholder='{"key": "value"}'
              />
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-neutral-400">Response</label>
                {status !== null && (
                  <span className={`text-sm font-bold px-2 py-1 rounded ${status >= 200 && status < 300 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    Status: {status}
                  </span>
                )}
              </div>
              <textarea 
                readOnly
                value={response}
                className="w-full flex-1 min-h-[300px] bg-neutral-900 border border-white/10 rounded-xl p-4 font-mono text-sm text-neutral-300 focus:outline-none"
                placeholder="Response data will appear here..."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
