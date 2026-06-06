import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Warehouse } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="font-display text-lg font-medium text-primary-foreground">
              Star Turmerics
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Premium Indian turmeric, sourced directly from trusted farms across Erode and Salem,
            Tamil Nadu, and shipped to global markets with consistency, traceability and care.
          </p>
          <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
            <a
              href="mailto:starturmericserode@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 shrink-0 text-turmeric" />
              starturmericserode@gmail.com
            </a>
            <a
              href="tel:+917598181199"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-turmeric" />
              +91 75981 81199
            </a>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
              <span>
                <span className="block font-medium text-primary-foreground/90">Office</span>
                6, Muthusamy St, Fort, Sathy Road, Erode – 638001
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <Warehouse className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
              <span>
                <span className="block font-medium text-primary-foreground/90">Warehouse</span>
                Site No: 36, Turmeric Complex, Manjal Valaham, Nasiyanur Road, Erode – 638108
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium text-primary-foreground">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {[
              { to: "/about", label: "About us" },
              { to: "/products", label: "Products" },
              { to: "/process", label: "Our process" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium text-primary-foreground">Products</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {[
              "Turmeric Finger",
              "Turmeric Bulb",
              "Panangali Turmeric",
              "Unpolished Turmeric",
              "Double-Polished",
            ].map((p) => (
              <li key={p}>
                <Link to="/products" className="transition-colors hover:text-primary-foreground">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:py-6">
          <p>&copy; {year} Star Turmerics. All rights reserved.</p>
          <p>Premium Indian Turmeric · Erode &amp; Salem, Tamil Nadu · Global Exports</p>
        </div>
      </div>
    </footer>
  );
}
