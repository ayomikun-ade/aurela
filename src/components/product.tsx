"use client";
import React from "react";
import serum from "@/assets/serum2.png";
import parfum from "@/assets/parfum.png";
import balm from "@/assets/balm.png";
import moisture from "@/assets/moisture.png";
import Image from "next/image";
import like from "@/assets/like.svg";
import { easeOut, motion } from "motion/react";

export default function Product() {
  const products = [
    {
      id: 1,
      image: serum,
      name: "Auréla Hyaluronic Acid Serum",
      sub: "Every drop, a dewy glow",
      price: "21,000",
    },
    {
      id: 2,
      image: parfum,
      name: "Auréla Signature Essence Perfume",
      sub: "Soft. Sophisticated. Unforgettable",
      price: "35,000",
    },
    {
      id: 3,
      image: balm,
      name: "Auréla Lip Silk Balm",
      sub: "Hydration with a hint of hush",
      price: "9,500",
    },
    {
      id: 4,
      image: moisture,
      name: "Auréla Velvet Dew Moisturizer",
      sub: "Where softness meets strength",
      price: "16,000",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        easeOut,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="bg-primary font-quicksand text-tertiary px-10 py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-[1200px] mx-auto flex flex-col items-center gap-6"
      >
        <h3 className="font-playfair text-white text-center text-5xl font-bold">
          Your Beauty, Our Devotion
        </h3>
        <p className="text-lg font-medium text-white text-center">
          From the first cleanse to the final glow, Auréla brings elegance to
          every step of your skincare journey
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="p-6 rounded-[5px] text-center bg-[#FEF9F9] flex flex-col gap-10 justify-between items-center"
            >
              <div className="flex items-end p-3">
                <Image
                  src={product.image}
                  width={288}
                  height={288}
                  alt="quote sign"
                />
                <Image src={like} width={24} height={24} alt="quote sign" />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-primary font-quicksand font-semibold">
                  {product.name}
                </p>
                <span>{product.sub}</span>
              </div>
              <p className="text-primary font-playfair font-semibold">
                <span className="">₦</span>
                {product.price}
              </p>

              <motion.button
                whileHover={{
                  rotate: [0, 8, -8, 8, 0],
                  transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                  },
                }}
                className="px-6 py-3 border border-primary rounded-[5px] text-primary hover:opacity-65 cursor-pointer"
              >
                Add to your cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
