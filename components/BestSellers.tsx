"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, scaleIn, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/data";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function BestSellers() {
  return (
    <section id="shop" className="section-padding py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl text-primary font-medium">
              Our Best Sellers
            </h2>
            <p className="text-text/60 mt-3 text-lg">
              Freshly baked favorites loved by everyone.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors self-start sm:self-auto"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className={cn(
                "group bg-white rounded-3xl overflow-hidden border border-border/50",
                "shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              )}
            >
              <div className="relative aspect-square overflow-hidden bg-background-warm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3.5 h-3.5",
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "fill-border text-border"
                      )}
                    />
                  ))}
                  <span className="text-xs text-text/50 ml-1">
                    {product.rating}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-primary font-medium">
                  {product.name}
                </h3>
                <p className="text-sm text-text/60 line-clamp-2">
                  {product.description}
                </p>

                <a
                  href={getProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors pt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
