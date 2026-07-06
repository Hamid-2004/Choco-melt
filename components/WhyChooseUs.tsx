"use client";

import { motion } from "framer-motion";
import { Cookie, Gift, Leaf, Sunrise, Zap } from "lucide-react";
import Image from "next/image";
import { fadeLeft, fadeRight, Reveal, staggerContainer } from "@/lib/animations";
import { whyChooseUs } from "@/lib/data";

const iconMap = {
  sunrise: Sunrise,
  chocolate: Cookie,
  leaf: Leaf,
  gift: Gift,
  zap: Zap,
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding py-24 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal variants={fadeLeft}>
          <div className="relative">
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
  src="/images/why choose us.jpeg"
  alt="Why Choose Us"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-primary font-medium mt-3 leading-tight">
              Baked with passion,{" "}
              <span className="italic text-gradient">served with love</span>
            </h2>
            <p className="text-text/60 mt-4 text-lg leading-relaxed">
              We believe every cookie tells a story. From sourcing the finest
              ingredients to hand-finishing each batch, quality is never
              compromised.
            </p>
          </Reveal>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 space-y-5"
          >
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.li
                  key={item.title}
                  variants={fadeRight}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background-warm border border-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text/60 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
