import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, u as unescapeHTML } from '../astro_83225dd4.mjs';
import 'clsx';
/* empty css                            *//* empty css                            */
const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<h2>footer</h2>`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header><a href="/">Home</a><a href="about">About</a><a href="/blog">Blog</a></header>`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  return renderTemplate`<html lang="nl"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch(
    "https://skyhighrecruitment.com/wp-json/wp/v2/posts?acf_format=standard"
  );
  const posts = await response.json();
  return posts.map((post) => ({
    params: {
      slug: post.slug
    },
    props: {
      post
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { korte_titel } = Astro2.props.post.acf;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": korte_titel, "data-astro-cid-yvbahnfj": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hero-container" data-astro-cid-yvbahnfj><img${addAttribute(Astro2.props.post.acf.hero_afbeeldingHero, "src")} alt="" data-astro-cid-yvbahnfj></div><span data-astro-cid-yvbahnfj>${unescapeHTML(Astro2.props.post.content.rendered)}</span>` })}`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _slug_ as _ };
