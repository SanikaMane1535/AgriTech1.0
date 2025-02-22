import React, { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyARANhzNFNLFZcVSKzl-qK_jF14VlLczc0"; // Replace with your actual API key

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const responseObject = res.data.candidates?.[0]?.content;
      if (responseObject && responseObject.parts) {
        setResponse(responseObject.parts.map((part) => part.text).join("\n"));
      } else {
        setResponse("No response received.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error: Unable to get a response. Check the API key or try again later.");
    }

    setLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,ai')" }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🤖 AI ChatBot</h2>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleGenerate}
          className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI 🤖"}
        </button>

        {response && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100 text-gray-800 text-left max-h-60 overflow-y-auto">
            <h4 className="font-semibold text-lg mb-2">💬 Response:</h4>
            <p className="text-gray-700">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
