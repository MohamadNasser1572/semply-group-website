const services = [
  {
    title: "Branding & Graphic Design",
    text: "Visual identity systems, logo directions, billboards, packaging, and campaign assets built to stand out fast.",
  },
  {
    title: "Content Production",
    text: "A fully equipped white-wall studio for product photography, podcast recording, and videography.",
  },
  {
    title: "Social Media Management",
    text: "Content strategy, reel-first storytelling, and growth-focused publishing for modern brands.",
  },
  {
    title: "Business Development & Consulting",
    text: "Strategic support, brand guidance, and human resources solutions designed for business clarity.",
  },
];

const clients = ["Totos Joint", "Abu Sami Market", "Semply Talks", "Projects & campaigns across Lebanon" ];

const highlights = ["Branding", "Production", "Studio", "Shooting", "Projects", "The Pros", "Group", "Semply Talks"];

const proofPoints = [
  { value: "2020", label: "Founded in Beirut" },
  { value: "Lebanon + UAE", label: "Regional reach" },
  { value: "White-wall studio", label: "In-house production" },
  { value: "+961 81 777 905", label: "Direct contact" },
];

const palette = [
  { name: "Gold", className: "from-[#f0c94e] to-[#f5d98f]" },
  { name: "Teal", className: "from-[#00d0c7] to-[#84f2eb]" },
  { name: "Rose", className: "from-[#e62a3b] to-[#ff7d8a]" },
  { name: "Mono", className: "from-[#f8f8f5] to-[#8b8b8b]" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-6 lg:px-10">
          <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.22em] text-bronze uppercase">Semply Group</p>
              <p className="text-xs uppercase tracking-[0.38em] text-white/55">Creative marketing and production agency</p>
            </div>
            <a
              href="https://www.instagram.com/semplygroup/"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/85 transition hover:border-bronze/60 hover:bg-bronze/10"
            >
              Instagram
            </a>
          </header>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-bronze/25 bg-bronze/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-bronze">
                Branding #Production • Beirut, Lebanon
              </p>
              <h1 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl leading-[0.92] tracking-[-0.03em] text-sand sm:text-6xl lg:text-8xl">
                We build brands & execute, keeping it easy.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Semply Group | سمبلي غروب is a simplified, high-impact creative agency for brands that want a sharper identity,
                stronger visibility, and production that feels premium without feeling complicated.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="rounded-full bg-bronze px-5 py-3 text-sm font-medium text-ink transition hover:translate-y-[-1px] hover:bg-[#d0a76a]">
                  Explore services
                </a>
                <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-sand transition hover:border-white/30 hover:bg-white/8">
                  Contact the team
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {proofPoints.map((point) => (
                  <div key={point.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-[family-name:var(--font-cormorant)] text-2xl text-bronze">{point.value}</div>
                    <div className="mt-1 text-sm text-white/65">{point.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#00d0c7]/12 via-[#f0c94e]/10 to-[#e62a3b]/12 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#111111]/92 p-6 shadow-glow backdrop-blur">
                <div className="rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(240,201,78,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-olive/30 bg-olive/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-olive">Signature</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/45">Keep it easy</span>
                  </div>

                  <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
                    <p className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-sand">
                      “KEEP IT EASY, WE&apos;RE LEADING THE RACE.”
                    </p>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">
                      The website now leans into the same bold, high-contrast energy as the logo graphics: black base, gold type, teal accents, and red punch.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                    {highlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {palette.map((color) => (
                      <div key={color.name} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${color.className} px-2 py-4 text-center text-[10px] uppercase tracking-[0.28em] text-black`}>
                        {color.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">What they do</p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-sand sm:text-5xl">
              Built for brands that need clarity, speed, and visual impact.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              The site focuses on the agency’s real core: branding, production, social content, and consulting. Web and app development are intentionally excluded.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-bronze/30 hover:bg-white/[0.07]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-sand">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Client energy</p>
              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl text-sand sm:text-5xl">Real names, real momentum.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/65">
              Referencing the public posts and the examples you shared, the homepage gives space to actual clients and campaign momentum instead of generic placeholders.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {clients.map((client) => (
              <div key={client} className="rounded-3xl border border-white/10 bg-black/20 px-5 py-6 text-white/80">
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Featured</p>
                <p className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl text-sand">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,208,199,0.14),rgba(255,255,255,0.03),rgba(230,42,59,0.10))] p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl text-sand sm:text-5xl">Let the next campaign feel easier to launch.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Based in Furn El Chebbek, Beirut. Built for brands across Lebanon and the UAE. Use the Instagram profile or the number below to reach the team directly.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-ink/65 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Direct line</p>
            <a href="tel:+96181777905" className="mt-3 block font-[family-name:var(--font-cormorant)] text-3xl text-bronze">
              +961 81 777 905
            </a>
            <p className="mt-3 text-sm leading-6 text-white/65">Furn El Chebbek, Beirut, Lebanon</p>
            <a href="https://www.instagram.com/semplygroup/" className="mt-5 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-sand transition hover:border-bronze/40 hover:bg-bronze/10">
              Open Instagram profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
