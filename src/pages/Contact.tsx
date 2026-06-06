import { useState, type FormEvent } from "react";
import { SEO } from "@/components/SEO";
import { LoaderCircle, Mail, MapPin, Phone, Send, Warehouse } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactEmail = "starturmericserode@gmail.com";
const contactPhone = "+91 75981 81199";
const officeAddress = [
  "Star Turmerics",
  "6, Muthusamy St, Fort",
  "Sathy Road",
  "Erode – 638001",
];
const warehouseAddress = [
  "Star Turmerics, Turmeric Complex",
  "Site No: 36, Manjal Valaham",
  "Nasiyanur Road",
  "Erode – 638108",
];

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
        {required && <span className="ml-0.5 text-turmeric">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useScrollAnimation({ threshold: 0.05 });
  const contactRef = useScrollAnimation({ stagger: true, threshold: 0.2 });
  const formRef = useScrollAnimation<HTMLFormElement>({ variant: "from-right", threshold: 0.15 });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSent(false);
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 600));

    const body = [
      `Full name: ${formData.get("name") || ""}`,
      `Company: ${formData.get("company") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Country: ${formData.get("country") || ""}`,
      `Place of business: ${formData.get("place") || ""}`,
      `Product of interest: ${formData.get("product") || ""}`,
      `Estimated volume: ${formData.get("volume") || ""}`,
      "",
      "Message:",
      `${formData.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Turmeric export enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact — Star Turmerics"
        description="Get in touch with Star Turmerics for turmeric samples, specifications and quotes. Based in Erode, Tamil Nadu — exporting worldwide."
        ogTitle="Contact Star Turmerics"
        ogDescription="Reach our export team for samples, pricing and shipment enquiries."
        canonical="https://starturmeric.com/contact"
      />
      <SiteLayout>
        <section className="bg-gradient-hero text-primary-foreground">
          <div ref={heroRef} className="container-prose py-20 sm:py-24">
            <span className="text-xs font-medium uppercase tracking-wider text-turmeric">
              Contact
            </span>
            <h1 className="mt-3 max-w-3xl font-display text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
              Talk to our export team.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/70 sm:text-lg">
              Share your requirement — variety, grade, volume and destination — and we&apos;ll come
              back with samples and pricing.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="container-prose grid gap-10 py-20 sm:gap-12 sm:py-24 lg:grid-cols-12">
            <div ref={contactRef} className="space-y-8 lg:col-span-4">
              {[
                { icon: MapPin, title: "Office", lines: officeAddress },
                { icon: Warehouse, title: "Warehouse", lines: warehouseAddress },
                { icon: Mail, title: "Email", lines: [contactEmail] },
                { icon: Phone, title: "Phone", lines: [contactPhone] },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{c.title}</h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-muted-foreground">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-secondary/40 p-5">
                <h3 className="font-display text-base text-foreground">Business hours</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monday – Saturday: 9 AM – 6 PM IST
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We typically reply within 1 business day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10"
              >
                <h2 className="font-display text-2xl text-foreground">Send an enquiry</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill in your details and we&apos;ll prepare a tailored response.
                </p>
                <fieldset disabled={isSubmitting} className="mt-6 disabled:opacity-70">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Country" name="country" />
                  </div>
                  <div className="mt-5">
                    <Field
                      label="Place of business"
                      name="place"
                      placeholder="City / region where you operate"
                    />
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Product of interest"
                      name="product"
                      placeholder="e.g. Double-polished"
                    />
                    <Field
                      label="Estimated volume"
                      name="volume"
                      placeholder="e.g. 1 x 20ft container"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="text-sm font-medium text-foreground" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your requirement..."
                    />
                  </div>
                </fieldset>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    We typically reply within 1 business day.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-w-36 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {isSubmitting ? (
                      <>
                        Sending <LoaderCircle className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send enquiry <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {sent && (
                  <p
                    className="mt-6 rounded-md border border-primary/20 bg-secondary px-4 py-3 text-sm text-primary"
                    role="status"
                  >
                    Your enquiry is ready in your email app. Send it to reach Star Turmerics directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
