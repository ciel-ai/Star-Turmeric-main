import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import farmerImg from "@/assets/about-farmer.jpg";
import sourcingImg from "@/assets/process-sourcing.jpg";

export default function AboutPage() {
  const heroRef = useScrollAnimation({ threshold: 0.05 });
  const missionImgRef = useScrollAnimation({ variant: "from-left" });
  const missionTextRef = useScrollAnimation({ variant: "from-right" });
  const erodeImgRef = useScrollAnimation({ variant: "from-right" });
  const erodeTextRef = useScrollAnimation({ variant: "from-left" });

  return (
    <>
      <SEO
        title="About — Star Turmeric"
        description="Star Turmeric is an India-based turmeric exporter working directly with farms in Erode to deliver premium quality to global buyers."
        ogTitle="About Star Turmeric"
        ogDescription="An India-based turmeric exporter built on quality, trust and transparency."
        canonical="https://starturmeric.com/about"
      />
      <SiteLayout>
        {/* Hero */}
        <section className="bg-gradient-soft">
          <div className="container-prose grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
            <div ref={heroRef} className="lg:col-span-7">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                About us
              </span>
              <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Trusted Indian turmeric, delivered worldwide.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Star Turmeric is built on three generations of relationships with turmeric growers in
                Erode, Tamil Nadu — a region known globally for the quality of its rhizomes. We bring
                that heritage to international buyers with consistent grades, transparent processing
                and dependable logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-background">
          <div className="container-prose grid items-center gap-10 py-20 sm:gap-12 lg:grid-cols-2 lg:py-24">
            <div ref={missionImgRef}>
              <img
                src={farmerImg}
                alt="Farmer holding fresh turmeric"
                width={1280}
                height={900}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-2xl object-cover shadow-soft"
              />
            </div>
            <div ref={missionTextRef} className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">Our mission</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To make premium Indian turmeric accessible to food, spice and nutraceutical
                  businesses across the world — without compromising on quality, ethics or
                  traceability.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">Our values</h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "Direct, fair partnerships with farmers",
                    "Consistent quality — every shipment, every season",
                    "Honest documentation and on-time delivery",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-turmeric" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Erode */}
        <section className="bg-secondary/40">
          <div className="container-prose grid items-center gap-10 py-20 sm:gap-12 lg:grid-cols-2 lg:py-24">
            <div ref={erodeTextRef} className="order-2 lg:order-1">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Where it all begins
              </span>
              <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl lg:text-4xl">
                Rooted in Erode
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Known as the &quot;Turmeric City of India,&quot; Erode&apos;s soil and climate
                produce rhizomes with naturally high curcumin content. Our long-standing presence in
                the region ensures access to the best harvests, year after year.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-8">
                {[
                  { label: "Growing region", value: "Erode, TN" },
                  { label: "Export markets", value: "20+ countries" },
                  { label: "Curcumin range", value: "2.5–4.5%" },
                  { label: "Product varieties", value: "5 grades" },
                ].map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl text-foreground">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div ref={erodeImgRef} className="order-1 lg:order-2">
              <img
                src={sourcingImg}
                alt="Turmeric farm in Erode"
                width={1280}
                height={900}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-2xl object-cover shadow-soft"
              />
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
