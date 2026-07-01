import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  TN_VIEWBOX,
  TN_DISTRICTS,
  TN_ERODE,
  TN_SALEM,
  TN_CITIES,
} from "@/data/tamilNaduMap";

const HIGHLIGHT = new Set(["Erode", "Salem"]);
const MAP_W = Number(TN_VIEWBOX.split(" ")[2]);

function Pin({
  point,
  label,
  anchor,
  delay = 0,
}: {
  point: readonly [number, number];
  label: string;
  anchor: "start" | "end";
  delay?: number;
}) {
  const [x, y] = point;
  const lx = anchor === "end" ? x - 22 : x + 22;
  return (
    <g className="text-turmeric">
      {/* pulsing halo */}
      <circle
        cx={x}
        cy={y}
        r={9}
        fill="currentColor"
        className="map-ping"
        style={{ animationDelay: `${delay}s` }}
      />
      {/* solid marker */}
      <circle cx={x} cy={y} r={9} fill="currentColor" />
      <circle cx={x} cy={y} r={3.5} fill="#fff" />
      <text
        x={lx}
        y={y + 10}
        textAnchor={anchor}
        fill="currentColor"
        fontSize={33}
        fontWeight={700}
        className="font-display"
      >
        {label}
      </text>
    </g>
  );
}

export function SourcingMap() {
  const textRef = useScrollAnimation({ variant: "from-left" });
  const mapRef = useScrollAnimation({ variant: "from-right" });

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="container-prose grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        {/* Copy */}
        <div ref={textRef} className="lg:col-span-5">
          <span className="text-xs font-medium uppercase tracking-wider text-turmeric">
            Where we source
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Rooted in Erode &amp; Salem, Tamil Nadu.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Our turmeric comes straight from the farms of Erode and Salem — India&apos;s turmeric
            belt, known for rich soil and naturally high curcumin.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-turmeric"
                style={{ boxShadow: "0 0 12px var(--color-turmeric)" }}
              />
              <div>
                <p className="font-display text-lg text-primary-foreground">Erode</p>
                <p className="text-sm text-primary-foreground/60">
                  The &quot;Turmeric City&quot; — high-curcumin fingers and bulbs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-turmeric"
                style={{ boxShadow: "0 0 12px var(--color-turmeric)" }}
              />
              <div>
                <p className="font-display text-lg text-primary-foreground">Salem</p>
                <p className="text-sm text-primary-foreground/60">
                  Deep-coloured rhizomes from fertile Cauvery-belt soil.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div ref={mapRef} className="lg:col-span-7">
          <div className="relative mx-auto max-w-sm sm:max-w-md">
            <svg
              viewBox={TN_VIEWBOX}
              className="h-auto w-full"
              role="img"
              aria-label="Map of Tamil Nadu highlighting the Erode and Salem turmeric-growing districts"
            >
              <defs>
                <radialGradient id="tn-glow">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Districts */}
              <g>
                {TN_DISTRICTS.map((d) => {
                  const hi = HIGHLIGHT.has(d.name);
                  return (
                    <path
                      key={d.name}
                      d={d.path}
                      className={hi ? "text-turmeric" : undefined}
                      fill={hi ? "currentColor" : "#ffffff"}
                      fillOpacity={hi ? 0.24 : 0.05}
                      stroke={hi ? "currentColor" : "#ffffff"}
                      strokeOpacity={hi ? 0.9 : 0.14}
                      strokeWidth={hi ? 2.5 : 1.1}
                      strokeLinejoin="round"
                    />
                  );
                })}
              </g>

              {/* Glow over the highlighted districts */}
              <g className="text-turmeric">
                <circle cx={TN_ERODE[0]} cy={TN_ERODE[1]} r={150} fill="url(#tn-glow)" opacity={0.7} />
                <circle cx={TN_SALEM[0]} cy={TN_SALEM[1]} r={140} fill="url(#tn-glow)" opacity={0.7} />
              </g>

              {/* Context cities */}
              <g className="font-sans">
                {Object.entries(TN_CITIES).map(([name, [x, y]]) => {
                  const end = x > MAP_W * 0.6;
                  return (
                    <g key={name}>
                      <circle cx={x} cy={y} r={5} fill="#ffffff" fillOpacity={0.45} />
                      <text
                        x={end ? x - 12 : x + 12}
                        y={y + 7}
                        textAnchor={end ? "end" : "start"}
                        fill="#ffffff"
                        fillOpacity={0.5}
                        fontSize={22}
                      >
                        {name}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Highlighted pins */}
              <Pin point={TN_ERODE} label="Erode" anchor="end" />
              <Pin point={TN_SALEM} label="Salem" anchor="start" delay={1.3} />

              {/* Watermark */}
              <text
                x={MAP_W / 2}
                y={975}
                textAnchor="middle"
                fill="#ffffff"
                fillOpacity={0.22}
                fontSize={26}
                letterSpacing={8}
                className="font-sans"
              >
                TAMIL NADU
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
