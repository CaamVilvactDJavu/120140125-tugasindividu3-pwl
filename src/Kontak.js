import React, { useState, useContext } from "react";
import { MessageContext } from "./App";

function Kontak() {
  const [message, setMessage] = useState("");
  const { addMessage } = useContext(MessageContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setErrorMessage("Mohon masukkan pesan!");
      return;
    }

    addMessage(message);
    setMessage("");
    setErrorMessage(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="mx-4 md:mx-20 lg:mx-40">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <h2 className="text-center text-9xl font-extrabold">Kontak</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Kirim Pesan..."
                className="border-2 rounded-md border-sky-800 p-2"
              ></textarea>
              {errorMessage && (
                <div className="font-bold text-red-500 mt-2">
                  {errorMessage}
                </div>
              )}
            </div>
            <div>
              <button
                className="font-bold p-2 rounded-md my-2 bg-green-300 hover:bg-green-500"
                type="submit"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Kontak;
