import Image from "next/image";
import MobileMenu from "./mobile-menu";

const heroImage =
  "/media/hero-consult.jpg";

const organicBandImage =
  "/media/organic-band.jpg";

const logoMark = "/media/logomark.svg";

const blurPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3Crect width='16' height='10' fill='%23d7d0c8'/%3E%3C/svg%3E";

const imageLoadingProps = {
  placeholder: "blur",
  blurDataURL: blurPlaceholder,
  decoding: "async",
} as const;

const featuredTreatments = [
  {
    title: "Control complet și plan clar în 45 de minute",
    text: "Radiografie, consult și recomandări explicate pe înțelesul tău. Pleci cu următorul pas, nu cu îndoieli.",
    image: "/media/control-complet.jpg",
  },
  {
    title: "Profilaxie blândă pentru gingii sensibile",
    text: "Igienizare, airflow și instrucțiuni simple pentru rutina de acasă. Fără grabă, fără ruşine.",
    image: "/media/profilaxie-blanda.jpg",
  },
  {
    title: "Ortodonție pentru adulți și adolescenți",
    text: "Aparate fixe sau alignere, cu monitorizare atentă și fotografii de progres la fiecare etapă.",
    image: "/media/ortodontie-adulti.jpg",
  },
  {
    title: "Implantologie cu evaluare atentă a cazului",
    text: "Evaluăm osul, riscurile și calendarul tratamentului înainte de a programa intervenția.",
    image: "/media/implantologie.jpg",
  },
  {
    title: "Stomatologie pentru copii și părinți liniștiți",
    text: "Prima vizită este despre încredere, joc și explicații scurte. Copilul rămâne în control.",
    image: "/media/stomatologie-copii.jpg",
  },
  {
    title: "Albire și estetică fără promisiuni artificiale",
    text: "Lucrăm cu nuanța dinților tăi, nu cu filtre. Rezultatul trebuie să arate firesc.",
    image: "/media/albire-naturala.jpg",
  },
];

const visionNotes = [
  {
    title: "Viziunea noastră",
    text: "Dentaire Verde s-a născut dintr-o idee simplă: oamenii revin la dentist când înțeleg ce li se întâmplă. De aceea începem cu ascultare, fotografii, explicații și un plan scris.",
  },
  {
    title: "Misiunea noastră",
    text: "Ne-am propus să facem stomatologia mai previzibilă. Fiecare pacient primește opțiuni, costuri și timp de gândire. Tratamentul bun nu se grăbește.",
  },
  {
    title: "Procesul nostru",
    text: "Consultăm, documentăm, prioritizăm. Durerea și infecțiile vin primele. Estetica vine după sănătate. Fiecare etapă este notată clar, ca să poți decide în liniște.",
  },
];

const services = [
  {
    title: "Servicii pentru adulți",
    text: "Tratamente restaurative, endodonție, coroane, implanturi și planuri etapizate pentru pacienții care vor să își pună sănătatea orală în ordine.",
    cta: "Explorează serviciile pentru adulți",
    image: "/media/services-adulti.jpg",
  },
  {
    title: "Servicii pentru adolescenți",
    text: "Ortodonție, profilaxie, protecții sportive și consultații în care adolescentul este tratat ca participant real la decizie.",
    cta: "Explorează serviciile pentru adolescenți",
    image: "/media/services-adolescenti.jpg",
  },
  {
    title: "Servicii pentru copii",
    text: "Vizite de acomodare, sigilări, tratamente pentru dinții temporari și sprijin pentru părinți când periajul devine negociere zilnică.",
    cta: "Explorează serviciile pentru copii",
    image: "/media/services-copii.jpg",
  },
  {
    title: "Estetică dentară",
    text: "Albire, fațete, reconturare și restaurări care păstrează expresia naturală a feței. Aspectul natural este standardul nostru.",
    cta: "Vezi tratamentele estetice",
    image: "/media/services-estetica.jpg",
  },
];

const priceGroups = [
  {
    kicker: "I — Consult și diagnostic",
    title: "Înainte de orice tratament",
    items: [
      {
        name: "Consult complet cu plan scris",
        note: "45 de minute, radiografie, fotografii intraorale, recomandări etapizate.",
        price: "250 lei",
      },
      {
        name: "Consult ortodontic",
        note: "Evaluare amănunțită pentru aparat fix sau alignere, cu fotografii de start.",
        price: "300 lei",
      },
      {
        name: "Radiografie panoramică",
        note: "OPG digital, eliberare în aceeași zi.",
        price: "150 lei",
      },
      {
        name: "CBCT, tomografie 3D",
        note: "Volum parțial sau total, esențial pentru implant și chirurgie.",
        price: "350 lei",
      },
    ],
  },
  {
    kicker: "II — Profilaxie",
    title: "Igienizare blândă, rutină onestă",
    items: [
      {
        name: "Igienizare completă cu Airflow",
        note: "Detartraj ultrasonic, Airflow cu pulbere fină, periaj profesional.",
        price: "450 lei",
      },
      {
        name: "Detartraj ultrasonic și periaj",
        note: "Ședință scurtă pentru pacienții cu rutină constantă.",
        price: "350 lei",
      },
      {
        name: "Sigilare dinte, copil sau adult",
        note: "Per dinte, indicat pentru molari cu șanțuri adânci.",
        price: "200 lei",
      },
      {
        name: "Gutieră nocturnă pentru bruxism",
        note: "Amprentă digitală, gutieră transparentă termoformată.",
        price: "950 lei",
      },
    ],
  },
  {
    kicker: "III — Restaurări și endodonție",
    title: "Când un dinte cere atenție acum",
    items: [
      {
        name: "Obturație compozit, carie mică sau medie",
        note: "Material fotopolimerizabil, izolare cu digă.",
        price: "500 lei",
      },
      {
        name: "Obturație compozit pe molar",
        note: "Pentru carii întinse sau reconstrucții ocluzale.",
        price: "700 lei",
      },
      {
        name: "Tratament endodontic monoradicular",
        note: "Microscop, instrumentar rotativ, obturație de canal.",
        price: "750 lei",
      },
      {
        name: "Tratament endodontic pluriradicular",
        note: "Trei sau patru canale, ședințe programate cu calendar clar.",
        price: "1.100 lei",
      },
      {
        name: "Reconstrucție dinte cu pivot",
        note: "Pivot din fibră de sticlă și bont în compozit.",
        price: "1.100 lei",
      },
    ],
  },
  {
    kicker: "IV — Protetică și implantologie",
    title: "Soluții pe termen lung, evaluate cu răbdare",
    items: [
      {
        name: "Coroană ceramică integrală E-max",
        note: "Indicată pentru zona frontală, estetică firească.",
        price: "2.400 lei",
      },
      {
        name: "Coroană zirconiu",
        note: "Pentru zona laterală sau pacienții cu bruxism.",
        price: "2.800 lei",
      },
      {
        name: "Implant dentar premium Straumann",
        note: "Sistem elvețian, garanție pe viață a corpului implantului.",
        price: "5.500 lei",
      },
      {
        name: "Coroană pe implant, zirconiu",
        note: "Bont personalizat și fixare cu înșurubare.",
        price: "3.200 lei",
      },
      {
        name: "Sinus lift extern, per sinus",
        note: "Când înălțimea osului nu permite implant direct.",
        price: "4.500 lei",
      },
    ],
  },
  {
    kicker: "V — Ortodonție",
    title: "Alegeri clare pentru adolescenți și adulți",
    items: [
      {
        name: "Aparat fix metalic, ambele arcade",
        note: "Tratament complet, ședințe lunare de control incluse.",
        price: "7.500 lei",
      },
      {
        name: "Aparat fix ceramic sau safir",
        note: "Bracketuri translucizi, mai discreți vizual.",
        price: "11.500 lei",
      },
      {
        name: "Aligneri Invisalign Lite",
        note: "Pentru corecții limitate, până la 14 etape.",
        price: "17.500 lei",
      },
      {
        name: "Aligneri Invisalign Full",
        note: "Tratament complex, monitorizare cu scanare 3D.",
        price: "24.500 lei",
      },
    ],
  },
  {
    kicker: "VI — Estetică naturală",
    title: "Rezultate care rămân în nuanța ta",
    items: [
      {
        name: "Albire profesională Philips Zoom",
        note: "O ședință în cabinet, cu pregătire și fluorizare.",
        price: "2.200 lei",
      },
      {
        name: "Albire la domiciliu, gutiere personalizate",
        note: "Set complet de gel și protocol scris.",
        price: "1.500 lei",
      },
      {
        name: "Fațetă ceramică E-max, per dinte",
        note: "Preparație minim invazivă, amprentă digitală.",
        price: "3.200 lei",
      },
      {
        name: "Fațetă compozită directă, per dinte",
        note: "Aplicată într-o ședință, alternativă accesibilă.",
        price: "1.400 lei",
      },
      {
        name: "Reconturare estetică dinte",
        note: "Mici ajustări de formă fără anestezie.",
        price: "600 lei",
      },
    ],
  },
];

const teamMembers = [
  {
    src: "/media/team-doctor-female-40s.jpg",
    alt: "Medic stomatolog din echipa Dentaire Verde în tunică sage",
  },
  {
    src: "/media/team-doctor-male-30s.jpg",
    alt: "Medic stomatolog din echipa Dentaire Verde în tunică oat",
  },
  {
    src: "/media/team-assistant-female-20s.jpg",
    alt: "Asistentă dentară din echipa Dentaire Verde cu un carnet în mână",
  },
  {
    src: "/media/team-technician-male-50s.jpg",
    alt: "Tehnician dentar din echipa Dentaire Verde lângă peretele cabinetului",
  },
];

const articles = [
  {
    title: "De ce sângerarea gingivală nu trebuie amânată",
    date: "12 aprilie 2026",
    image: "/media/article-sangerare.jpg",
  },
  {
    title: "Prima vizită la dentist a copilului: cum o pregătim fără frică",
    date: "18 martie 2026",
    image: "/media/article-prima-vizita.jpg",
  },
  {
    title: "Implant sau punte dentară: ce întrebări merită puse la consult",
    date: "22 februarie 2026",
    image: "/media/article-implant.jpg",
  },
  {
    title: "Albirea dentară corectă și limitele unui zâmbet natural",
    date: "9 ianuarie 2026",
    image: "/media/article-albire.jpg",
  },
];

const processTextures = [
  {
    title: "Plan scris",
    image: "/media/process-plan.jpg",
    alt: "Plan de tratament pe birou, cu stilou și lumină naturală",
  },
  {
    title: "Dosare la vedere",
    image: "/media/process-envelopes.jpg",
    alt: "Plicuri numerotate pe raftul clinicii",
  },
  {
    title: "Protocoale de sterilizare",
    image: "/media/process-hands.jpg",
    alt: "Mâini spălate la chiuveta clinicii, lângă faianța sage",
  },
];

const locationImages = [
  {
    image: "/media/clinic-exterior.jpg",
    alt: "Exteriorul unei case vechi din București adaptată ca sediu al clinicii Dentaire Verde",
  },
  {
    image: "/media/clinic-sign.jpg",
    alt: "Plăcuță discretă de alamă Dentaire Verde lângă ușa de intrare",
  },
];

const testimonials = [
  {
    quote:
      "Am ajuns cu multă teamă după ani de amânări. Mi-au explicat fiecare pas, au oprit când am avut nevoie și pentru prima dată nu m-am simțit judecată pentru ce nu am făcut la timp.",
    name: "Ioana M.",
  },
  {
    quote:
      "Planul de tratament a fost clar, cu prețuri și priorități. Am știut ce este urgent, ce poate aștepta și de ce. Pentru mine asta a contat enorm.",
    name: "Andrei Popescu",
  },
  {
    quote:
      "Copilul meu a intrat convins că nu deschide gura. A ieșit întrebând când revenim. Nu a fost magie, a fost răbdare reală.",
    name: "Mara D.",
  },
];

const footerLinks = [
  "Prevenție dentară",
  "Profilaxie",
  "Endodonție",
  "Implant dentar",
  "Ortodonție",
  "Stomatologie copii",
  "Albire dentară",
  "Fațete",
  "Urgențe dentare",
  "Radiologie",
  "Planuri de tratament",
];

const railTreatments = [...featuredTreatments, ...featuredTreatments];

export default function Home() {
  return (
    <main className="bg-[var(--paper)] text-[var(--foreground)]">
      <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-[var(--white-soft)] px-4 text-[var(--ink)] sm:px-7 md:px-12">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label="Dentaire Verde acasă">
          <span className="flex h-9 w-9 items-center justify-center bg-[var(--paper)]">
            <Image
              src={logoMark}
              alt=""
              width={36}
              height={36}
              unoptimized
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.18em] sm:inline">
            Dentaire Verde
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-display text-[13px] uppercase tracking-[0.16em] text-[var(--ink)] lg:flex" aria-label="Navigație principală">
          <a href="#servicii" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Servicii</a>
          <a href="#preturi" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Prețuri</a>
          <a href="#echipa" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Echipa</a>
          <a href="#articole" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Articole</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Contact</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <MobileMenu />
          <a className="cta-button font-button bg-[var(--ink)] px-4 py-3.5 text-[12px] font-light uppercase tracking-[0.14em] text-[var(--white-soft)] sm:px-5 sm:py-4 sm:text-[13px] md:px-7" href="#contact">
            Programează-te
          </a>
        </div>
      </header>

      <section
        id="top"
        className="hero-stage relative isolate flex min-h-svh flex-col items-center justify-start overflow-hidden px-5 pb-10 pt-20 text-center text-[var(--white-soft)] sm:px-7 md:px-12"
      >
        <Image
          src={heroImage}
          alt="Consult stomatologic atent într-un cabinet luminos"
          fill
          preload
          sizes="100vw"
          quality={95}
          {...imageLoadingProps}
          className="absolute inset-0 -z-20 object-cover object-[52%_50%]"
        />
        <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
        <div className="relative z-10 flex min-h-[calc(100svh-176px)] w-full max-w-6xl flex-col items-center justify-center pt-8 sm:min-h-[calc(100svh-164px)]">
          <h1 className="fade-up font-display text-balance text-[3rem] font-medium leading-[0.97] tracking-normal sm:text-[4.7rem] lg:text-[7rem]">
            Ai grijă de zâmbet,
            <span className="block">ai grijă de tine.</span>
          </h1>
          <p className="fade-up-delay mx-auto mt-24 max-w-5xl font-display text-[1.18rem] font-medium leading-[1.18] tracking-normal sm:mt-28 sm:text-[1.85rem] lg:mt-36 lg:text-[2.85rem]">
            E momentul pentru o
            <span className="block">vizită fără grabă.</span>
          </p>
        </div>
        <a
          href="#tratamente"
          aria-label="Mergi la tratamente"
          className="fade-up-late absolute bottom-24 left-1/2 z-10 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center border border-[var(--line-on-ink)] text-2xl leading-none transition-colors duration-200 hover:border-[var(--white-soft)] hover:bg-[var(--white-soft)] hover:text-[var(--ink)] sm:bottom-28"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <section id="organic-band" aria-label="Detaliu organic Dentaire Verde" className="relative h-[132px] overflow-hidden bg-[var(--paper-stone)] sm:h-[180px] md:h-[260px] lg:h-[320px]">
        <Image
          src={organicBandImage}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={72}
          {...imageLoadingProps}
          className="object-cover object-[50%_52%] opacity-95"
        />
      </section>

      <section id="tratamente" className="overflow-hidden bg-[var(--ink)] py-20 text-[var(--white-soft)] md:py-24">
        <input
          id="pause-treatment-rail"
          type="checkbox"
          className="treatment-rail-toggle sr-only"
          aria-label="Oprește mișcarea caruselului de tratamente"
        />
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 px-7 md:px-12">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--text-on-ink-mute)]">E momentul pentru o schimbare</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
              Tratamente cu pașii la vedere
            </h2>
          </div>
          <label
            htmlFor="pause-treatment-rail"
            className="treatment-rail-toggle-label inline-flex h-11 w-11 shrink-0 items-center justify-center"
          >
            <span className="sr-only">Oprește mișcarea caruselului de tratamente</span>
          </label>
        </div>
        <div
          className="treatment-rail flex w-max gap-8 px-7 md:px-12"
          role="region"
          aria-roledescription="carusel"
          aria-label="Tratamente reprezentative"
        >
          {railTreatments.map((treatment, index) => {
            const isDuplicate = index >= featuredTreatments.length;
            return (
              <article
                key={`${treatment.title}-${index}`}
                className="w-[299px] shrink-0 text-white md:w-[360px]"
                aria-hidden={isDuplicate || undefined}
              >
                <div className="image-zoom relative h-[448px] overflow-hidden bg-[var(--ink-soft)] md:h-[540px]">
                  <Image
                    src={treatment.image}
                    alt={isDuplicate ? "" : treatment.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 299px, 360px"
                    quality={72}
                    {...imageLoadingProps}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.02em]">
                  {treatment.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.55] text-[var(--text-on-ink-soft)]">{treatment.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="gradient-clinic px-7 py-24 text-[var(--white-soft)] md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-14 inline-flex border border-[var(--line-on-ink)] px-5 py-2 font-display text-xs font-semibold uppercase tracking-[0.28em]">
            Dentaire Verde
          </div>
          <h2 className="font-display text-balance text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
            Sănătatea orală începe cu înțelegerea pașilor.
          </h2>
          <p className="mx-auto mt-12 max-w-4xl text-[18px] leading-[1.75] text-[var(--text-on-ink)] md:text-[21px]">
            Suntem pasionați de stomatologie făcută cu răbdare: prevenție, tratamente restaurative, ortodonție, implantologie și estetică naturală. Credem că un cabinet bun nu te împinge spre decizii rapide. Îți oferă informații, timp și siguranță.
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-16">
          {visionNotes.map((note) => (
            <article key={note.title}>
              <h3 className="font-display text-[22px] font-semibold leading-tight">{note.title}</h3>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-on-ink-soft)]">{note.text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-5 sm:grid-cols-3">
          {processTextures.map((texture) => (
            <figure key={texture.title}>
              <div className="image-zoom relative aspect-square overflow-hidden bg-[var(--ink-soft)]">
                <Image
                  src={texture.image}
                  alt={texture.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={72}
                  {...imageLoadingProps}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 font-button text-[11px] uppercase tracking-[0.2em] text-[var(--text-on-ink-mute)]">
                {texture.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="servicii" className="bg-[var(--paper)] px-7 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Serviciile clinicii Dentaire Verde</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[1.0] tracking-[-0.06em] text-[var(--ink)]">
                Prevenție. Tratament. Zâmbet firesc.
              </h2>
            </div>
            <p className="max-w-2xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Oferim servicii pentru toate vârstele, de la copii și adolescenți până la adulți care au amânat prea mult. Lucrăm cu planuri etapizate, fotografii intraorale și explicații clare înainte de fiecare decizie.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="group">
                <div className="image-zoom relative h-[430px] overflow-hidden bg-[var(--paper-shade)] md:h-[520px]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (min-width: 1024px) 50vw, 100vw"
                    quality={74}
                    {...imageLoadingProps}
                    className="object-cover"
                  />
                  <div className="tile-overlay absolute inset-0" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 max-w-xl p-8 text-[var(--white-soft)] md:p-10">
                    <h3 className="font-display text-[32px] font-semibold leading-none tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-5 text-[16px] leading-[1.6] text-[var(--text-on-ink)]">{service.text}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  aria-label={`Programare pentru consult: ${service.title}`}
                  className="mt-5 inline-flex min-h-11 items-center font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--ink)] transition-colors group-hover:text-[var(--coral-accessible)]"
                >
                  Programare pentru consult
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preturi" className="bg-[var(--paper-shade)] px-7 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Onorarii orientative pentru anul 2026</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[1.0] tracking-[-0.06em] text-[var(--ink)]">
                Prețuri la vedere, fără surprize.
              </h2>
            </div>
            <p className="max-w-2xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Îți scriem totul înainte: ce este urgent, ce poate aștepta, cât costă fiecare etapă. Sumele de mai jos sunt repere orientative, în lei, pentru pacienții Dentaire Verde din București.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-button text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">Plan scris, costuri scrise</p>
              <p className="mt-5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
                Fiecare pacient pleacă de la primul consult cu un calendar și un total clar.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
                Onorariile variază în funcție de complexitatea cazului, materialele alese și numărul de etape. Nu începem niciun tratament înainte să fii de acord cu costul scris.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
                Pentru cazurile etapizate propunem un calendar pe trei sau șase luni, cu prioritățile medicale puse înaintea celor estetice.
              </p>
              <a
                href="#contact"
                className="cta-button mt-10 inline-flex bg-[var(--ink)] px-7 py-4 font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--white-soft)]"
              >
                Cere un plan personalizat
              </a>
            </aside>

            <div className="space-y-16 md:space-y-20">
              {priceGroups.map((group) => (
                <article key={group.kicker} aria-labelledby={`price-${group.kicker.split(" ")[0]}`}>
                  <p className="font-button text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">{group.kicker}</p>
                  <h3
                    id={`price-${group.kicker.split(" ")[0]}`}
                    className="mt-4 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--ink)]"
                  >
                    {group.title}
                  </h3>
                  <dl className="mt-8 divide-y divide-[var(--line-on-paper)] border-t border-[var(--ink)]">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-3 py-6 md:gap-x-12"
                      >
                        <dt>
                          <span className="block font-display text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--ink)] md:text-[19px]">
                            {item.name}
                          </span>
                          <span className="mt-2 block max-w-prose text-[14.5px] leading-[1.6] text-[var(--ink-muted)]">
                            {item.note}
                          </span>
                        </dt>
                        <dd className="text-right">
                          <span className="block font-button text-[10.5px] uppercase tracking-[0.24em] text-[var(--muted)]">
                            de la
                          </span>
                          <span className="mt-1.5 block font-display text-[22px] font-semibold leading-none tracking-[-0.015em] text-[var(--ink)] md:text-[24px]">
                            {item.price}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}

              <p className="border-t border-[var(--line-on-paper)] pt-8 text-[14.5px] leading-[1.7] text-[var(--ink-muted)]">
                Sumele sunt actualizate în primăvara 2026 și pot varia în funcție de complexitate, materiale și numărul de ședințe. Anestezia, izolarea cu digă și protocoalele de sterilizare sunt incluse în fiecare tratament.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clinica" className="bg-[var(--white-soft)] px-7 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Un loc, nu doar un cabinet</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--ink)]">
              Dentaire Verde, în ritmul Bucureștiului.
            </h2>
            <p className="mt-8 max-w-xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Am păstrat ideea de casă veche, lumină naturală și semn discret. Vrem ca prima dovadă de grijă să apară înainte să intri pe ușă.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.18fr_0.82fr] md:items-end">
            {locationImages.map((item, index) => (
              <div
                key={item.image}
                className={`image-zoom relative overflow-hidden bg-[var(--paper-stone)] ${index === 0 ? "aspect-[3/2]" : "aspect-[3/2] md:mb-10"}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={74}
                  {...imageLoadingProps}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="echipa" className="bg-[var(--paper-shade)] px-7 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--ink)]">
              Cine suntem
            </h2>
            <p className="mt-8 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--ink)]">
              Împreună pentru dinți sănătoși, nu pentru perfecțiunea de reclamă.
            </p>
            <p className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-[var(--ink-soft)]">
              Suntem medici stomatologi, asistenți, tehnicieni și oameni care știu cât de greu poate fi să revii după o experiență neplăcută. Credem în tratamente explicate, în pauze atunci când ai nevoie și în întrebări puse fără jenă. Lucrăm împreună pentru ca fiecare pacient să simtă că nu intră singur în cabinet.
            </p>
            <a href="#contact" className="cta-button mt-10 inline-flex bg-[var(--ink)] px-7 py-4 font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--white-soft)]">
              Programare la clinică
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-7">
            {teamMembers.map((member, index) => (
              <div key={member.src} className={`image-zoom relative overflow-hidden bg-[var(--paper-stone)] ${index % 2 === 0 ? "h-[310px]" : "mt-12 h-[310px]"} md:h-[390px]`}>
                <Image src={member.src} alt={member.alt} fill loading="lazy" sizes="(max-width: 768px) 50vw, (min-width: 1024px) 25vw, 50vw" quality={70} {...imageLoadingProps} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="articole" className="bg-[var(--white-soft)] px-7 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--ink)]">
              Articole esențiale
            </h2>
            <h3 className="mt-8 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[var(--ink)]">
              Stomatologie scrisă pe înțelesul tău.
            </h3>
            <p className="mt-6 text-[17px] leading-[1.75] text-[var(--ink-muted)]">
              Scriem despre ce contează cu adevărat: durere, prevenție, copii, implanturi, estetică și frica de dentist. Fără jargon și fără idealizări, doar informații utile, spuse omenește.
            </p>
            <a href="#contact" className="mt-8 inline-flex min-h-11 items-center font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:text-[var(--coral-accessible)]">
              Explorează jurnalul clinicii
            </a>
          </div>
          <div className="space-y-9">
            {articles.map((article) => (
              <article key={article.title} className="grid gap-6 border-b border-[var(--line-on-paper)] pb-9 md:grid-cols-[230px_1fr] md:items-center">
                <div className="image-zoom relative h-[180px] overflow-hidden bg-[var(--paper-shade)]">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 230px"
                    quality={70}
                    {...imageLoadingProps}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-[25px] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--ink)]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">{article.date}</p>
                  <a
                    href="#contact"
                    aria-label={`Programare pentru consult: ${article.title}`}
                    className="mt-4 inline-flex min-h-11 items-center text-[15px] text-[var(--ink)] transition-colors hover:text-[var(--coral-accessible)]"
                  >
                    Programare pentru consult »
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] px-7 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Ce spun pacienții noștri</p>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--ink)]">
            Încredere, claritate, tratament fără presiune.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="border-t border-[var(--ink)] pt-8">
                <blockquote className="text-[19px] leading-[1.65] text-[var(--ink-soft)]">„{testimonial.quote}”</blockquote>
                <figcaption className="mt-8">
                  <span className="block font-display text-lg font-semibold text-[var(--ink)]">{testimonial.name}</span>
                  <span className="mt-1 block text-sm text-[var(--muted)]">Recenzie publică pe Google</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[var(--ink)] px-7 py-16 text-[var(--white-soft)] md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <div className="font-display text-3xl font-semibold tracking-[-0.04em]">Dentaire Verde</div>
              <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-[var(--text-on-ink-mute)]">
                Clinică stomatologică în București. Program luni-vineri 09:00-20:00.
              </p>
            </div>
            <address className="font-button text-[13px] not-italic uppercase tracking-[0.16em]">
              <a className="cta-button inline-flex min-h-11 items-center bg-[var(--white-soft)] px-7 py-4 text-[var(--ink)] hover:text-[var(--white-soft)]" href="mailto:contact@exemplu.ro">
                contact@exemplu.ro
              </a>
              <a className="mt-5 inline-flex min-h-11 items-center text-[var(--text-on-ink-mute)] transition-colors hover:text-[var(--coral-accessible)]" href="tel:+40700000000">
                +40 700 000 000
              </a>
            </address>
          </div>
          <nav aria-label="Lista serviciilor" className="footer-link-run mt-12 border-t border-[var(--line-on-ink)] pt-8 text-[14px] leading-[1.45] text-[var(--text-on-ink-mute)]">
            <ul className="flex flex-wrap items-baseline">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#servicii" className="inline-flex min-h-11 items-center">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 text-[13px] leading-[1.7] text-[var(--text-on-ink-quiet)]">
            Copyright © 2026 Clinica Dentaire Verde. Demo de portofoliu, cu design, conținut și brand proprii.
          </div>
        </div>
      </footer>
    </main>
  );
}
