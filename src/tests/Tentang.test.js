import React from "react";
import { render } from "@testing-library/react";
import Tentang from "../Tentang";

test("renders Tentang component correctly", () => {
  const { getByText } = render(<Tentang />);

  expect(getByText("Tentang")).toBeInTheDocument();

  expect(getByText("Nama :")).toBeInTheDocument();
  expect(getByText("Ilham Fadhlur Rahman")).toBeInTheDocument();

  expect(getByText("Nim :")).toBeInTheDocument();
  expect(getByText("120140125")).toBeInTheDocument();

  expect(getByText("Program Studi :")).toBeInTheDocument();
  expect(getByText("Teknik Informatika")).toBeInTheDocument();

  expect(getByText("Kelas :")).toBeInTheDocument();
  expect(getByText("Pemrograman Web Lanjut")).toBeInTheDocument();
});
