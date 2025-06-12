import React from "react";
import ChatInterface from "./components/ChatInterface";
import WalletConnect from "./components/WalletConnect";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">BlockPilot ✈️</h1>
      <WalletConnect />
      <ChatInterface />
    </div>
  );
}
