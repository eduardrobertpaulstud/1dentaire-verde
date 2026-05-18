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
    title: "Control complet si plan clar in 45 de minute",
    text: "Radiografie, consult si recomandari explicate pe intelesul tau. Pleci cu urmatorul pas, nu cu indoieli.",
    image: "/media/control-complet.jpg",
  },
  {
    title: "Profilaxie blanda pentru gingii sensibile",
    text: "Igienizare, airflow si instructiuni simple pentru rutina de acasa. Fara graba. Fara rusine.",
    image: "/media/profilaxie-blanda.jpg",
  },
  {
    title: "Ortodontie pentru adulti si adolescenti",
    text: "Aparate fixe sau alignere, cu monitorizare atenta si fotografii de progres la fiecare etapa.",
    image: "/media/ortodontie-adulti.jpg",
  },
  {
    title: "Implantologie cu timp real de raspuns",
    text: "Evaluam osul, riscurile si calendarul tratamentului inainte sa programam interventia.",
    image: "/media/implantologie.jpg",
  },
  {
    title: "Stomatologie pentru copii si parinti linistiti",
    text: "Prima vizita este despre incredere, joc si explicatii scurte. Copilul ramane in control.",
    image: "/media/stomatologie-copii.jpg",
  },
  {
    title: "Albire si estetica fara promisiuni artificiale",
    text: "Lucram cu nuanta dintilor tai, nu cu filtre. Rezultatul trebuie sa arate firesc.",
    image: "/media/albire-naturala.jpg",
  },
];

const visionNotes = [
  {
    title: "Viziunea noastra",
    text: "Dentaire Verde s-a nascut dintr-o idee simpla: oamenii revin la dentist cand inteleg ce li se intampla. De aceea incepem cu ascultare, fotografii, explicatii si un plan scris.",
  },
  {
    title: "misiunea noastra",
    text: "Ne-am propus sa facem stomatologia mai previzibila. Fiecare pacient primeste optiuni, costuri si timp de gandire. Tratamentul bun nu se grabeste.",
  },
  {
    title: "Procesul nostru",
    text: "Consultam, documentam, prioritizam. Durerea si infectiile vin primele. Estetica vine dupa sanatate. Fiecare etapa este notata clar, ca sa poti decide in liniste.",
  },
];

const services = [
  {
    title: "Servicii Adulti",
    text: "Tratamente restaurative, endodontie, coroane, implanturi si planuri etapizate pentru pacienti care vor sa isi puna sanatatea orala in ordine.",
    cta: "Exploreaza Serviciile pentru adulti",
    image: "/media/services-adulti.jpg",
  },
  {
    title: "Servicii Adolescenti",
    text: "Ortodontie, profilaxie, protectii sportive si consultatii in care adolescentul este tratat ca participant real la decizie.",
    cta: "Exploreaza Serviciile pentru adolescenti",
    image: "/media/services-adolescenti.jpg",
  },
  {
    title: "Servicii Copii",
    text: "Vizite de acomodare, sigilari, tratamente pentru dinti temporari si sprijin pentru parinti cand periajul devine negociere zilnica.",
    cta: "Exploreaza Serviciile pentru copii",
    image: "/media/services-copii.jpg",
  },
  {
    title: "Estetica Dentara",
    text: "Albire, fatete, reconturare si restaurari care pastreaza expresia fetei. Naturalul este standardul nostru cel mai greu.",
    cta: "Vezi tratamentele estetice",
    image: "/media/services-estetica.jpg",
  },
];

const priceGroups = [
  {
    kicker: "I — Consult si diagnostic",
    title: "Inainte de orice tratament",
    items: [
      {
        name: "Consult complet cu plan scris",
        note: "45 de minute, radiografie, fotografii intraorale, recomandari etapizate.",
        price: "250 lei",
      },
      {
        name: "Consult ortodontic",
        note: "Evaluare amanuntita pentru aparat fix sau alignere, cu fotografii de start.",
        price: "300 lei",
      },
      {
        name: "Radiografie panoramica",
        note: "OPG digital, eliberare in aceeasi zi.",
        price: "150 lei",
      },
      {
        name: "CBCT, tomografie 3D",
        note: "Volum partial sau total, esential pentru implant si chirurgie.",
        price: "350 lei",
      },
    ],
  },
  {
    kicker: "II — Profilaxie",
    title: "Igienizare blanda, rutina onesta",
    items: [
      {
        name: "Igienizare completa cu Airflow",
        note: "Detartraj ultrasonic, Airflow cu pulbere fina, periaj profesional.",
        price: "450 lei",
      },
      {
        name: "Detartraj ultrasonic si periaj",
        note: "Sedinta scurta pentru pacientii cu rutina constanta.",
        price: "350 lei",
      },
      {
        name: "Sigilare dinte, copil sau adult",
        note: "Per dinte, indicat pentru molari cu santuri adanci.",
        price: "200 lei",
      },
      {
        name: "Gutiera nocturna pentru bruxism",
        note: "Amprenta digitala, gutiera transparenta termoformata.",
        price: "950 lei",
      },
    ],
  },
  {
    kicker: "III — Restaurari si endodontie",
    title: "Cand un dinte cere atentie acum",
    items: [
      {
        name: "Obturatie compozit, carie mica sau medie",
        note: "Material fotopolimerizabil, izolare cu diga.",
        price: "500 lei",
      },
      {
        name: "Obturatie compozit pe molar",
        note: "Pentru carii intinse sau reconstructii ocluzale.",
        price: "700 lei",
      },
      {
        name: "Tratament endodontic monoradicular",
        note: "Microscop, instrumentar rotativ, obturatie de canal.",
        price: "750 lei",
      },
      {
        name: "Tratament endodontic pluriradicular",
        note: "Trei sau patru canale, sedinte programate cu calendar clar.",
        price: "1.100 lei",
      },
      {
        name: "Reconstructie dinte cu pivot",
        note: "Pivot din fibra de sticla si bont in compozit.",
        price: "1.100 lei",
      },
    ],
  },
  {
    kicker: "IV — Protetica si implantologie",
    title: "Solutii pe termen lung, evaluate cu rabdare",
    items: [
      {
        name: "Coroana ceramica integrala E-max",
        note: "Indicat pentru zona frontala, estetic firesc.",
        price: "2.400 lei",
      },
      {
        name: "Coroana zirconiu",
        note: "Pentru zona laterala sau pacienti cu bruxism.",
        price: "2.800 lei",
      },
      {
        name: "Implant dentar premium Straumann",
        note: "Sistem elvetian, garantie pe viata a corpului implantului.",
        price: "5.500 lei",
      },
      {
        name: "Coroana pe implant, zirconiu",
        note: "Bont personalizat si fixare cu insurubare.",
        price: "3.200 lei",
      },
      {
        name: "Sinus lift extern, per sinus",
        note: "Cand inaltimea osului nu permite implant direct.",
        price: "4.500 lei",
      },
    ],
  },
  {
    kicker: "V — Ortodontie",
    title: "Alegeri clare pentru adolescenti si adulti",
    items: [
      {
        name: "Aparat fix metalic, ambele arcade",
        note: "Tratament complet, sedinte lunare de control incluse.",
        price: "7.500 lei",
      },
      {
        name: "Aparat fix ceramic sau safir",
        note: "Brackets translucizi, mai discreti vizual.",
        price: "11.500 lei",
      },
      {
        name: "Aligneri Invisalign Lite",
        note: "Pentru corectii limitate, pana la 14 etape.",
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
    kicker: "VI — Estetica naturala",
    title: "Rezultate care raman in nuanta ta",
    items: [
      {
        name: "Albire profesionala Philips Zoom",
        note: "O sedinta in cabinet, cu pregatire si fluorizare.",
        price: "2.200 lei",
      },
      {
        name: "Albire la domiciliu, gutiere personalizate",
        note: "Set complet de gel si protocol scris.",
        price: "1.500 lei",
      },
      {
        name: "Fateta ceramica E-max, per dinte",
        note: "Preparatie minim invaziva, amprenta digitala.",
        price: "3.200 lei",
      },
      {
        name: "Fateta compozita directa, per dinte",
        note: "Aplicata intr-o sedinta, alternativa accesibila.",
        price: "1.400 lei",
      },
      {
        name: "Reconturare estetica dinte",
        note: "Mici ajustari de forma fara anestezie.",
        price: "600 lei",
      },
    ],
  },
];

const teamMembers = [
  {
    src: "/media/team-doctor-female-40s.jpg",
    alt: "Medic stomatolog din echipa Dentaire Verde in tunica sage",
  },
  {
    src: "/media/team-doctor-male-30s.jpg",
    alt: "Medic stomatolog din echipa Dentaire Verde in tunica oat",
  },
  {
    src: "/media/team-assistant-female-20s.jpg",
    alt: "Asistenta dentara din echipa Dentaire Verde cu un carnet in mana",
  },
  {
    src: "/media/team-technician-male-50s.jpg",
    alt: "Tehnician dentar din echipa Dentaire Verde langa peretele cabinetului",
  },
];

const articles = [
  {
    title: "De ce sangerarea gingivala nu trebuie amanata",
    date: "12/04/2026 /// Niciun comentariu",
    image: "/media/article-sangerare.jpg",
  },
  {
    title: "Prima vizita la dentist a copilului: cum o pregatim fara frica",
    date: "18/03/2026 /// Niciun comentariu",
    image: "/media/article-prima-vizita.jpg",
  },
  {
    title: "Implant sau punte dentara: ce intrebari merita puse la consult",
    date: "22/02/2026 /// 2 comentarii",
    image: "/media/article-implant.jpg",
  },
  {
    title: "Albirea dentara corecta si limitele unui zambet natural",
    date: "09/01/2026 /// Niciun comentariu",
    image: "/media/article-albire.jpg",
  },
];

const processTextures = [
  {
    title: "Plan scris",
    image: "/media/process-plan.jpg",
    alt: "Plan de tratament pe birou, cu stilou si lumina naturala",
  },
  {
    title: "Dosare la vedere",
    image: "/media/process-envelopes.jpg",
    alt: "Plicuri numerotate pe raftul clinicii",
  },
  {
    title: "Igiena fara spectacol",
    image: "/media/process-hands.jpg",
    alt: "Maini spalate la chiuveta clinicii, langa faianta sage",
  },
];

const locationImages = [
  {
    image: "/media/clinic-exterior.jpg",
    alt: "Exteriorul unei case vechi din Bucuresti adaptate ca clinica Dentaire Verde",
  },
  {
    image: "/media/clinic-sign.jpg",
    alt: "Placuta discreta de alama Dentaire Verde langa usa de intrare",
  },
];

const testimonials = [
  {
    quote:
      "Am ajuns cu multa teama dupa ani de amanari. Mi-au explicat fiecare pas, au oprit cand am avut nevoie si pentru prima data nu am simtit ca sunt certata pentru ce nu am facut la timp.",
    name: "Ioana M.",
  },
  {
    quote:
      "Planul de tratament a fost clar, cu preturi si prioritati. Am stiut ce este urgent, ce poate astepta si de ce. Pentru mine asta a contat enorm.",
    name: "Andrei Popescu",
  },
  {
    quote:
      "Copilul meu a intrat convins ca nu deschide gura. A iesit intreband cand revenim. Nu a fost magie, a fost rabdare reala.",
    name: "Mara D.",
  },
];

const footerLinks = [
  "Preventie dentara",
  "Profilaxie",
  "Endodontie",
  "Implant dentar",
  "Ortodontie",
  "Stomatologie copii",
  "Albire dentara",
  "Fatete",
  "Urgente dentare",
  "Radiologie",
  "Planuri de tratament",
];

const railTreatments = [...featuredTreatments, ...featuredTreatments];

export default function Home() {
  return (
    <main className="bg-[var(--paper)] text-[var(--foreground)]">
      <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-[var(--white-soft)] px-4 text-[var(--ink)] sm:px-7 md:px-12">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label="Dentaire Verde acasa">
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
        <nav className="hidden items-center gap-8 font-display text-[13px] uppercase tracking-[0.16em] text-[var(--ink)] lg:flex" aria-label="Navigatie principala">
          <a href="#servicii" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Servicii</a>
          <a href="#preturi" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Preturi</a>
          <a href="#echipa" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Echipa</a>
          <a href="#articole" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Articole</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-[var(--coral-accessible)]">Contact</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <MobileMenu />
          <a className="cta-button font-button bg-[var(--ink)] px-4 py-3.5 text-[12px] font-light uppercase tracking-[0.14em] text-[var(--white-soft)] sm:px-5 sm:py-4 sm:text-[13px] md:px-7" href="#contact">
            Programeaza-te
          </a>
        </div>
      </header>

      <section
        id="top"
        className="hero-stage relative isolate flex min-h-svh flex-col items-center justify-start overflow-hidden px-5 pb-10 pt-20 text-center text-[var(--white-soft)] sm:px-7 md:px-12"
      >
        <Image
          src={heroImage}
          alt="Consult stomatologic atent intr-un cabinet luminos"
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
            ai grija de zambet
            <span className="block">ai grija de tine</span>
          </h1>
          <p className="fade-up-delay mx-auto mt-24 max-w-5xl font-display text-[1.18rem] font-semibold uppercase leading-[1.08] tracking-normal sm:mt-28 sm:text-[1.85rem] lg:mt-36 lg:text-[2.85rem]">
            e momentul pentru o
            <span className="block">vizita fara graba</span>
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
          aria-label="Opreste miscarea caruselului de tratamente"
        />
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 px-7 md:px-12">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--text-on-ink-mute)]">e momentul pentru o schimbare</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-none tracking-[-0.045em]">
              tratamente cu pasii la vedere
            </h2>
          </div>
          <label
            htmlFor="pause-treatment-rail"
            className="treatment-rail-toggle-label inline-flex h-11 w-11 shrink-0 items-center justify-center"
          >
            <span className="sr-only">Opreste miscarea caruselului de tratamente</span>
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
          <h2 className="font-display text-balance text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
            sanatatea orala presupune sa intelegi ce urmeaza
          </h2>
          <p className="mx-auto mt-12 max-w-4xl text-[18px] leading-[1.75] text-[var(--text-on-ink)] md:text-[21px]">
            Suntem pasionati de tot ce inseamna stomatologie facuta cu rabdare: preventie, tratamente restaurative, ortodontie, implantologie si estetica naturala. Credem ca un cabinet bun nu te impinge spre decizii rapide. Iti da informatii, timp si siguranta.
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-16">
          {visionNotes.map((note) => (
            <article key={note.title}>
              <h3 className="font-display text-[22px] font-semibold capitalize leading-tight">{note.title}</h3>
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
              <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">serviciile clinicii dentare verde</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--ink)]">
                Preventie. Tratament. Zambet firesc.
              </h2>
            </div>
            <p className="max-w-2xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Oferim servicii pentru toate varstele, de la copii si adolescenti pana la adulti care au amanat prea mult. Lucram cu planuri etapizate, fotografii intraorale si explicatii clare inainte de fiecare decizie.
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
              <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">onorarii orientative pentru anul 2026</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--ink)]">
                Preturi la vedere, fara surprize.
              </h2>
            </div>
            <p className="max-w-2xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Iti scriem totul inainte: ce este urgent, ce poate astepta, cat costa fiecare etapa. Sumele de mai jos sunt repere reale, in lei, pentru pacientii Dentaire Verde din Bucuresti.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-button text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">Plan scris, costuri scrise</p>
              <p className="mt-5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
                Fiecare pacient pleaca de la primul consult cu un calendar si un total clar.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
                Onorariile variaza in functie de complexitatea cazului, materialele alese si numarul de etape. Nu incepem niciun tratament inainte sa fii de acord cu costul scris.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--ink-muted)]">
                Pentru cazurile etapizate propunem un calendar pe trei sau sase luni, cu prioritati medicale puse inaintea celor estetice.
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
                Sumele sunt actualizate in primavara 2026 si pot varia in functie de complexitate, materiale si numar de sedinte. Anestezia, izolarea cu diga si protocoalele de sterilizare sunt incluse in fiecare tratament.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clinica" className="bg-[var(--white-soft)] px-7 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">un loc, nu doar un cabinet</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--ink)]">
              Dentaire Verde, aproape de ritmul Bucurestiului
            </h2>
            <p className="mt-8 max-w-xl text-[18px] leading-[1.75] text-[var(--ink-muted)]">
              Am pastrat ideea de casa veche, lumina naturala si semn discret. Vrem ca prima dovada de grija sa apara inainte sa intri pe usa.
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
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.055em] text-[var(--ink)]">
              Cine Suntem
            </h2>
            <p className="mt-8 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--ink)]">
              Impreuna pentru dinti sanatosi, nu perfectiunea de reclama
            </p>
            <p className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-[var(--ink-soft)]">
              Suntem medici stomatologi, asistenti, tehnicieni si oameni care stiu cat de greu poate fi sa revii dupa o experienta neplacuta. Credem in tratamente explicate, in pauze cand ai nevoie, in intrebari puse fara jena. Si lucram impreuna ca fiecare pacient sa simta ca nu intra singur in cabinet.
            </p>
            <a href="#contact" className="cta-button mt-10 inline-flex bg-[var(--ink)] px-7 py-4 font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--white-soft)]">
              Programare la clinica
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
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-none tracking-[-0.055em] text-[var(--ink)]">
              Articole Esentiale
            </h2>
            <h3 className="mt-8 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[var(--ink)]">
              Stomatologie cu o abordare down to earth
            </h3>
            <p className="mt-6 text-[17px] leading-[1.75] text-[var(--ink-muted)]">
              Scriem despre ce conteaza: durere, preventie, copii, implanturi, estetica si frica de dentist. Fara jargon. Fara idealizari. Doar informatii utile, spuse omeneste.
            </p>
            <a href="#contact" className="mt-8 inline-flex min-h-11 items-center font-button text-[13px] font-light uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:text-[var(--coral-accessible)]">
              Exploreaza jurnalul clinicii
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
          <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--muted)]">ce spun cei care ne-au ales</p>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-none tracking-[-0.055em] text-[var(--ink)]">
            Incredere, claritate, tratament fara presiune
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="border-t border-[var(--ink)] pt-8">
                <blockquote className="text-[19px] leading-[1.65] text-[var(--ink-soft)]">„{testimonial.quote}”</blockquote>
                <figcaption className="mt-8">
                  <span className="block font-display text-lg font-semibold text-[var(--ink)]">{testimonial.name}</span>
                  <span className="mt-1 block text-sm text-[var(--muted)]">Recenzie publica pe Google</span>
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
                Clinica stomatologica fictiva pentru un demo de portofoliu. Bucuresti, zona Iancului. Program luni-vineri 09:00-20:00.
              </p>
            </div>
            <address className="font-button text-[13px] not-italic uppercase tracking-[0.16em]">
              <a className="cta-button inline-flex min-h-11 items-center bg-[var(--white-soft)] px-7 py-4 text-[var(--ink)] hover:text-[var(--white-soft)]" href="mailto:programari@dentaireverde.ro">
                programari@dentaireverde.ro
              </a>
              <a className="mt-5 inline-flex min-h-11 items-center text-[var(--text-on-ink-mute)] transition-colors hover:text-[var(--coral-accessible)]" href="tel:+40731000246">
                +40 731 000 246
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
            Copyright © 2026 Clinica Dentaire Verde. Demo fictiv pentru portofoliu. Design adaptat ca stil, continut si brand propriu.
          </div>
        </div>
      </footer>
    </main>
  );
}
