import React from "react";
import { render } from "@testing-library/react";
import Beranda from "../Beranda";

test("renders Beranda component correctly", () => {
  const { getByText, getByAltText } = render(<Beranda />);

  expect(getByText("Beranda")).toBeInTheDocument();

  expect(
    getByText("Tugas Pemrograman Web Lanjut - Tugas Individu 3")
  ).toBeInTheDocument();

  expect(getByAltText("Unsplash")).toBeInTheDocument();
});
