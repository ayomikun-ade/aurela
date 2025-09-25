"use client";
import React from "react";
import { motion } from "motion/react";

export default function Future() {
  return (
    <section className="bg-primary font-playfair py-36 px-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-[788px] mx-auto"
      >
        <h5 className="text-4xl">
          Nature holds timeless secrets. Auréla reveals them through refined and
          purposeful skincare
        </h5>
        <p className="font-quicksand uppercase mt-6">
          The Future of Pure and Intentional Skincare
        </p>
      </motion.div>
    </section>
  );
}
