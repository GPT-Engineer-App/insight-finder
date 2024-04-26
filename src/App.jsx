import React, { useState } from "react";

import { FaHome, FaRobot } from "react-icons/fa";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <nav className="bg-gray-900 p-4">
        <ul className="flex space-x-4">
          <li className="cursor-pointer" onClick={() => handleNavigation("dashboard")}>
            <FaHome className="inline mb-1" /> Dashboard
          </li>
          <li className="cursor-pointer" onClick={() => handleNavigation("chat")}>
            <FaRobot className="inline mb-1" /> Chat
          </li>
        </ul>
      </nav>
      <div className="p-4">{currentPage === "dashboard" ? <Dashboard /> : <Chat />}</div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Real Estate Dashboard</h1>
      <p className="mt-4">Summary of real estate insights, trends, and more.</p>
      {}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Average Property Prices</h2>
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
          <h2>Average Property Prices (Placeholder)</h2>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "end", height: "200px" }}>
            <div style={{ height: "100%", width: "20px", background: "#4CAF50", marginBottom: "10px" }}>NY</div>
            <div style={{ height: "80%", width: "20px", background: "#2196F3", marginBottom: "10px" }}>LA</div>
            <div style={{ height: "60%", width: "20px", background: "#ff9800", marginBottom: "10px" }}>CHI</div>
            <div style={{ height: "50%", width: "20px", background: "#f44336", marginBottom: "10px" }}>HOU</div>
            <div style={{ height: "70%", width: "20px", background: "#9c27b0", marginBottom: "10px" }}>PHX</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Property Sales Trends</h2>
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
          <h2>Property Sales Trends (Placeholder)</h2>
          <div style={{ height: "100px", background: "#90caf9", margin: "10px 0" }}>Graph Line</div>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Real Estate Chatbot</h1>
      <p className="mt-4">Ask any questions about real estate.</p>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 bg-gray-700">{}</div>
        <div className="p-4 bg-gray-900">
          <input type="text" placeholder="Type your message..." className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
          <button className="p-2 ml-2 bg-blue-500 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
