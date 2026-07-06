"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Candy,
  Cherry,
  Cookie,
  Gift,
  Leaf,
  Nut,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Reveal, scaleIn, staggerContainer } from "@/lib/animations";
import { categories } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const categoryIcons = [Cookie, Candy, Sparkles, Cherry, Nut, Gift];

export default function Categories() {
  return (
    <section id="categories" className="section-padding py-24 bg-background-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 organic-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <Reveal className="text-center mb-14">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Collections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-medium mt-3">
            Cookie Categories
          </h2>
          <p className="text-text/60 mt-3 max-w-lg mx-auto">
            Explore our curated selection of artisan cookies, each crafted with
            passion and premium ingredients.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Leaf;
            return (
              <motion.a
                key={category.name}
                href={getWhatsAppUrl(`Hello! I'm interested in your ${category.name} collection.`)}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className={cn(
                  "group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer",
                  "shadow-md hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500"
                )}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-accent/40 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl text-white font-medium">
                        {category.name}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">
                        {category.count} varieties
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
