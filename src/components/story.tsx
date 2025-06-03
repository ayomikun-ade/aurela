import Image from "next/image";
import React from "react";
import serum from "@/assets/serum.png";

export default function Story() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="flex gap-28 max-w-[1200px] mx-auto">
        <div className="w-1/2">
          <figure className="bg-[#F4C2C21A] w-[451px] px-40 py-12 shadow-xl">
            <Image src={serum} width={127} height={354} alt="acid serumm" />
          </figure>
        </div>
        <div className="w-1/2 flex flex-col gap-6 justify-center">
          <h3 className="font-playfair text-primary font-semibold text-4xl">
            Where Science Meets Soul
          </h3>
          <p className="font-quicksand text-tertiary">
            At Auréla, we believe that true beauty begins with intention. Our
            products are thoughtfully designed to nourish the skin and elevate
            daily routines into moments of quiet luxury
          </p>
          <button className="font-quicksand text-primary font-semibold text-left">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
