import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Agritech Hub</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/resources" className="hover:text-blue-500">Resource Library</a></li>
        <li><a href="/community" className="hover:text-blue-500">Community</a></li>
        <li><a href="/Footer" className="hover:text-blue-500">About</a></li>
        <li><a href="/chatbot" className="hover:text-blue-500">Chatbot</a></li>
        <li><a href="/ProfileForm" className="hover:text-blue-500">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
