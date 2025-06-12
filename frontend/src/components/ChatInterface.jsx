import React, { useState } from "react";
import axios from "axios";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await axios.post("http://localhost:5000/generate-action", {
      message,
    });
    setResponse(res.data.action);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 bg-gray-800 text-white"
        rows={4}
        placeholder="Ask BlockPilot something like 'Swap 0.1 ETH for DAI'"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded"
      >
        Send
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <strong>AI Response:</strong> {response}
        </div>
      )}
    </div>
  );
}
