import { Menu, Search, ShoppingCart } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <header className="text-primary font-quicksand flex justify-between items-center max-w-[1200px] h-[72px] px-6 mx-auto">
      <h2 className="font-playfair text-[32px] italic font-medium ">Auréla</h2>
      <nav className="flex gap-32 max-md:hidden">
        <ul className="flex gap-8 items-center font-semibold">
          <a href="#" className="cursor-pointer hover:opacity-65">
            Home
          </a>
          <a href="#" className="cursor-pointer hover:opacity-65">
            About
          </a>
          <a href="#" className="cursor-pointer hover:opacity-65">
            Shop
          </a>
          <a href="#" className="cursor-pointer hover:opacity-65">
            Reviews
          </a>
          <a href="#" className="cursor-pointer hover:opacity-65">
            Contact
          </a>
        </ul>

        <div className="flex text-primary gap-4 p-5">
          <ShoppingCart />
          <Search />
        </div>
      </nav>
      <nav className="md:hidden">
        <Menu className="text-primary" />
      </nav>
    </header>
  );
}
