"use client";
import React from "react";
import quote from "@/assets/quote.svg";
import john from "@/assets/john.png";
import sophie from "@/assets/sophie.png";
import naomi from "@/assets/naomi.png";
import jane from "@/assets/jane.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      comment: "My skin has never felt this radiant. Auréla is pure magic.",
      profile: sophie,
      name: "Sophie Micheals",
      tag: "@sophiemicheals",
    },
    {
      id: 2,
      comment: "The serum transformed my routine. Worth every penny.",
      profile: john,
      name: "John Smith",
      tag: "@johnsmith",
    },
    {
      id: 3,
      comment: "Auréla's serum gave me instant glow. My holy grail!",
      profile: naomi,
      name: "Naomi Carter",
      tag: "@naomicarter",
    },
    {
      id: 4,
      comment: "Finally, a luxury brand that delivers on its promises.",
      profile: jane,
      name: "Jane Jones",
      tag: "@janejones",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-[1200px] mx-auto font-quicksand text-tertiary px-10 py-16 flex flex-col items-center gap-6"
    >
      <h3 className="font-playfair text-primary text-5xl font-bold">
        Beauty, Verified
      </h3>
      <p className="text-lg font-medium">
        See the Auréla difference through their eyes
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
      >
        {reviews.map((review) => (
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            key={review.id}
            className="p-6 rounded-[20px] flex flex-col gap-2 justify-between border border-primary"
          >
            <Image src={quote} width={41} height={32} alt="quote sign" />
            <p className="text-[22px]">{review.comment}</p>
            <div className="flex gap-2">
              <Image
                src={review.profile}
                width={54}
                height={54}
                alt="profile"
              />
              <p className="flex flex-col font-playfair">
                {review.name}{" "}
                <span className="font-quicksand text-sm">{review.tag}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
