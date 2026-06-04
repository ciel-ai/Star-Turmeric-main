import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="font-display text-lg font-medium text-primary-foreground">
              Star Turmeric
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Premium Indian turmeric, sourced directly from trusted farms in Erode and shipped to
            global markets with consistency, traceability and care.
          </p>
          <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
            <a
              href="mailto:starturmericexports@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 shrink-0 text-turmeric" />
              starturmericexports@gmail.com
            </a>
            <a
              href="tel:+919790831644"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-turmeric" />
              +91 97908 31644
            </a>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
              #294, 5th Cross Street, Indra Nagar, Anaicut Road, Walajapet - 632513
            </span>
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
              "Unpolished Turmeric",
              "Double-Polished",
              "Panangali Turmeric",
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
          <p>&copy; {year} Star Turmeric. All rights reserved.</p>
          <p>Premium Indian Turmeric | Tamil Nadu | Global Exports</p>
        </div>
      </div>
    </footer>
  );
}
