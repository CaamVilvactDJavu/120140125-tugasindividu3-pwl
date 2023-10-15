import React from "react";

function Tentang() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h2 className="text-center text-9xl font-extrabold">Tentang</h2>
        </div>
        <p>
          Nama :{" "}
          <span className="underline font-bold">Ilham Fadhlur Rahman</span>
        </p>
        <p>
          Nim : <span className="underline font-bold">120140125</span>
        </p>
        <p>
          Program Studi :{" "}
          <span className="underline font-bold">Teknik Informatika</span>
        </p>
        <p>
          Kelas :{" "}
          <span className="underline font-bold">Pemrograman Web Lanjut</span>
        </p>
      </div>
    </div>
  );
}

export default Tentang;
