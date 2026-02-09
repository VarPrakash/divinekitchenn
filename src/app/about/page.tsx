import Image from "next/image";

const milestones = [
  { year: "2004", title: "The Beginning", desc: "Leo Will opens the first Divine Kitchen on West 49th Street with just 30 seats and a dream." },
  { year: "2008", title: "Sushi Bar Added", desc: "A dedicated sushi counter brings fresh Japanese craft to the menu, earning a devoted following." },
  { year: "2012", title: "Live Music Launches", desc: "Friday Night Jazz begins, transforming the dining room into a destination for food and music lovers alike." },
  { year: "2016", title: "Full Renovation", desc: "A stunning redesign doubles capacity and introduces the signature open-kitchen concept." },
  { year: "2020", title: "Community First", desc: "During challenging times, Divine Kitchen feeds 5,000+ frontline workers across New York City." },
  { year: "2024", title: "20 Years Strong", desc: "Two decades of sizzling steaks, fresh sushi, and unforgettable memories — and still going." },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-charcoal-900">
        <Image
          src="/images/about-hero.webp"
          alt="Warm restaurant interior with elegant lighting"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-charcoal-900/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-24 text-center lg:px-12">
          <p className="font-accent text-xl font-bold text-saffron-400">
            Our Story
          </p>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-white lg:text-6xl">
            About Divine Kitchen
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-cream-200">
            Two decades of passion, flavor, and community in the heart of New York City.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOUNDER STORY
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/chef-leo-will.webp"
                alt="Chef Leo Will preparing a dish in the Divine Kitchen"
                width={600}
                height={700}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-900/60 to-transparent p-6">
                <p className="font-accent text-xl font-bold text-saffron-300">
                  Chef Leo Will
                </p>
                <p className="font-body text-sm text-cream-200">
                  Founder & Executive Chef
                </p>
              </div>
            </div>

            {/* Story */}
            <div>
              <p className="font-accent text-lg font-bold text-saffron-500">
                Meet the Founder
              </p>
              <h2 className="mt-1 font-heading text-3xl text-charcoal-800 lg:text-4xl">
                Leo Will
              </h2>
              <div className="mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />

              <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-charcoal-500">
                <p>
                  Born and raised in Brooklyn, Leo Will grew up watching his
                  grandmother transform simple ingredients into extraordinary
                  meals. That childhood wonder never left him — it just grew
                  into an obsession.
                </p>
                <p>
                  After training at the Culinary Institute of America and
                  apprenticing under some of New York&apos;s most celebrated chefs,
                  Leo opened Divine Kitchen in 2004 on West 49th Street with a
                  bold vision: create a place where a perfectly seared steak, a
                  delicate piece of sashimi, and a hand-crafted burger could all
                  live under the same roof — each executed with the same
                  obsessive attention to quality.
                </p>
                <p>
                  &quot;I never wanted to be boxed into one cuisine,&quot; Leo says.
                  &quot;Great food is great food, whether it&apos;s a dry-aged ribeye
                  or a Dragon Roll. The common thread is respect — for the
                  ingredients, for the craft, and for the people you&apos;re
                  feeding.&quot;
                </p>
                <p>
                  Today, Divine Kitchen serves hundreds of guests weekly, hosts
                  live music every Friday and Sunday, and remains one of
                  Midtown&apos;s most beloved dining destinations. Leo still walks
                  the floor most evenings, greeting regulars by name and
                  checking every plate that leaves the pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR VALUES
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <p className="font-accent text-lg font-bold text-saffron-500">
              What Drives Us
            </p>
            <h2 className="mt-1 font-heading text-3xl text-charcoal-800">
              Our Values
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "Quality Without Compromise",
                desc: "We source the finest prime steaks, freshest fish flown in daily, and produce from local farms. No shortcuts, ever.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Community First",
                desc: "Divine Kitchen is more than a restaurant — it's a gathering place. We feed our neighborhood, support local artists, and give back whenever we can.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                ),
                title: "Joy in Every Detail",
                desc: "From the live music on Fridays to the handwritten specials board, every detail is designed to make you smile.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-saffron-100 text-saffron-600">
                  {value.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl text-charcoal-800">
                  {value.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <p className="font-accent text-lg font-bold text-saffron-500">
              Our Journey
            </p>
            <h2 className="mt-1 font-heading text-3xl text-charcoal-800">
              20 Years of Flavor
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />
          </div>

          <div className="relative mt-14">
            {/* Center line (desktop only) */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cream-300 lg:block" />

            <div className="space-y-10 lg:space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col lg:flex-row lg:items-center ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="rounded-xl bg-white p-6 shadow-soft">
                      <span className="font-mono text-sm font-medium text-saffron-500">
                        {m.year}
                      </span>
                      <h3 className="mt-1 font-heading text-lg text-charcoal-800">
                        {m.title}
                      </h3>
                      <p className="mt-2 font-body text-sm text-charcoal-400">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot (desktop only) */}
                  <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-saffron-500 bg-white lg:block" />

                  {/* Spacer for the other half */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          RESTAURANT GALLERY
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <p className="font-accent text-lg font-bold text-saffron-500">
              Step Inside
            </p>
            <h2 className="mt-1 font-heading text-3xl text-charcoal-800">
              Our Space
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/hero-restaurant.webp", alt: "Restaurant bar with warm ambient lighting" },
              { src: "/images/gallery-dining-candlelight.webp", alt: "Elegant dining setting with candlelight" },
              { src: "/images/gallery-bar-counter.webp", alt: "Luxury bar counter with bottle display" },
              { src: "/images/gallery-plated-steak.webp", alt: "Plated gourmet steak dinner" },
              { src: "/images/tomahawk-ribeye.webp", alt: "Tomahawk steak presentation" },
              { src: "/images/chefs-omakase.webp", alt: "Artfully arranged sushi platter" },
            ].map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
