import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import starLogo from "@/assets/star-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-soft" : "shadow-none",
      ].join(" ")}
    >
      <div className="container-prose flex h-24 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={starLogo}
            alt="Star Turmerics logo"
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Star <span className="text-primary">Turmerics</span>
            </span>
            <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Since 1989
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                [
                  "relative font-display text-[20px] font-bold tracking-normal transition-colors",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300",
                  isActive
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary hover:after:w-full",
                ].join(" ")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-soft hover:scale-[1.02]"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "absolute transition-all duration-200",
              open ? "opacity-100 rotate-0" : "opacity-0 rotate-90",
            ].join(" ")}
          >
            <X className="h-5 w-5" />
          </span>
          <span
            className={[
              "absolute transition-all duration-200",
              open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0",
            ].join(" ")}
          >
            <Menu className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden border-t border-border transition-all duration-300 ease-in-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container-prose flex flex-col gap-1 py-3" aria-label="Mobile navigation">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                [
                  "rounded-md px-2 py-2.5 font-display text-[20px] font-bold tracking-normal transition-colors",
                  isActive
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-secondary hover:text-primary",
                ].join(" ")
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
