import Image from "next/image";
import React from "react";
import hero from "@/assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#F4C2C21A] text-tertiary py-12 md:px-6">
      <section className="max-w-[1220px] mx-auto flex max-md:flex-col max-md:items-center gap-6 md:gap-28">
        <div className="md:w-1/2 flex flex-col gap-6 justify-center max-md:px-5">
          <h1 className="font-playfair font-bold text-[52px]">
            Radiance, Redefined
          </h1>
          <p className="font-quicksand font-medium text-xl">
            Indulge in skincare crafted to illuminate, restore, and empower —
            because every complexion deserves to glow
          </p>
          <div className="flex gap-4">
            <button className="bg-primary px-6 py-3 rounded-[5px] font-semibold cursor-pointer hover:opacity-65 font-quicksand text-white">
              Explore Collection
            </button>
            <button className="bg-transparent border border-primary px-6 py-3 rounded-[5px] font-semibold cursor-pointer hover:opacity-65 font-quicksand text-primary">
              Learn More
            </button>
          </div>
        </div>
        <figure className="md:w-1/2">
          <Image src={hero} width={516} height={573} alt="Hero image" />
        </figure>
      </section>
    </section>
  );
}
