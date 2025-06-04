import Image from "next/image";
import React from "react";
import serum from "@/assets/serum.png";
import { ArrowRightIcon } from "lucide-react";

export default function Story() {
  return (
    <section className="bg-white py-12 px-5 md:px-6">
      <div className="flex items-center max-md:flex-col gap-6 md:gap-28 max-w-[1200px] mx-auto">
        <div className="md:w-1/2">
          <figure className="bg-[#F4C2C21A] max-w-[451px] w-full px-40 py-12 shadow-xl">
            <Image src={serum} width={127} height={354} alt="acid serumm" />
          </figure>
        </div>
        <div className="md:w-1/2 max-md:p-6 flex flex-col gap-6 justify-center">
          <h3 className="font-playfair text-primary font-semibold text-4xl">
            Where Science Meets Soul
          </h3>
          <p className="font-quicksand text-tertiary">
            At Auréla, we believe that true beauty begins with intention. Our
            products are thoughtfully designed to nourish the skin and elevate
            daily routines into moments of quiet luxury
          </p>
          <button className="font-quicksand cursor-pointer text-primary font-semibold text-left flex gap-4 items-center">
            Discover Our Story <ArrowRightIcon className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
