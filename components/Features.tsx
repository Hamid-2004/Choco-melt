"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Sparkles, Truck } from "lucide-react";
import { Reveal, scaleIn, staggerContainer } from "@/lib/animations";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  leaf: Leaf,
  flame: Flame,
  truck: Truck,
  sparkles: Sparkles,
};

export default function Features() {
  return (
    <section className="relative">
      {/* Organic wave divider */}
      <div className="relative bg-primary overflow-hidden">
        <svg
          className="absolute -top-px left-0 w-full text-primary"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          />
        </svg>

        <div className="section-padding pt-24 pb-20 relative">
          {/* Decorative blobs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 organic-blob" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 organic-blob" />

          <Reveal className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Crafted with Care
            </h2>
            <p className="text-white/60 mt-3 max-w-md mx-auto">
              Every detail matters when creating the perfect cookie experience.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={cn(
                    "group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7",
                    "hover:bg-white/15 hover:border-accent/30 transition-all duration-500",
                    "hover:shadow-xl hover:shadow-black/10"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-1/2 transition-all duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <svg
          className="w-full text-background"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,20 C240,60 480,0 720,30 C960,60 1200,10 1440,30 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
