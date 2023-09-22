import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_83225dd4.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"async function o(){(await(await fetch(\"https://skyhighrecruitment.com/wp-json/wp/v2/posts?acf_format=standard\")).json()).forEach(s=>{console.log(s)})}o();\n"}],"styles":[{"type":"inline","content":"[data-astro-cid-kh7btl4r]{margin:0;padding:0;box-sizing:border-box}ul[data-astro-cid-kh7btl4r]{list-style-type:none}\n*{margin:0;padding:0;box-sizing:border-box}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const s=await fetch(\"https://skyhighrecruitment.com/wp-json/wp/v2/posts?_embed\"),o=await s.json();console.log(o);\n"}],"styles":[{"type":"inline","content":"ul[data-astro-cid-ijnerlr2]{max-width:1000px;display:flex;flex-wrap:wrap;gap:20px;margin:0 auto}li[data-astro-cid-ijnerlr2]{display:flex;flex-direction:column;max-width:400px;margin-bottom:20px}.img-container[data-astro-cid-ijnerlr2]{max-width:400px;height:266px}img[data-astro-cid-ijnerlr2]{width:100%;height:100%;object-fit:cover}\n*{margin:0;padding:0;box-sizing:border-box}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-yvbahnfj]{margin:0;padding:0;box-sizing:border-box}.hero-container[data-astro-cid-yvbahnfj] img[data-astro-cid-yvbahnfj]{width:100%}\n*{margin:0;padding:0;box-sizing:border-box}\n"}],"routeData":{"route":"/[slug]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_c2d1cfe8.mjs","/src/pages/blog.astro":"chunks/pages/blog_9ed59ec6.mjs","/src/pages/index.astro":"chunks/pages/index_2e2b815e.mjs","\u0000@astrojs-manifest":"manifest_ab6ff6ce.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_08b3b9c4.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a98e9d8b.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_3d5dd7a3.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_c6d9f0d0.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"chunks/_slug__c88bde22.mjs","C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_77b93ca1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.2240fa02.js","/astro/hoisted.js?q=1":"_astro/hoisted.e5d4d232.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_slug_.6df824b5.css","/_astro/_slug_.25f2eb76.css","/_astro/about.9af92a17.css","/_astro/blog.446f0d24.css","/favicon.svg"]});

export { manifest };
