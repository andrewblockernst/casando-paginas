/* empty css                                  */
import { e as createComponent, m as maybeRenderHead, p as renderScript, h as addAttribute, r as renderTemplate, n as renderComponent, k as renderHead } from '../chunks/astro/server_CeULSORw.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { bg: "#AAC5E5", label: "Foto 1 \u2014 Agregar imagen real aqu\xED" },
    { bg: "#BED5C8", label: "Foto 2 \u2014 Agregar imagen real aqu\xED" },
    { bg: "#0A2140", label: "Foto 3 \u2014 Agregar imagen real aqu\xED" },
    { bg: "#AAC5E5", label: "Foto 4 \u2014 Agregar imagen real aqu\xED" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative w-full h-screen min-h-[600px] overflow-hidden"> <!-- Carrusel de fondo --> <div id="carousel" class="relative w-full h-full"> ${slides.map((slide, i) => renderTemplate`<div class="carousel-slide absolute inset-0 w-full h-full transition-opacity duration-1000"${addAttribute(i, "data-index")}${addAttribute(`background-color: ${slide.bg}; opacity: ${i === 0 ? 1 : 0};`, "style")}> <!-- Placeholder: reemplazar con <img src={slide.src} class="w-full h-full object-cover" /> --> <div class="w-full h-full flex items-center justify-center"> <span class="text-white/30 font-sans text-sm tracking-widest uppercase">${slide.label}</span> </div> </div>`)} <!-- Overlay oscuro para legibilidad --> <div class="absolute inset-0 bg-wedding-navy/40 z-10"></div> <!-- Contenido centrado del hero --> <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"> <!-- Logo --> <img src="/images/logo-casamiento.png" alt="Caro & Lauti" class="w-48 md:w-64 lg:w-80 mb-8 drop-shadow-lg animate-fade-in"> <!-- Nombres --> <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-widest mb-4 drop-shadow-lg">
Caro <span class="text-wedding-sky">&</span> Lauti
</h1> <!-- Fecha --> <p class="font-sans text-white/90 tracking-[0.4em] uppercase text-sm md:text-base mb-8">
12 · 10 · 2026
</p> <!-- Scroll indicator --> <a href="#cuenta-regresiva" class="mt-4 text-white/70 hover:text-white transition-colors duration-300 animate-pulse-slow" aria-label="Desplazarse hacia abajo"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </a> </div> <!-- Dots de navegación --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3" id="carousel-dots"> ${slides.map((_, i) => renderTemplate`<button class="carousel-dot w-2 h-2 rounded-full transition-all duration-300"${addAttribute(i, "data-dot")}${addAttribute(i === 0 ? "background-color: #FDFFFA; transform: scale(1.3);" : "background-color: rgba(253,255,250,0.4);", "style")}${addAttribute(`Ir a foto ${i + 1}`, "aria-label")}></button>`)} </div> </div> </section> ${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Hero.astro", void 0);

const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cuenta-regresiva" class="py-20 px-6 bg-wedding-navy text-white text-center"> <div class="max-w-4xl mx-auto"> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs md:text-sm mb-4">Faltan</p> <h2 class="font-serif text-3xl md:text-4xl font-light tracking-wide mb-12 text-white">
para el gran día
</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" id="countdown-grid"> <!-- Días --> <div class="flex flex-col items-center"> <div class="w-24 h-24 md:w-32 md:h-32 border border-wedding-sky/40 flex items-center justify-center mb-3 relative overflow-hidden"> <span id="cd-days" class="font-serif text-4xl md:text-5xl font-light text-white">—</span> </div> <span class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky/80">Días</span> </div> <!-- Horas --> <div class="flex flex-col items-center"> <div class="w-24 h-24 md:w-32 md:h-32 border border-wedding-sky/40 flex items-center justify-center mb-3"> <span id="cd-hours" class="font-serif text-4xl md:text-5xl font-light text-white">—</span> </div> <span class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky/80">Horas</span> </div> <!-- Minutos --> <div class="flex flex-col items-center"> <div class="w-24 h-24 md:w-32 md:h-32 border border-wedding-sky/40 flex items-center justify-center mb-3"> <span id="cd-minutes" class="font-serif text-4xl md:text-5xl font-light text-white">—</span> </div> <span class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky/80">Minutos</span> </div> <!-- Segundos --> <div class="flex flex-col items-center"> <div class="w-24 h-24 md:w-32 md:h-32 border border-wedding-sky/40 flex items-center justify-center mb-3"> <span id="cd-seconds" class="font-serif text-4xl md:text-5xl font-light text-white">—</span> </div> <span class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky/80">Segundos</span> </div> </div> <p class="mt-12 font-serif text-lg italic text-white/60">12 de octubre de 2026</p> </div> </section> ${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Countdown.astro", void 0);

const $$EventDetails = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="evento" class="py-24 px-6 bg-wedding-cream"> <div class="max-w-5xl mx-auto"> <!-- Título --> <div class="text-center mb-16"> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">El gran día</p> <h2 class="section-title">Fecha & Lugar</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> </div> <!-- Grilla de eventos --> <div class="grid md:grid-cols-2 gap-8 mb-16"> <!-- Casamiento Civil --> <div class="border border-wedding-sage/50 p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white"> <div class="w-12 h-12 mx-auto mb-5 flex items-center justify-center"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/lupuorrc.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:48px;height:48px" })} </div> <p class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky mb-2">Civil</p> <h3 class="font-serif text-2xl text-wedding-navy font-light mb-4">Casamiento Civil</h3> <p class="font-sans text-wedding-navy/70 text-sm leading-relaxed mb-1">
Fecha y hora a confirmar
</p> <p class="font-sans text-wedding-navy/50 text-xs tracking-wide"> <!-- TODO: Agregar dirección del registro civil -->
Dirección a confirmar
</p> </div> <!-- Ceremonia Religiosa --> <div class="border border-wedding-sage/50 p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white"> <div class="w-12 h-12 mx-auto mb-5 flex items-center justify-center"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/racldupm.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:48px;height:48px" })} </div> <p class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky mb-2">Iglesia</p> <h3 class="font-serif text-2xl text-wedding-navy font-light mb-4">Ceremonia Religiosa</h3> <p class="font-sans text-wedding-navy/70 text-sm mb-1">Lunes 12 de octubre de 2026</p> <p class="font-sans text-wedding-navy/70 text-sm mb-3"> <!-- TODO: Agregar hora real -->
Hora a confirmar
</p> <p class="font-sans text-wedding-navy/50 text-xs tracking-wide"> <!-- TODO: Agregar nombre e dirección de la iglesia -->
Iglesia · Dirección a confirmar
</p> </div> <!-- Recepción / Fiesta --> <div class="border border-wedding-sage/50 p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white md:col-span-2 md:max-w-md md:mx-auto w-full"> <div class="w-12 h-12 mx-auto mb-5 flex items-center justify-center"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/eouimtlu.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:48px;height:48px" })} </div> <p class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-sky mb-2">Festejo</p> <h3 class="font-serif text-2xl text-wedding-navy font-light mb-4">Recepción & Fiesta</h3> <p class="font-sans text-wedding-navy/70 text-sm mb-1">Lunes 12 de octubre de 2026</p> <p class="font-sans text-wedding-navy/70 text-sm mb-3"> <!-- TODO: Agregar hora del ingreso a la fiesta -->
Hora a confirmar
</p> <p class="font-sans text-wedding-navy/50 text-xs tracking-wide mb-6"> <!-- TODO: Agregar nombre y dirección del salón -->
Salón · Dirección a confirmar
</p> <!-- Botón Cómo llegar --> <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>
Cómo llegar
</a> </div> </div> <!-- Embed de Google Maps --> <div class="w-full overflow-hidden border border-wedding-sage/30 shadow-sm"> <!-- TODO: Reemplazar este iframe con el embed real de Google Maps del salón --> <div class="w-full h-72 md:h-96 bg-wedding-sky/20 flex items-center justify-center"> <div class="text-center text-wedding-navy/40"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path> </svg> <p class="font-sans text-sm tracking-wide">Insertar embed de Google Maps aquí</p> <p class="font-sans text-xs mt-1 opacity-70">Reemplazar con iframe real del salón</p> </div> </div> <!-- Una vez que tengas la dirección, pega aquí el iframe de Google Maps:
      <iframe
        src="https://www.google.com/maps/embed?pb=TU_EMBED_URL"
        width="100%"
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      --> </div> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/EventDetails.astro", void 0);

const $$RSVP = createComponent(($$result, $$props, $$slots) => {
  const GOOGLE_FORMS_URL = "https://forms.google.com";
  return renderTemplate`${maybeRenderHead()}<section id="asistencia" class="py-24 px-6 bg-wedding-sky/20"> <div class="max-w-2xl mx-auto text-center"> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">¡Nos encantaría verte!</p> <h2 class="section-title mb-4">Confirmá tu asistencia</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> <div class="w-16 h-16 mx-auto mb-8 flex items-center justify-center"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/oqdmuxru.json", "trigger": "loop", "delay": "2000", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:64px;height:64px" })} </div> <p class="font-serif text-xl text-wedding-navy/80 italic font-light leading-relaxed mb-4">
Tu presencia es el regalo más grande que nos podés dar.
      Por favor confirmá tu asistencia antes del
<strong class="not-italic font-medium text-wedding-navy">1 de septiembre de 2026</strong>.
</p> <p class="font-sans text-sm text-wedding-navy/60 mb-10">
Completá el formulario para que podamos tenerte en cuenta en todos los detalles.
</p> <a${addAttribute(GOOGLE_FORMS_URL, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Confirmar asistencia
</a> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/RSVP.astro", void 0);

const $$DressCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="vestimenta" class="py-24 px-6 bg-wedding-cream"> <div class="max-w-4xl mx-auto text-center"> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">Cómo venir</p> <h2 class="section-title mb-4">Vestimenta</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> <p class="font-serif text-xl italic font-light text-wedding-navy/70 mb-12 max-w-xl mx-auto leading-relaxed">
Queremos que estés cómodo y elegante para compartir este día especial con nosotros.
</p> <!-- Paleta de colores sugerida --> <div class="mb-12"> <p class="font-sans text-xs tracking-[0.3em] uppercase text-wedding-navy/50 mb-6">Paleta sugerida</p> <div class="flex flex-wrap justify-center gap-4"> <div class="flex flex-col items-center gap-2"> <div class="w-14 h-14 rounded-full border border-wedding-sage/50 shadow-sm" style="background-color: #AAC5E5;"></div> <span class="font-sans text-xs text-wedding-navy/50">Azul cielo</span> </div> <div class="flex flex-col items-center gap-2"> <div class="w-14 h-14 rounded-full border border-wedding-sage/50 shadow-sm" style="background-color: #BED5C8;"></div> <span class="font-sans text-xs text-wedding-navy/50">Verde salvia</span> </div> <div class="flex flex-col items-center gap-2"> <div class="w-14 h-14 rounded-full border border-wedding-sage/50 shadow-sm" style="background-color: #e8e0d8;"></div> <span class="font-sans text-xs text-wedding-navy/50">Champagne</span> </div> <div class="flex flex-col items-center gap-2"> <div class="w-14 h-14 rounded-full border border-wedding-sage/50 shadow-sm" style="background-color: #d4b8c4;"></div> <span class="font-sans text-xs text-wedding-navy/50">Palo de rosa</span> </div> <div class="flex flex-col items-center gap-2"> <div class="w-14 h-14 rounded-full border border-wedding-sage/50 shadow-sm" style="background-color: #7a9a8e;"></div> <span class="font-sans text-xs text-wedding-navy/50">Verde oscuro</span> </div> </div> </div> <!-- Cards de indicaciones --> <div class="grid md:grid-cols-3 gap-6 text-left"> <!-- Para ellas --> <div class="border border-wedding-sage/40 p-6 bg-white hover:shadow-md transition-shadow"> <div class="w-10 h-10 mb-4"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/ssvybplt.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:40px;height:40px" })} </div> <h3 class="font-serif text-xl text-wedding-navy mb-3 font-light">Para ellas</h3> <ul class="font-sans text-sm text-wedding-navy/70 space-y-2"> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Vestido largo o midi elegante
</li> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Traje pantalón formal
</li> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Zapatos de taco (se recomienda llevar repuesto)
</li> </ul> </div> <!-- Para ellos --> <div class="border border-wedding-sage/40 p-6 bg-white hover:shadow-md transition-shadow"> <div class="w-10 h-10 mb-4"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/ktsahwvc.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:40px;height:40px" })} </div> <h3 class="font-serif text-xl text-wedding-navy mb-3 font-light">Para ellos</h3> <ul class="font-sans text-sm text-wedding-navy/70 space-y-2"> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Traje completo o saco y pantalón
</li> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Camisa con corbata o moño
</li> <li class="flex items-start gap-2"> <span class="text-wedding-sage mt-0.5">✓</span>
Zapatos de vestir
</li> </ul> </div> <!-- Evitar --> <div class="border border-rose-200/60 p-6 bg-rose-50/30 hover:shadow-md transition-shadow"> <div class="w-10 h-10 mb-4 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path> </svg> </div> <h3 class="font-serif text-xl text-wedding-navy mb-3 font-light">Por favor evitar</h3> <ul class="font-sans text-sm text-wedding-navy/70 space-y-2"> <li class="flex items-start gap-2"> <span class="text-rose-300 mt-0.5">✗</span>
Blanco, marfil o crema
</li> <li class="flex items-start gap-2"> <span class="text-rose-300 mt-0.5">✗</span>
Negro total (je, no es funeral 😄)
</li> <li class="flex items-start gap-2"> <span class="text-rose-300 mt-0.5">✗</span>
Ropa casual o deportiva
</li> </ul> </div> </div> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/DressCode.astro", void 0);

const $$Gifts = createComponent(($$result, $$props, $$slots) => {
  const MERCADOPAGO_URL = "https://link.mercadopago.com.ar";
  return renderTemplate`${maybeRenderHead()}<section id="regalos" class="py-24 px-6 bg-wedding-navy text-white text-center"> <div class="max-w-2xl mx-auto"> <div class="w-16 h-16 mx-auto mb-8"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/etbpzgne.json", "trigger": "loop", "delay": "2000", "colors": "primary:#FDFFFA,secondary:#AAC5E5", "style": "width:64px;height:64px" })} </div> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">Con todo nuestro cariño</p> <h2 class="font-serif text-4xl md:text-5xl font-light tracking-wide text-white mb-6">Regalos</h2> <div class="flex items-center gap-4 my-6 max-w-xs mx-auto"> <div class="flex-1 h-px bg-wedding-sky/30"></div> <span class="text-wedding-sky text-xl">✦</span> <div class="flex-1 h-px bg-wedding-sky/30"></div> </div> <p class="font-serif text-xl italic font-light leading-relaxed text-white/80 mb-4">
"El regalo más preciado ya lo nos dieron — su presencia y cariño."
</p> <p class="font-sans text-sm text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
Si querés tener un gesto especial con nosotros, podés hacernos una contribución
      para ayudarnos a construir nuestro nido. ¡Cualquier detalle lo agradecemos de todo corazón!
</p> <a${addAttribute(MERCADOPAGO_URL, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-10 py-4 bg-wedding-sky text-wedding-navy font-sans font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-white hover:text-wedding-navy mx-auto"> <!-- Ícono de Mercadopago simplificado --> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path> </svg>
Hacernos un regalo
</a> <p class="mt-6 font-sans text-xs text-white/40 tracking-wide">
Transferencia vía Mercado Pago · Link de pago seguro
</p> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Gifts.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const INSTAGRAM_HANDLE = "@caroylauticasamiento";
  const INSTAGRAM_URL = "https://www.instagram.com/caroylauticasamiento";
  return renderTemplate`${maybeRenderHead()}<section id="instagram" class="py-24 px-6 bg-wedding-sage/20"> <div class="max-w-3xl mx-auto text-center"> <div class="w-16 h-16 mx-auto mb-8"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/lagnqmtd.json", "trigger": "loop", "delay": "3000", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:64px;height:64px" })} </div> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">Seguinos</p> <h2 class="section-title mb-4">Novedades</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> <p class="font-serif text-xl italic font-light text-wedding-navy/70 leading-relaxed mb-6 max-w-lg mx-auto">
Seguí nuestras novedades, detrás de escena y momentos especiales del camino al altar.
</p> <p class="font-sans text-sm text-wedding-navy/50 mb-10">
Etiquetate en fotos con el hashtag:
<span class="font-medium text-wedding-navy">#CaroYLauti2026</span> </p> <!-- Mock de grid de Instagram (placeholder) --> <div class="grid grid-cols-3 gap-2 mb-10 max-w-sm mx-auto"> ${Array.from({ length: 6 }).map((_, i) => renderTemplate`<div class="aspect-square overflow-hidden"${addAttribute(`background-color: ${["#AAC5E5", "#BED5C8", "#0A2140", "#BED5C8", "#AAC5E5", "#0A2140"][i]}; opacity: 0.6;`, "style")}> <div class="w-full h-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/30" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </div> </div>`)} </div> <a${addAttribute(INSTAGRAM_URL, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg>
Seguir ${INSTAGRAM_HANDLE} </a> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Instagram.astro", void 0);

const $$Songs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="canciones" class="py-24 px-6 bg-wedding-cream"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-12"> <div class="w-16 h-16 mx-auto mb-6"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/iltqorsz.json", "trigger": "loop", "delay": "2000", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:64px;height:64px" })} </div> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">La fiesta la armamos entre todos</p> <h2 class="section-title mb-4">Canciones</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> <p class="font-serif text-xl italic font-light text-wedding-navy/70 max-w-lg mx-auto leading-relaxed">
¿Qué canción no puede faltar en nuestra fiesta?
        ¡Sumá la tuya a la playlist!
</p> </div> <!-- Formulario de agregar canción --> <div class="bg-white border border-wedding-sage/40 p-6 md:p-8 mb-8"> <h3 class="font-serif text-xl text-wedding-navy font-light mb-6">Agregá tu canción</h3> <div class="flex flex-col sm:flex-row gap-3"> <input type="text" id="song-input" placeholder="Ej: Don't Stop Me Now - Queen" class="flex-1 border border-wedding-sage/60 px-4 py-3 font-sans text-sm text-wedding-navy placeholder-wedding-navy/30 focus:outline-none focus:border-wedding-sky bg-wedding-cream/50" maxlength="100"> <button id="add-song-btn" class="btn-primary whitespace-nowrap"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path> </svg>
Agregar
</button> </div> <p class="font-sans text-xs text-wedding-navy/40 mt-3">
Formato sugerido: Nombre de la canción - Artista
</p> </div> <!-- Lista de canciones --> <div id="songs-list-container" class="mb-6"> <div class="flex items-center justify-between mb-4"> <h3 class="font-serif text-xl text-wedding-navy font-light">
Playlist colaborativa
<span id="songs-count" class="font-sans text-sm text-wedding-navy/40 ml-2">(0 canciones)</span> </h3> <button id="export-songs-btn" class="font-sans text-xs tracking-widest uppercase text-wedding-sky hover:text-wedding-navy transition-colors duration-200 flex items-center gap-1" title="Exportar lista"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Exportar
</button> </div> <!-- Lista vacía placeholder --> <div id="songs-empty" class="border border-dashed border-wedding-sage/40 p-12 text-center"> <p class="font-serif text-lg italic text-wedding-navy/30">
Todavía no hay canciones. ¡Sé el primero en agregar una!
</p> </div> <!-- Lista de canciones dinámica --> <ul id="songs-list" class="space-y-2 hidden"></ul> </div> <p class="font-sans text-xs text-center text-wedding-navy/30">
Las canciones se guardan en tu dispositivo. Los novios recibirán la lista completa.
</p> </div> </section> ${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Songs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Songs.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "\xBFHay dress code?",
      a: "S\xED, el evento es formal. Les pedimos que vengan elegantes y eviten usar blanco o negro total. Pod\xE9s ver la paleta sugerida en la secci\xF3n de vestimenta de esta misma p\xE1gina."
    },
    {
      q: "\xBFPueden asistir ni\xF1os?",
      a: "Queremos que sea una noche especial y relajada para todos. La fiesta ser\xE1 de noche con m\xFAsica alta y brindis tard\xEDos, por lo que sugerimos que los m\xE1s peque\xF1os vengan solo a la ceremonia religiosa y no a la recepci\xF3n. \xA1Igual adoramos a sus hijitos!"
    },
    {
      q: "\xBFCu\xE1l es el men\xFA? \xBFHay opciones vegetarianas/veganas?",
      a: "Habr\xE1 opciones para todos. Al confirmar tu asistencia por favor indic\xE1 si necesit\xE1s una opci\xF3n vegetariana, vegana o ten\xE9s alguna alergia alimentaria para coordinar con el sal\xF3n."
    },
    {
      q: "\xBFD\xF3nde puedo hospedarme?",
      a: "Pr\xF3ximamente agregaremos recomendaciones de hoteles y alojamientos cercanos al sal\xF3n. Por ahora, te sugerimos buscar opciones en la zona una vez que confirmes la direcci\xF3n del evento."
    },
    {
      q: "\xBFC\xF3mo confirmo mi asistencia?",
      a: 'Pod\xE9s confirmar tu asistencia completando el formulario en la secci\xF3n "Confirm\xE1 tu asistencia" de esta p\xE1gina. Por favor respond\xE9 antes del 1 de septiembre de 2026.'
    },
    {
      q: "\xBFHasta qu\xE9 hora es la fiesta?",
      a: "La fiesta tendr\xE1 una duraci\xF3n estimada hasta las 5 o 6 de la ma\xF1ana. \xA1Reserven energ\xEDas!"
    },
    {
      q: "\xBFHay estacionamiento en el lugar?",
      a: "Pr\xF3ximamente confirmaremos los detalles del estacionamiento en el sal\xF3n. Tambi\xE9n recomendamos considerar alternativas de transporte como remises para poder disfrutar la noche sin preocupaciones."
    },
    {
      q: "\xBFQu\xE9 pasa si no puedo asistir?",
      a: "Si bien nos va a dar mucha pena no tenerte, entendemos que a veces no es posible. Por favor avisanos con anticipaci\xF3n para poder ajustar los detalles. \xA1Te va a llegar igual un pedacito de torta!"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="preguntas" class="py-24 px-6 bg-wedding-sky/15"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-12"> <div class="w-16 h-16 mx-auto mb-6"> ${renderComponent($$result, "lord-icon", "lord-icon", { "src": "https://cdn.lordicon.com/tdrtiskw.json", "trigger": "hover", "colors": "primary:#0A2140,secondary:#AAC5E5", "style": "width:64px;height:64px" })} </div> <p class="font-sans text-wedding-sky tracking-[0.3em] uppercase text-xs mb-3">Todo lo que necesitás saber</p> <h2 class="section-title mb-4">Preguntas frecuentes</h2> <div class="divider-ornament max-w-xs mx-auto"> <span class="text-wedding-sage text-xl">✦</span> </div> </div> <!-- Accordion FAQ --> <div id="faq-container" class="space-y-2"> ${faqs.map((faq, i) => renderTemplate`<div class="faq-item border border-wedding-sage/40 bg-white overflow-hidden"> <button class="faq-trigger w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-wedding-cream/80 transition-colors duration-200"${addAttribute(i, "data-faq")} aria-expanded="false"> <span class="font-serif text-lg text-wedding-navy font-light">${faq.q}</span> <span class="faq-icon text-wedding-sky shrink-0 transition-transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </span> </button> <div class="faq-answer hidden px-6 pb-5 pt-0"> <p class="font-sans text-sm text-wedding-navy/70 leading-relaxed">${faq.a}</p> </div> </div>`)} </div> <!-- Contacto adicional --> <div class="mt-10 text-center border-t border-wedding-sage/30 pt-10"> <p class="font-serif text-lg italic font-light text-wedding-navy/60 mb-2">
¿Tenés otra pregunta?
</p> <p class="font-sans text-sm text-wedding-navy/50">
Escribinos y la respondemos con gusto.
</p> </div> </div> </section> ${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/FAQ.astro", void 0);

const $$Farewell = createComponent(($$result, $$props, $$slots) => {
  const WHATSAPP_LAUTI = "https://wa.me/5491100000000";
  const WHATSAPP_CARO = "https://wa.me/5491100000001";
  return renderTemplate`${maybeRenderHead()}<section id="despedida" class="py-24 px-6 bg-wedding-cream text-center"> <div class="max-w-2xl mx-auto"> <!-- Logo final --> <img src="/images/logo-casamiento.png" alt="Caro & Lauti" class="w-40 md:w-52 mx-auto mb-8 opacity-90"> <div class="divider-ornament max-w-xs mx-auto mb-8"> <span class="text-wedding-sage text-xl">✦</span> </div> <p class="font-serif text-2xl md:text-3xl font-light italic text-wedding-navy leading-relaxed mb-6 max-w-lg mx-auto">
"No podemos imaginar este día sin vos.
      Gracias por ser parte de nuestra historia."
</p> <p class="font-sans text-base text-wedding-navy/60 mb-12">
Con todo nuestro amor,<br> <span class="font-serif text-2xl font-light text-wedding-navy">Caro & Lauti</span> </p> <!-- Botones de WhatsApp --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"> <a${addAttribute(WHATSAPP_LAUTI, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary"> <!-- WhatsApp icon --> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Escribirle a Lauti
</a> <a${addAttribute(WHATSAPP_CARO, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Escribirle a Caro
</a> </div> <p class="font-sans text-xs text-wedding-navy/30 tracking-widest uppercase">
12 · 10 · 2026
</p> </div> </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Farewell.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-8 px-6 bg-wedding-navy text-white text-center border-t border-white/5"> <div class="max-w-4xl mx-auto"> <p class="font-sans text-xs text-white/30 tracking-widest uppercase">
© Casando páginas ${(/* @__PURE__ */ new Date()).getFullYear()} -<a href="#" class="text-wedding-sky/70 hover:text-wedding-sky transition-colors duration-200 ml-1" title="Awrthdrew Designs">
Awrthdrew
</a>. Todos los derechos reservados
</p></div> </footer>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Caro & Lauti - 12 de octubre de 2026. Sitio oficial del casamiento."><link rel="icon" type="image/png" href="/images/logo-casamiento.png"><title>Caro & Lauti · 12.10.2026</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Open Graph --><meta property="og:title" content="Caro & Lauti · 12.10.2026"><meta property="og:description" content="¡Nos casamos! Te invitamos a celebrar con nosotros el 12 de octubre de 2026."><meta property="og:image" content="/images/logo-casamiento.png"><meta property="og:type" content="website"><!-- Lordicon web component -->${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-wedding-cream text-wedding-navy overflow-x-hidden"> <!-- Navegación sticky --> <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6"> <div class="max-w-6xl mx-auto flex items-center justify-between"> <!-- Logo pequeño en nav --> <a href="#inicio" class="shrink-0"> <img src="/images/logo-casamiento.png" alt="Caro & Lauti" class="h-8 md:h-10 object-contain opacity-0 transition-opacity duration-300" id="nav-logo"> </a> <!-- Links de navegación - desktop --> <div class="hidden md:flex items-center gap-8"> ${[
    { href: "#evento", label: "El D\xEDa" },
    { href: "#asistencia", label: "Asistencia" },
    { href: "#vestimenta", label: "Vestimenta" },
    { href: "#regalos", label: "Regalos" },
    { href: "#canciones", label: "Canciones" },
    { href: "#preguntas", label: "FAQ" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="nav-link font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200" style="color: transparent;"> ${link.label} </a>`)} </div> <!-- Botón hamburguesa - mobile --> <button id="mobile-menu-btn" class="md:hidden p-2" aria-label="Menú" style="color: transparent;"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Menú mobile desplegable --> <div id="mobile-menu" class="hidden md:hidden mt-2 pb-4 border-t border-white/20"> <div class="max-w-6xl mx-auto flex flex-col gap-3 pt-4 px-2"> ${[
    { href: "#evento", label: "El D\xEDa" },
    { href: "#asistencia", label: "Asistencia" },
    { href: "#vestimenta", label: "Vestimenta" },
    { href: "#regalos", label: "Regalos" },
    { href: "#canciones", label: "Canciones" },
    { href: "#preguntas", label: "FAQ" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-sans text-xs tracking-[0.2em] uppercase text-white py-1"> ${link.label} </a>`)} </div> </div> </nav> <!-- Secciones principales --> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Countdown", $$Countdown, {})} ${renderComponent($$result, "EventDetails", $$EventDetails, {})} ${renderComponent($$result, "RSVP", $$RSVP, {})} ${renderComponent($$result, "DressCode", $$DressCode, {})} ${renderComponent($$result, "Gifts", $$Gifts, {})} ${renderComponent($$result, "Instagram", $$Instagram, {})} ${renderComponent($$result, "Songs", $$Songs, {})} ${renderComponent($$result, "FAQ", $$FAQ, {})} ${renderComponent($$result, "Farewell", $$Farewell, {})} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro", void 0);

const $$file = "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
