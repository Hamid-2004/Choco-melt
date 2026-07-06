"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/animations";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section id="newsletter" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-light to-accent p-10 sm:p-16 text-center shadow-2xl shadow-primary/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 organic-blob" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 organic-blob" />
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="w-7 h-7 text-white" />
              </motion.div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Stay Sweet With Us
              </h2>
              <p className="text-white/70 mt-3 max-w-md mx-auto">
                Subscribe for exclusive offers, new flavor announcements, and
                baking tips delivered to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="flex-1 h-12 px-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <Button
                  type="submit"
                  className="bg-white text-primary hover:bg-white/90 h-12 px-6 group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-white/40 text-xs mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
