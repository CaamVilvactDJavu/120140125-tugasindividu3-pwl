import React from "react";

function Beranda() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h2 className="text-center text-9xl font-extrabold">Beranda</h2>
        </div>
        <p>Tugas Pemrograman Web Lanjut - Tugas Individu 3</p>
        <img
          src="./hero.jpg"
          alt="Unsplash"
          className="w-full mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Beranda;
