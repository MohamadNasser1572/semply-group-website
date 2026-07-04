const visualSections = [
  {
    code: "FR.014A",
    title: "Product Photography",
    text: "Clean studio product setups with bold color blocking and polished lighting built to sell the look of the brand instantly.",
    image: "/pics/product-photography.jpeg",
  },
  {
    code: "FR.021C",
    title: "Podcast Recording",
    text: "Two scenes from the same recording session, shown together in one box so the story feels connected and editorial.",
    podcast: true,
  },
  {
    code: "FR.032B",
    title: "Videography",
    text: "Talking-head and client-content visuals that feel like a real production, not just a camera pointed at a subject.",
    image: "/pics/meetings.jpeg",
  },
  {
    code: "FR.007A",
    title: "Brand Identity",
    text: "Logo systems, typography, and embossed identity work that carries the brand language across print and digital touchpoints.",
    image: "/pics/brand-identity.jpeg",
  },
  {
    code: "FR.045D",
    title: "Social Campaigns",
    text: "A campaign-first section that mirrors the energy of the agency feed and the brands it posts for.",
    image: "/pics/social-campaigns.jpeg",
  },
  {
    code: "FR.058A",
    title: "Studio Projects",
    text: "A final wide panel for the most graphic, high-impact work in the set: bold layouts, dark contrast, and a full studio treatment that feels like Semply Group.",
    image: "/pics/science-approves.jpeg",
    wide: true,
  },
];

const serviceHighlights = ["Branding", "Production", "Studio", "Shooting", "Projects", "The Pros", "Group", "Semply Talks"];

const stats = [
  { value: "2020", label: "Founded in Beirut" },
  { value: "Lebanon + UAE", label: "Regional reach" },
  { value: "White-wall studio", label: "In-house production" },
  { value: "+961 81 777 905", label: "Direct contact" },
];

const clients = ["Totos Joint", "Abu Sami Market", "Semply Talks", "Projects & campaigns across Lebanon"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,208,199,0.14),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(230,42,59,0.14),transparent_20%),radial-gradient(circle_at_52%_0%,rgba(240,201,78,0.16),transparent_30%),linear-gradient(180deg,#111111_0%,#050505_42%,#0d0d10_100%)] text-sand">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-4 text-white">
            <img src="/pics/semply-logo.jpeg" alt="Semply Group logo" className="h-11 w-11 rounded-full border border-white/15 object-cover shadow-lg shadow-black/30" />
            <span className="flex flex-col font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase leading-none tracking-[0.04em]">
              SEMPLY
              <span className="font-[family-name:var(--font-inter)] text-[10px] font-normal tracking-[0.28em] text-white/55 normal-case">سمبلي غروب — Group</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.25em] text-white/70 lg:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#studio" className="transition hover:text-white">Studio</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href="https://www.instagram.com/semplygroup/" target="_blank" rel="noopener" className="rounded-full border border-bronze/30 bg-bronze/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-bronze transition hover:bg-bronze/20">
            Instagram
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-bronze/25 bg-bronze/10 px-4 py-2 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.3em] text-bronze">
              Creative marketing & production agency — Beirut · UAE — Est. 2020
            </p>
            <h1 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-sand sm:text-6xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#00d0c7] via-[#f0c94e] to-[#e62a3b] bg-clip-text text-transparent">Keep it easy,</span>
              <br />
              we&apos;re leading
              <br />
              the race.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Semply Group | سمبلي غروب builds brand identities, produces content, and shapes social presence for clients across Lebanon and the UAE — from Furn El Chebbek, Beirut.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-bronze px-5 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-[#f5d16b]">
                View our work
              </a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-sand transition hover:border-white/30 hover:bg-white/[0.08]">
                Contact the team
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
                  <div className="font-[family-name:var(--font-cormorant)] text-2xl text-bronze">{item.value}</div>
                  <div className="mt-1 text-sm text-white/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#00d0c7]/10 via-[#f0c94e]/10 to-[#e62a3b]/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#111111]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(240,201,78,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-olive/30 bg-olive/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-olive">Signature</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/45">Keep it easy</span>
                </div>
                <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
                  <p className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-sand">
                    “KEEP IT EASY, WE&apos;RE LEADING THE RACE.”
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">
                    The page uses the agency&apos;s bold, high-contrast energy with black base, gold type, teal accents, and red punch.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  {serviceHighlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 bg-[#111111] py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-6 overflow-hidden px-6 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.28em] text-white/55 lg:px-10">
          {['KEEP IT EASY, WE\'RE LEADING THE RACE', 'BRANDING #PRODUCTION', 'BRANDING & GRAPHIC DESIGN', 'CONTENT PRODUCTION', 'SOCIAL MEDIA MANAGEMENT', 'BUSINESS CONSULTING'].map((item, index) => (
            <span key={`${item}-${index}`} className="after:ml-6 after:text-bronze after:content-['—'] last:after:content-['']">{item}</span>
          ))}
        </div>
      </div>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-olive">What they do</p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-sand sm:text-5xl">
              Six visual stories. One studio.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Everything a brand needs to look sharp and move fast, handled in-house, start to finish.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {visualSections.map((section) => (
              <article key={section.code} className={`rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition hover:border-bronze/30 hover:bg-white/[0.07] ${section.wide ? "md:col-span-2" : ""}`}>
                <div className={section.wide ? "aspect-[21/9]" : section.podcast ? "aspect-[16/11]" : "aspect-[16/10]" + " overflow-hidden rounded-[1.25rem] border border-white/10 bg-black"}>
                  {section.podcast ? (
                    <div className="grid h-full grid-cols-2 gap-2 overflow-hidden rounded-[1.25rem]">
                      <img src="/pics/podcast-recording-1.jpeg" alt="Podcast recording frame 1" className="h-full w-full object-cover" />
                      <img src="/pics/podcast-recording-2.jpeg" alt="Podcast recording frame 2" className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <img src={section.image} alt={section.title} className={`h-full w-full object-cover ${section.wide ? "aspect-[21/9] rounded-[1.25rem]" : "rounded-[1.25rem]"}`} />
                  )}
                </div>
                <div className="mt-5 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.35em] text-bronze">
                  {section.code}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl text-sand">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Client energy</p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl text-sand sm:text-5xl">Real names, real momentum.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">
              Referencing the public posts and the examples you shared, the homepage gives space to actual clients and campaign momentum instead of generic placeholders.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((client) => (
              <div key={client} className="rounded-3xl border border-white/10 bg-black/20 px-5 py-6 text-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Featured</p>
                <p className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl text-sand">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,208,199,0.14),rgba(255,255,255,0.03),rgba(230,42,59,0.10))] p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl text-sand sm:text-5xl">Let the next campaign feel easier to launch.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Based in Furn El Chebbek, Beirut. Built for brands across Lebanon and the UAE. Use the Instagram profile or the number below to reach the team directly.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <img src="/pics/google-maps.jpeg" alt="Semply Group map snapshot" className="h-[320px] w-full rounded-[1rem] object-cover" />
              <div className="mt-4 flex flex-wrap justify-between gap-3 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.05em] text-white/55">
                <span>Furn El Chebbak, Beirut</span>
                <span>Map snapshot</span>
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-ink/65 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Direct line</p>
            <a href="tel:+96181777905" className="mt-3 block font-[family-name:var(--font-cormorant)] text-3xl text-bronze">
              +961 81 777 905
            </a>
            <p className="mt-3 text-sm leading-6 text-white/65">Furn El Chebbek, Beirut, Lebanon</p>
            <a href="https://www.instagram.com/semplygroup/" className="mt-5 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-sand transition hover:border-bronze/40 hover:bg-bronze/10">
              Open Instagram profile
            </a>
            <div className="mt-6 overflow-hidden rounded-[1rem] border border-white/10 bg-black/20">
              <img src="/pics/semply-group-name.jpeg" alt="Semply Group logo banner" className="h-[220px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
