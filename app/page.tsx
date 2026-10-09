import { ArrowRight, CalendarDays, Check, ChevronDown, Heart, MapPin, Music2, Sparkles, Star, Store, Utensils, UsersRound } from 'lucide-react';

const whatsappUrl = 'https://wa.me/?text=Hola%20Bazar%20Origen%2C%20quiero%20reservar%20mi%20ingreso%20gratuito%20para%20el%2015%20o%2016%20de%20noviembre.';
const exhibitorUrl = 'https://wa.me/?text=Hola%20Bazar%20Origen%2C%20quiero%20recibir%20información%20para%20exponer%20mi%20marca.';

const experiences = [
  { icon: Store, title: 'Marcas con identidad', text: 'Moda, diseño, decoración y piezas de autor seleccionadas por su propuesta y calidad.' },
  { icon: Utensils, title: 'Sabores para descubrir', text: 'Food trucks, repostería y propuestas locales para disfrutar durante todo el día.' },
  { icon: Music2, title: 'Un día para compartir', text: 'Música en vivo, zona kids, talleres gratuitos, activaciones y sorteos.' },
];

const faqs = [
  ['¿El ingreso tiene algún costo?', 'No. El ingreso a Bazar Origen es completamente gratuito. Puedes reservar por WhatsApp para recibir novedades y facilitar tu llegada.'],
  ['¿Puedo asistir con niños?', 'Sí. Es una experiencia familiar e incluye una zona kids y actividades pensadas para compartir.'],
  ['¿Dónde se realizará?', 'En el Centro de Convenciones Los Olivos. Antes del evento te enviaremos por WhatsApp la ubicación exacta y recomendaciones de acceso.'],
  ['Tengo una marca, ¿cómo puedo participar?', 'Escríbenos desde el botón “Quiero exponer mi marca”. Revisamos cada propuesta para mantener una selección coherente y de calidad.'],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a href="#inicio" aria-label="Bazar Origen, inicio" className="font-heading text-xl tracking-[0.18em] text-white">BAZAR <span className="font-normal italic">Origen</span></a>
        <div className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          <a href="#experiencia" className="transition hover:text-white">La experiencia</a>
          <a href="#expositores" className="transition hover:text-white">Expositores</a>
          <a href="#preguntas" className="transition hover:text-white">Preguntas</a>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#24372c] sm:inline-flex">Reservar ingreso</a>
      </nav>

      <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden md:min-h-[820px]">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=88" alt="Visitante explorando una selección de productos de autor" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,35,26,.91)_0%,rgba(18,35,26,.67)_52%,rgba(18,35,26,.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,35,26,.76)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-16 pt-32 md:min-h-[820px] md:items-center md:px-10 md:pb-0">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e5bd75]"><span className="h-px w-10 bg-[#e5bd75]" /> Próxima edición · Lima</p>
            <h1 className="font-heading text-[clamp(3.4rem,9vw,7.6rem)] font-medium leading-[.87] tracking-[-.055em] text-white">Lo especial<span className="block font-normal italic text-[#f2dcc0]">no se encuentra.</span><span className="block">Se descubre.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/78 md:text-lg">Más de 120 marcas de autor, sabores locales y experiencias para compartir en una edición cuidadosamente curada.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e6b866] px-7 text-sm font-bold text-[#172a20] shadow-[0_14px_35px_rgba(0,0,0,.22)] transition hover:-translate-y-0.5 hover:bg-[#f1ca83]">Reserva tu ingreso gratuito <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
              <a href="#expositores" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">Quiero exponer mi marca</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/85">
              <span className="flex items-center gap-2"><CalendarDays className="size-4 text-[#e5bd75]" /> 15 y 16 de noviembre · 11 a.m. — 9 p.m.</span>
              <span className="flex items-center gap-2"><MapPin className="size-4 text-[#e5bd75]" /> C.C. Los Olivos · Ingreso libre</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Resultados de Bazar Origen" className="border-b border-border bg-[#fffaf2]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[['7', 'ediciones realizadas'], ['18 mil+', 'asistentes'], ['350+', 'emprendedores'], ['92%', 'de satisfacción']].map(([value, label]) => (
            <div key={label} className="bg-[#fffaf2] px-5 py-8 text-center md:py-10"><strong className="font-heading text-4xl font-medium text-primary md:text-5xl">{value}</strong><span className="mt-1 block text-xs uppercase tracking-[.16em] text-muted-foreground">{label}</span></div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div><p className="eyebrow">Una experiencia distinta</p><h2 className="section-title">Un encuentro con todo lo que tiene <em>una historia detrás.</em></h2></div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:ml-auto lg:text-lg">Déjate sorprender por piezas que no verás en todas partes, conoce a quienes las crean y disfruta una jornada pensada con detalle.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {experiences.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group rounded-[1.75rem] border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(38,55,45,.1)] md:p-9">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-full bg-[#e7dccb] text-primary"><Icon className="size-5" /></span><span className="font-heading text-3xl italic text-[#c9b99d]">0{index + 1}</span></div>
                <h3 className="mt-12 font-heading text-3xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d3428] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="relative grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=85" alt="Café artesanal servido en Bazar Origen" className="h-[360px] w-full rounded-[1.8rem] object-cover md:h-[540px]" />
            <img src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?auto=format&fit=crop&w=900&q=85" alt="Selección de flores y productos locales" className="mt-14 h-[360px] w-full rounded-[1.8rem] object-cover md:h-[540px]" />
            <div className="absolute -bottom-5 left-1/2 w-36 -translate-x-1/2 rounded-full border border-white/20 bg-[#e6b866] px-5 py-4 text-center text-xs font-bold uppercase tracking-[.14em] text-[#172a20] shadow-xl">15 — 16<br />noviembre</div>
          </div>
          <div className="lg:pl-12"><p className="eyebrow text-[#e6b866]">Agenda tu visita</p><h2 className="section-title text-white">Dos días para mirar, probar, crear y <em className="text-[#f2dcc0]">volver inspirado.</em></h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {['Más de 120 emprendimientos', 'Talleres gratuitos', 'Música en vivo', 'Zona kids', 'Food trucks', 'Sorteos durante el evento'].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-white/80"><Check className="size-4 shrink-0 text-[#e6b866]" />{item}</li>)}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#e6b866] px-7 text-sm font-bold text-[#172a20] transition hover:bg-[#f1ca83]">Quiero reservar mi ingreso <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center"><Star className="mx-auto size-7 fill-[#d5a753] text-[#d5a753]" /><blockquote className="mt-7 font-heading text-3xl font-medium leading-tight md:text-5xl">“Encontré regalos que no había visto en ningún otro lugar. El ambiente, la música y cada marca hicieron que quisiéramos quedarnos toda la tarde.”</blockquote><p className="mt-6 text-sm font-semibold uppercase tracking-[.16em] text-muted-foreground">Visitante · Edición 2024</p></div>
      </section>

      <section id="expositores" className="bg-[#e8ddcc] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#fffaf2] shadow-[0_30px_90px_rgba(40,52,43,.12)] lg:grid-cols-2">
          <div className="p-8 md:p-14"><p className="eyebrow">Para marcas con propósito</p><h2 className="section-title">Tu próxima comunidad puede conocerte <em>aquí.</em></h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Buscamos propuestas auténticas, bien presentadas y creadas con intención. Súmate a futuras ediciones y conecta en persona con miles de visitantes.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm"><span className="pill"><UsersRound className="size-4" /> 4,000 visitantes esperados</span><span className="pill"><Heart className="size-4" /> Comunidad afín</span><span className="pill"><Sparkles className="size-4" /> Curaduría premium</span></div>
            <a href={exhibitorUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition hover:bg-[#355d46]">Quiero exponer mi marca <ArrowRight className="size-4" /></a>
          </div>
          <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85" alt="Emprendedora presentando sus productos en un bazar" className="h-full min-h-[420px] w-full object-cover" />
        </div>
      </section>

      <section id="preguntas" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1fr]">
          <div><p className="eyebrow">Antes de venir</p><h2 className="section-title">Todo claro para disfrutar <em>sin apuros.</em></h2><p className="mt-5 text-muted-foreground">Si necesitas algo más, escríbenos por WhatsApp.</p></div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold"><span>{question}</span><ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#14261d] px-5 py-24 text-center text-white md:px-10 md:py-36">
        <div className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(#e6b866_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-4xl"><p className="eyebrow text-[#e6b866]">15 y 16 de noviembre · Los Olivos</p><h2 className="font-heading text-5xl font-medium leading-[.95] tracking-[-.04em] md:text-8xl">Ven por algo único.<br /><em className="text-[#f2dcc0]">Quédate por la experiencia.</em></h2><p className="mx-auto mt-7 max-w-xl text-white/70">Reserva gratis por WhatsApp y recibe la ubicación, agenda y novedades de esta edición.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#e6b866] px-8 text-sm font-bold text-[#172a20] transition hover:bg-[#f1ca83]">Reserva tu ingreso gratuito <ArrowRight className="size-4" /></a></div>
      </section>

      <footer className="bg-[#0e1c15] px-5 pb-28 pt-10 text-white/60 md:px-10 md:pb-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-heading text-xl tracking-[.18em] text-white">BAZAR <span className="italic">Origen</span></p><p className="mt-2 text-sm">Marcas únicas. Historias auténticas.</p></div><p className="text-xs">© Bazar Origen · Lima, Perú</p></div></footer>

      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e6b866] px-5 text-sm font-bold text-[#172a20] shadow-[0_12px_40px_rgba(0,0,0,.28)]">Reserva tu ingreso gratuito <ArrowRight className="size-4" /></a></div>
    </main>
  );
}
