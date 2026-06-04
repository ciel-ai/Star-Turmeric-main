import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Globe2, Leaf, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImg from "@/assets/hero-turmeric.jpg";
import farmerImg from "@/assets/about-farmer.jpg";
import fingerImg from "@/assets/product-finger.jpg";
import bulbImg from "@/assets/product-bulb.jpg";
import polishedImg from "@/assets/product-polished.jpg";
import sourcingImg from "@/assets/process-sourcing.jpg";
import processingImg from "@/assets/process-processing.jpg";
import exportImg from "@/assets/process-export.jpg";

const trustFeatures = [
  {
    icon: Leaf,
    title: "Direct from farms",
    body: "Sourced from trusted growers in Erode, the turmeric capital of India.",
  },
  {
    icon: ShieldCheck,
    title: "Quality assured",
    body: "Lab-tested for curcumin, moisture, purity and microbial safety.",
  },
  {
    icon: Globe2,
    title: "Global logistics",
    body: "Reliable container shipments to ports across Asia, EU and the Americas.",
  },
];

const productPreviews = [
  { img: fingerImg, name: "Turmeric Finger", note: "Whole dried rhizomes" },
  { img: bulbImg, name: "Turmeric Bulb", note: "Mother rhizomes" },
  { img: polishedImg, name: "Double-Polished", note: "Bright golden finish" },
];

const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    body: "Hand-selected harvests from partnered farms in Erode, Tamil Nadu.",
    img: sourcingImg,
  },
  {
    step: "02",
    title: "Processing",
    body: "Cleaning, grading and polishing in hygienic, modern facilities.",
    img: processingImg,
  },
  {
    step: "03",
    title: "Export",
    body: "Container shipments delivered to ports across the globe.",
    img: exportImg,
  },
];

function HeroSection() {
  const textRef = useScrollAnimation({ variant: undefined, threshold: 0.05 });
  const imgRef = useScrollAnimation({ variant: "from-right", threshold: 0.05 });

  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="container-prose grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div ref={textRef} className="lg:col-span-6 lg:pt-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
            Tamil Nadu, India · Exporting worldwide
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
            Premium Indian Turmeric for{" "}
            <span className="italic text-primary">Global Markets</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From the heart of Tamil Nadu, Star Turmeric delivers consistent, high-curcumin turmeric
            to spice houses, food manufacturers and nutraceutical brands across the world.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-card"
            >
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:scale-[1.02]"
            >
              Request a quote
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-6">
            {[
              { label: "Curcumin", value: "2.5–4.5%" },
              { label: "Markets", value: "20+" },
              { label: "Varieties", value: "5" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl text-foreground sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={imgRef} className="lg:col-span-6">
          <div className="relative">
            <img
              src={heroImg}
              alt="Premium Indian turmeric powder and roots"
              width={1920}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl border border-border bg-background p-5 shadow-card sm:block">
              <p className="font-display text-sm text-muted-foreground">Curcumin content</p>
              <p className="mt-1 font-display text-3xl text-primary">2.5% – 4.5%</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Tested at every batch for global compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const ref = useScrollAnimation({ stagger: true });

  return (
    <section className="border-y border-border bg-background">
      <div ref={ref} className="container-prose grid gap-8 py-12 sm:grid-cols-3 sm:py-14">
        {trustFeatures.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <f.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  const imgRef = useScrollAnimation<HTMLImageElement>({ variant: "from-left" });
  const textRef = useScrollAnimation({ variant: "from-right" });

  return (
    <section className="bg-background">
      <div className="container-prose grid items-center gap-10 py-20 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <img
          ref={imgRef}
          src={farmerImg}
          alt="Indian farmer holding freshly harvested turmeric"
          width={1280}
          height={900}
          loading="lazy"
          className="aspect-[5/4] w-full rounded-2xl object-cover shadow-soft"
        />
        <div ref={textRef}>
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            About Star Turmeric
          </span>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Rooted in tradition. Built for global trade.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We work hand-in-hand with farming communities in Tamil Nadu to bring the finest Indian
            turmeric to international buyers. Every shipment reflects our commitment to quality,
            transparency and long-term partnerships.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const headRef = useScrollAnimation();
  const gridRef = useScrollAnimation({ stagger: true });

  return (
    <section className="bg-secondary/40">
      <div className="container-prose py-20 lg:py-24">
        <div
          ref={headRef}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Our products
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Five turmeric varieties, one consistent standard.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={gridRef} className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {productPreviews.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessPreview() {
  const headRef = useScrollAnimation();
  const gridRef = useScrollAnimation<HTMLOListElement>({ stagger: true });

  return (
    <section className="bg-background">
      <div className="container-prose py-20 lg:py-24">
        <div ref={headRef} className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Our process
          </span>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            From field to global port.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A simple, transparent supply chain — built on three steps and decades of experience.
          </p>
        </div>

        <ol ref={gridRef} className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {processSteps.map((s) => (
            <li
              key={s.step}
              className="group overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-background p-5 sm:p-6">
                <p className="font-display text-sm text-turmeric">{s.step}</p>
                <h3 className="mt-1 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CtaSection() {
  const ref = useScrollAnimation({ variant: "scale-up" });

  return (
    <section className="border-t border-border bg-background text-foreground">
      <div
        ref={ref}
        className="container-prose flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center"
      >
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
            Let&apos;s build a reliable turmeric supply for your market.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Share your specifications and we&apos;ll get back with samples and pricing.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:shadow-card"
        >
          Contact our export team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SEO
        title="Star Turmeric — Premium Indian Turmeric for Global Markets"
        description="Star Turmeric supplies premium Indian turmeric — finger, bulb, unpolished, double-polished and Panangali varieties — to global food, spice and nutraceutical markets."
        ogTitle="Star Turmeric — Premium Indian Turmeric"
        ogDescription="Premium Indian turmeric exported to global markets. Curcumin 2.5% – 4.5%. Direct from Erode farms."
        canonical="https://starturmeric.com/"
      />
      <SiteLayout>
        <HeroSection />
        <TrustStrip />
        <AboutPreview />
        <ProductsPreview />
        <ProcessPreview />
        <CtaSection />
      </SiteLayout>
    </>
  );
}
