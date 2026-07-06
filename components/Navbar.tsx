"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 80], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-white/90 text-xs sm:text-sm py-2.5 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <p>Freshly baked cookies crafted with care, every single day.</p>
        </div>
      </div>

      <motion.nav
        style={{ opacity: headerOpacity }}
        className={cn(
          "transition-all duration-500 section-padding",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-sm shadow-primary/5 border-b border-border/50"
            : "bg-background/40 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-18">
          <Link
            href="#home"
            className="font-serif text-xl font-semibold text-primary tracking-tight hover:opacity-80 transition-opacity"
          >
            ChocoMelt
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-text/70 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <WhatsAppButton className="hidden md:inline-flex items-center gap-2 h-9 px-5 text-sm" />
            <button
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? "auto" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pb-6 pt-2 flex flex-col gap-1 border-t border-border/50 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-text/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <WhatsAppButton className="flex w-full items-center justify-center gap-2 h-10 px-5 text-sm" />
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
}
