/* empty css                                  */
import { e as createComponent, f as createAstro, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderComponent, o as Fragment } from '../chunks/astro/server_CeULSORw.mjs';
import 'piccolore';
import 'clsx';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$EventLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EventLayout;
  const { title = "Casamiento" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width, initial-scale=1">${renderHead()}</head> <body class="min-h-screen bg-slate-50 text-slate-900"> <main class="max-w-3xl mx-auto px-4 py-10"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/layouts/EventLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$EventHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EventHero;
  const event = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-center mb-10"> <h1 class="text-3xl md:text-4xl font-bold mb-2"> ${event.couple_names} </h1> <p class="text-lg text-slate-600 mb-4">${event.title}</p> ${event.event_date && renderTemplate`<p class="text-md font-semibold"> ${new Date(event.event_date).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })} ${event.event_time && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` · ${event.event_time.slice(0, 5)} hs` })}`} </p>`} ${event.location_name && renderTemplate`<p class="mt-2 text-slate-700"> ${event.location_name} </p>`} ${event.location_address && renderTemplate`<p class="text-slate-500 text-sm"> ${event.location_address} </p>`} </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/EventHero.astro", void 0);

const $$Astro$2 = createAstro();
const $$EventDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EventDescription;
  const { description } = Astro2.props;
  return renderTemplate`${description && renderTemplate`${maybeRenderHead()}<section class="mb-10"><h2 class="text-xl font-semibold mb-2">Nuestra historia</h2><p class="text-slate-700 leading-relaxed">${description}</p></section>`}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/EventDescription.astro", void 0);

const $$Astro$1 = createAstro();
const $$GiftCatalog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GiftCatalog;
  const { gifts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mb-10"> <h2 class="text-xl font-semibold mb-4">Regalos y donaciones</h2> ${gifts.length === 0 ? renderTemplate`<p class="text-slate-500 text-sm">
Todavía no hay regalos cargados.
</p>` : renderTemplate`<ul class="space-y-4"> ${gifts.map((gift) => renderTemplate`<li class="border border-slate-200 rounded-lg p-4 bg-white shadow-sm"> <h3 class="font-semibold mb-1">${gift.name}</h3> ${gift.description && renderTemplate`<p class="text-slate-600 text-sm mb-2"> ${gift.description} </p>`} ${gift.price_suggested !== null && gift.price_suggested !== void 0 && renderTemplate`<p class="text-sm font-medium text-emerald-700">
Sugerido: ${gift.price_suggested.toLocaleString("es-AR", {
    style: "currency",
    currency: gift.currency
  })} </p>`} <button class="mt-3 inline-flex items-center justify-center rounded-md border border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition">
Aportar a este regalo
</button> </li>`)} </ul>`} </section>`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/GiftCatalog.astro", void 0);

const supabaseUrl = "https://yxonejsuyxhlnrzduznd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b25lanN1eXhobG5yemR1em5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3ODA0MjEsImV4cCI6MjA4MDM1NjQyMX0.EYAn1NaatjgwAa7H05VCRDRuCgrebdnMNVBH96AaRbQ";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: event } = await supabase.from("events").select("*").eq("slug", slug).single();
  if (!event) {
    Astro2.response.status = 404;
  }
  let gifts = [];
  if (event) {
    const { data: giftItems } = await supabase.from("gift_items").select("*").eq("event_id", event.id).eq("is_active", true).order("sort_order", { ascending: true }).order("created_at", { ascending: true });
    gifts = giftItems ?? [];
  }
  return renderTemplate`${renderComponent($$result, "EventLayout", $$EventLayout, { "title": event ? event.title : "Evento no encontrado" }, { "default": async ($$result2) => renderTemplate`${event ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "EventHero", $$EventHero, { ...event })} ${renderComponent($$result3, "EventDescription", $$EventDescription, { "description": event.description })} ${renderComponent($$result3, "GiftCatalog", $$GiftCatalog, { "gifts": gifts })} ` })}` : renderTemplate`${maybeRenderHead()}<section class="text-center py-20"> <h1 class="text-2xl font-bold">Evento no encontrado</h1> <p class="text-slate-600 mt-2">
Revisá el link, quizás fue dado de baja.
</p> </section>`}` })}`;
}, "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/[slug].astro", void 0);

const $$file = "/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
