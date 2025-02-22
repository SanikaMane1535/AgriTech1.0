import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/Index';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResourceLibrary from "./resources/ResourceLibrary";
import ProfileForm from "./components/ProfileForm";
import ChatBot from "./components/ChatBot";
import Community from "./components/community";

function App() {
  return (
    <Router>
      <Navbar /> {/* Common navigation bar */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/profileform" element={<ProfileForm />} />
        <Route path="/chatbot" element={<ChatBot/>} />
        <Route path="/community" element={<Community/>} />
       
      </Routes>
    </Router>
  );
}

export default App;