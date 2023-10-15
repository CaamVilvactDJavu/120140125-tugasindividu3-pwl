import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beranda from "./Beranda";
import Tentang from "./Tentang";
import Kontak from "./Kontak";

export const MessageContext = createContext();

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <MessageContext.Provider value={{ addMessage }}>
      <div className="flex flex-col min-h-screen">
        {" "}
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>

          <div className="text-center text-2xl font-bold py-4">
            Pesan terkirim : {messages.length}
          </div>
        </div>
        <Footer />
      </div>
    </MessageContext.Provider>
  );
}

export default App;
