import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import fingerImg from "@/assets/product-finger.jpg";
import coconutImg from "@/assets/coconut.jpg";
import panangaliImg from "@/assets/product-panangali.jpg";

const products = [
  {
    name: "Turmeric Finger",
    img: fingerImg,
    note: "Whole dried turmeric fingers — long, slim pieces that are perfect for grinding into powder or using whole.",
    tags: ["Whole spice", "Powder milling", "Food processing", "Retail packing"],
  },
  {
    name: "Coconut",
    img: coconutImg,
    note: "Clean, sun-dried coconut from South Indian farms — consistent quality, ready for food and retail buyers.",
    tags: ["Sun-dried", "Food processing", "Retail packing", "Export ready"],
  },
  {
    name: "Panangali Turmeric",
    img: panangaliImg,
    note: "A premium South Indian turmeric with a slim shape, deep colour and high curcumin content.",
    tags: ["Premium variety", "High curcumin", "Ayurveda", "Health supplements"],
  },
];

function ProductItem({ product, index }: { product: (typeof products)[number]; index: number }) {
  const imgRef = useScrollAnimation({ variant: index % 2 === 0 ? "from-left" : "from-right" });
  const textRef = useScrollAnimation({ variant: index % 2 === 0 ? "from-right" : "from-left" });
  const tagsRef = useScrollAnimation({ stagger: true, threshold: 0.2 });

  return (
    <article className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
      <div ref={imgRef} className={index % 2 === 1 ? "lg:order-2" : ""}>
        <img
          src={product.img}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square w-full rounded-2xl object-cover shadow-soft"
        />
      </div>
      <div ref={textRef} className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="font-display text-sm text-turmeric">
          0{index + 1} / 0{products.length}
        </p>
        <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">{product.name}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.note}</p>
        <div ref={tagsRef} className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
        >
          Request specifications <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const heroRef = useScrollAnimation({ threshold: 0.05 });
  const summaryRef = useScrollAnimation({ stagger: true, threshold: 0.2 });

  return (
    <>
      <SEO
        title="Products — Star Turmerics"
        description="Turmeric Finger, Coconut and Panangali from Star Turmerics. Curcumin content 2.5% – 4.5%."
        ogTitle="Turmeric Products — Star Turmerics"
        ogDescription="Our core products for global food, spice and nutraceutical buyers."
        canonical="https://starturmeric.com/products"
      />
      <SiteLayout>
        <section className="bg-gradient-soft">
          <div ref={heroRef} className="container-prose py-20 sm:py-24">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Products
            </span>
            <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Three products, ready for export.
            </h1>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-2 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-turmeric" />
              <span className="text-sm font-medium text-foreground">
                Curcumin content: <span className="text-primary">2.5% – 4.5%</span>
              </span>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-background">
          <div ref={summaryRef} className="container-prose grid gap-5 py-10 sm:grid-cols-3">
            {[
              { label: "Products", value: "3 export-ready products" },
              { label: "Curcumin", value: "2.5% - 4.5% batch tested" },
              { label: "Use cases", value: "Food, spice and nutraceutical" },
            ].map((item) => (
              <div key={item.label} className="border-l border-border pl-4">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg text-foreground sm:text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background">
          <div className="container-prose space-y-16 py-20 sm:space-y-20 sm:py-24">
            {products.map((p, i) => (
              <ProductItem key={p.name} product={p} index={i} />
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
