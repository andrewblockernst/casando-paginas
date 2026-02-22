import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_CeULSORw.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BMfjhQKk.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/","cacheDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/node_modules/.astro/","outDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/dist/","srcDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/src/","publicDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/public/","buildClientDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/dist/client/","buildServerDir":"file:///Users/andrew/Documents/code/casamiento/casandopaginas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.MFyCn_nw.css"}],"routeData":{"route":"/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.MFyCn_nw.css"},{"type":"external","src":"/_astro/index.B9KBWu3r.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cwafomii.mjs","/Users/andrew/Documents/code/casamiento/casandopaginas/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CcOfp65m.mjs","/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.BnxFQpR9.js","/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DfffAUUY.js","/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.D_aqFMwI.js","/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Countdown.astro?astro&type=script&index=0&lang.ts":"_astro/Countdown.astro_astro_type_script_index_0_lang.BCkEHJyU.js","/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Songs.astro?astro&type=script&index=0&lang.ts":"_astro/Songs.astro_astro_type_script_index_0_lang.NyR6mUCz.js","/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.Drixwn-p.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/andrew/Documents/code/casamiento/casandopaginas/src/pages/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"main-nav\"),s=document.getElementById(\"nav-logo\"),c=document.querySelectorAll(\".nav-link\"),l=document.getElementById(\"mobile-menu-btn\"),o=document.getElementById(\"mobile-menu\");function a(){window.scrollY>80?(e.classList.add(\"bg-wedding-navy/95\",\"backdrop-blur-sm\",\"shadow-lg\",\"py-2\"),e.classList.remove(\"py-4\"),s.style.opacity=\"1\",c.forEach(n=>{n.style.color=\"rgba(253,255,250,0.75)\"}),l.style.color=\"rgba(253,255,250,0.9)\"):(e.classList.remove(\"bg-wedding-navy/95\",\"backdrop-blur-sm\",\"shadow-lg\",\"py-2\"),e.classList.add(\"py-4\"),s.style.opacity=\"0\",c.forEach(n=>{n.style.color=\"transparent\"}),l.style.color=\"transparent\")}window.addEventListener(\"scroll\",a,{passive:!0});a();l.addEventListener(\"click\",()=>{o.classList.toggle(\"hidden\")});o.querySelectorAll(\"a\").forEach(t=>{t.addEventListener(\"click\",()=>o.classList.add(\"hidden\"))});"],["/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const o=document.querySelectorAll(\".carousel-slide\"),e=document.querySelectorAll(\".carousel-dot\");let t=0,r;function s(l){o[t].style.opacity=\"0\",e[t].style.backgroundColor=\"rgba(253,255,250,0.4)\",e[t].style.transform=\"scale(1)\",t=l,o[t].style.opacity=\"1\",e[t].style.backgroundColor=\"#FDFFFA\",e[t].style.transform=\"scale(1.3)\"}function n(){s((t+1)%o.length)}function c(){r=setInterval(n,5e3)}e.forEach(l=>{l.addEventListener(\"click\",()=>{clearInterval(r),s(parseInt(l.dataset.dot||\"0\")),c()})});c();"],["/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Countdown.astro?astro&type=script&index=0&lang.ts","const f=new Date(\"2026-10-12T18:00:00\").getTime(),o=document.getElementById(\"cd-days\"),s=document.getElementById(\"cd-hours\"),c=document.getElementById(\"cd-minutes\"),d=document.getElementById(\"cd-seconds\");function n(e){return String(e).padStart(2,\"0\")}function r(){const e=Date.now(),t=f-e;if(t<=0){o.textContent=\"0\",s.textContent=\"00\",c.textContent=\"00\",d.textContent=\"00\";return}const a=Math.floor(t/(1e3*60*60*24)),u=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(t%(1e3*60*60)/(1e3*60)),i=Math.floor(t%(1e3*60)/1e3);o.textContent=String(a),s.textContent=n(u),c.textContent=n(m),d.textContent=n(i)}r();setInterval(r,1e3);"],["/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/Songs.astro?astro&type=script&index=0&lang.ts","const d=\"caroYlauti_songs\";function r(){try{return JSON.parse(localStorage.getItem(d)||\"[]\")}catch{return[]}}function l(t){localStorage.setItem(d,JSON.stringify(t))}function a(){const t=r(),e=document.getElementById(\"songs-list\"),n=document.getElementById(\"songs-empty\"),o=document.getElementById(\"songs-count\");if(o.textContent=`(${t.length} ${t.length===1?\"canción\":\"canciones\"})`,t.length===0){e.classList.add(\"hidden\"),n.classList.remove(\"hidden\");return}e.classList.remove(\"hidden\"),n.classList.add(\"hidden\"),e.innerHTML=t.map((s,i)=>`\n      <li class=\"flex items-center justify-between gap-3 px-4 py-3 bg-white border border-wedding-sage/30 group hover:border-wedding-sky/40 transition-colors duration-200\">\n        <div class=\"flex items-center gap-3\">\n          <span class=\"font-sans text-xs text-wedding-navy/30 w-5 text-right\">${i+1}</span>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-4 h-4 text-wedding-sky/60 shrink-0\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3\" />\n          </svg>\n          <span class=\"font-sans text-sm text-wedding-navy\">${s.text}</span>\n        </div>\n        <button\n          data-delete=\"${s.id}\"\n          class=\"text-wedding-navy/20 hover:text-rose-400 transition-colors duration-200 opacity-0 group-hover:opacity-100\"\n          title=\"Eliminar\"\n          aria-label=\"Eliminar canción\"\n        >\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-4 h-4 pointer-events-none\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n          </svg>\n        </button>\n      </li>\n    `).join(\"\"),e.querySelectorAll(\"[data-delete]\").forEach(s=>{s.addEventListener(\"click\",()=>{const i=s.dataset.delete,c=r().filter(g=>g.id!==i);l(c),a()})})}document.getElementById(\"add-song-btn\").addEventListener(\"click\",()=>{const t=document.getElementById(\"song-input\"),e=t.value.trim();if(!e)return;const n=r();n.push({id:Date.now().toString(),text:e,date:new Date().toISOString()}),l(n),t.value=\"\",a()});document.getElementById(\"song-input\").addEventListener(\"keydown\",t=>{t.key===\"Enter\"&&document.getElementById(\"add-song-btn\").click()});document.getElementById(\"export-songs-btn\").addEventListener(\"click\",()=>{const t=r();if(t.length===0)return;const e=t.map((s,i)=>`${i+1}. ${s.text}`).join(`\n`),n=new Blob([`Playlist Caro & Lauti 2026\n${\"─\".repeat(30)}\n\n${e}`],{type:\"text/plain\"}),o=document.createElement(\"a\");o.href=URL.createObjectURL(n),o.download=\"playlist-caro-lauti.txt\",o.click(),URL.revokeObjectURL(o.href)});a();"],["/Users/andrew/Documents/code/casamiento/casandopaginas/src/components/FAQ.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".faq-trigger\").forEach(e=>{e.addEventListener(\"click\",()=>{const s=e.closest(\".faq-item\"),c=s.querySelector(\".faq-answer\"),i=e.querySelector(\".faq-icon\"),a=!c.classList.contains(\"hidden\");document.querySelectorAll(\".faq-item\").forEach(t=>{t!==s&&(t.querySelector(\".faq-answer\").classList.add(\"hidden\"),t.querySelector(\".faq-icon\").classList.remove(\"rotate-180\"),t.querySelector(\".faq-trigger\").setAttribute(\"aria-expanded\",\"false\"))}),c.classList.toggle(\"hidden\",a),i.classList.toggle(\"rotate-180\",!a),e.setAttribute(\"aria-expanded\",String(!a))})});"]],"assets":["/_astro/_slug_.MFyCn_nw.css","/_astro/index.B9KBWu3r.css","/favicon.svg","/_astro/index.astro_astro_type_script_index_1_lang.BnxFQpR9.js","/images/logo-casamiento.jpg","/images/logo-casamiento.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"6gFs+hBFGc9y0GdbPq0aGsJAbs7/JgJeSmqwhqnaB10="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
