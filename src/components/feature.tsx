import Image from "next/image";
import React from "react";
import FeatureImage from "@/assets/feature.png";
import { ArrowRight } from "lucide-react";

export default function Feature() {
  return (
    <section className="max-w-[1200px] font-quicksand text-tertiary mx-auto flex md:items-center max-md:flex-col pt-12 md:px-10">
      <div className="md:w-1/2 lg:w-3/5 p-12 flex flex-col justify-center gap-4">
        <span className="text-primary">The Art of Body Care</span>
        <h3 className="text-primary font-playfair font-semibold text-4xl">
          Visible Results. Unmistakable Comfort
        </h3>
        <p>
          Our body care line is crafted with high performance formulas that
          visibly firm, smooth, and hydrate your skin. Lightweight and quickly
          absorbed, each product leaves your skin feeling deeply nourished and
          soft to the touch. Your body deserves the same level of care and
          attention as your face
        </p>
        <button className="px-6 py-3 cursor-pointer hover:opacity-65 border border-primary rounded-[5px] text-primary sm:w-fit sm:gap-4 flex justify-between items-center">
          Discover More <ArrowRight className="text-primary" />
        </button>
      </div>
      <div className="md:w-1/2 lg:w-2/5">
        <figure>
          <Image
            src={FeatureImage}
            width={663}
            height={828}
            alt="feature image"
          />
        </figure>
      </div>
    </section>
  );
}
