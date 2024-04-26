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
      {/* Additional dashboard content can be added here */}
    </div>
  );
}

function Chat() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Real Estate Chatbot</h1>
      <p className="mt-4">Ask any questions about real estate.</p>
      {/* Chat interface implementation goes here */}
    </div>
  );
}

export default App;
