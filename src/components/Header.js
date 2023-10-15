import React from "react";
import { Link } from "react-router-dom";

const MenuHeader = [
  { title: "Beranda", url: "/" },
  { title: "Tentang", url: "/tentang" },
  { title: "Kontak", url: "/kontak" },
];

function Header() {
  return (
    <>
      <div className="w-full border-b-2 border-slate-900">
        <div className="mx-4 md:mx-20 lg:mx-40">
          <div className="flex flex-col md:flex-row justify-between items-center my-2 p-2">
            {MenuHeader.map((item, index) => (
              <div className="font-normal" key={index}>
                <Link to={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
