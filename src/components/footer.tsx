import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-tertiary font-quicksand px-6 md:px-10 py-16">
      <section className="max-w-[1360px] mx-auto flex flex-col gap-36">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-primary italic font-medium text-[32px]">
              Auréla
            </h4>
            <p>FOLLOW US</p>
            <div>Twitter.Instagram.Facebook</div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-primary font-semibold text-[20px]">
              SHOP
            </h4>
            <ul className="flex flex-col font-medium gap-3.5">
              <li>Cellular Renewal Serum</li>
              <li>Overnight Repair Cream</li>
              <li>Luminous Cleanser</li>
              <li className="underline">View all</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-primary font-semibold text-[20px]">
              LEARN
            </h4>
            <ul className="flex flex-col font-medium gap-3.5">
              <li>Skincare Essentials</li>
              <li>Ingredient Glossary</li>
              <li>Expert Tips</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-primary font-semibold text-[20px]">
              SUPPORT
            </h4>
            <ul className="flex flex-col font-medium gap-3.5">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping and Returns</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <p>&copy; 2025 AURÉLA. Beauty, perfected.</p>
          <p>Privacy Terms Accessibility</p>
          <p></p>
        </div>
      </section>
    </footer>
  );
}
