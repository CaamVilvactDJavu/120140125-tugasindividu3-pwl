import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MessageContext } from "./App";
import Kontak from "../Kontak";

test("checks if the message is submitted correctly", () => {
  const addMessage = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <MessageContext.Provider value={{ addMessage }}>
      <Kontak />
    </MessageContext.Provider>
  );

  const textarea = getByPlaceholderText("Kirim Pesan...");
  const sendButton = getByText("Kirim");

  fireEvent.change(textarea, { target: { value: "Test message" } });
  fireEvent.click(sendButton);

  expect(addMessage).toHaveBeenCalledWith("Test message");
});
