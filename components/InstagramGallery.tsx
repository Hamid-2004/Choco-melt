"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { Reveal, scaleIn, staggerContainer } from "@/lib/animations";
import { instagramImages } from "@/lib/data";

export default function InstagramGallery() {
  return (
    <section className="section-padding py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            @chocomelt
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-medium mt-3">
            Follow Our Journey
          </h2>
          <p className="text-text/60 mt-3">
            Daily inspiration from our bakery kitchen
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {instagramImages.map((src, index) => (
            <motion.a
              key={index}
              href="#"
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 50vw, 40vw"
                    : "(max-width: 768px) 50vw, 20vw"
                }
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
