"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const avatars = [
  "/images/Hero-section-chocomelt.jpeg",
  "/images/Hero-section-chocomelt.jpeg",
  "/images/Hero-section-chocomelt.jpeg",
  "/images/Hero-section-chocomelt.jpeg",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-background-cream to-accent/20 organic-blob opacity-60" />
        <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-background-warm to-accent/10 organic-blob opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium tracking-widest uppercase text-accent"
          >
            Handmade Fresh Daily
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-primary leading-[1.1] tracking-tight"
          >
            Cookies that{" "}
            <span className="text-gradient italic">melt hearts.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-text/70 max-w-lg leading-relaxed"
          >
            Our handcrafted cookies are baked fresh every day using premium
            ingredients, Belgian chocolate, and lots of love.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button size="lg" className="group" asChild>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="group" asChild>
              <Link href="#shop">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 pt-2"
          >
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Customer ${i + 1}`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-primary">
                  4.9 Rating
                </span>
              </div>
              <p className="text-sm text-text/60">2500+ Happy Customers</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative h-[480px] sm:h-[560px] lg:h-[620px]"
        >
          <div className="relative w-full h-full">
  <div className="absolute inset-4 sm:inset-8 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/15">
    <Image
      src="/images/Hero section chocomelt.jpeg"
      alt="Choco Melt Premium Cookies"
      fill
      className="object-cover object-center"
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
