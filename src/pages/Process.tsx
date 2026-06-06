import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import sourcingImg from "@/assets/process-sourcing.jpg";
import processingImg from "@/assets/process-processing.jpg";
import exportImg from "@/assets/process-export.jpg";

const steps = [
  {
    n: "01",
    title: "Sourcing",
    img: sourcingImg,
    body: "We partner directly with growers in Erode, Tamil Nadu — selecting harvests by colour, size and curcumin content. No middlemen, no anonymous lots.",
  },
  {
    n: "02",
    title: "Processing",
    img: processingImg,
    body: "Handpicked rhizomes are cleaned, sorted and polished in modern, food-grade facilities. Every batch is sampled and lab-tested for purity, moisture and microbial safety.",
  },
  {
    n: "03",
    title: "Export",
    img: exportImg,
    body: "Vacuum-sealed and palletised for long-haul shipping, our containers leave Indian ports with full documentation — ready for clearance anywhere in the world.",
  },
];

function ProcessStep({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const imgRef = useScrollAnimation({ variant: index % 2 === 0 ? "from-left" : "from-right" });
  const textRef = useScrollAnimation({ variant: index % 2 === 0 ? "from-right" : "from-left" });
  const detailsRef = useScrollAnimation({ stagger: true, threshold: 0.25 });

  return (
    <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
      <div ref={imgRef} className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <img
          src={step.img}
          alt={step.title}
          width={1280}
          height={900}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
        />
      </div>
      <div ref={textRef} className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <p className="font-display text-4xl text-turmeric sm:text-5xl">{step.n}</p>
        <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{step.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{step.body}</p>
        <div ref={detailsRef} className="mt-8 grid gap-3">
          {["Supplier traceability", "Export documentation", "Quality-first handling"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const heroRef = useScrollAnimation({ threshold: 0.05 });
  const overviewRef = useScrollAnimation<HTMLOListElement>({ stagger: true, threshold: 0.2 });
  const ctaRef = useScrollAnimation({ variant: "scale-up" });

  return (
    <>
      <SEO
        title="Process — Star Turmerics"
        description="Our turmeric supply chain in three steps: handpicked sourcing from Erode and Salem farms, processing in modern facilities and exporting worldwide."
        ogTitle="Our Process — Star Turmerics"
        ogDescription="Sourcing, processing and global export — a transparent turmeric supply chain."
        canonical="https://starturmeric.com/process"
      />
      <SiteLayout>
        <section className="bg-gradient-soft">
          <div ref={heroRef} className="container-prose py-20 sm:py-24">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Our process
            </span>
            <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              From farm to global market — in three deliberate steps.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A transparent supply chain designed to give international buyers consistency, quality
              and peace of mind.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-background">
          <ol ref={overviewRef} className="container-prose grid gap-5 py-10 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="border-l border-border pl-4">
                <p className="font-display text-sm text-turmeric">{step.n}</p>
                <h2 className="mt-1 font-display text-xl text-foreground">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body.split(".")[0]}.
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-background">
          <div className="container-prose space-y-16 py-20 sm:space-y-24 sm:py-24">
            {steps.map((s, i) => (
              <ProcessStep key={s.n} step={s} index={i} />
            ))}
          </div>
        </section>

        <section className="bg-secondary/40">
          <div ref={ctaRef} className="container-prose py-16 text-center sm:py-20">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Ready to source premium turmeric?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Tell us your variety, volume and destination — we&apos;ll handle the rest.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
