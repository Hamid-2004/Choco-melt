import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white/80">
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="#home"
              className="font-serif text-xl font-semibold text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              ChocoMelt
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Artisan cookies crafted with premium Belgian chocolate and baked
              fresh daily. Contact us on WhatsApp to place your order.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                123 Baker Street, Sweet City, SC 12345
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                hello@chocomelt.com
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BD5A] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Choco Melt. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
