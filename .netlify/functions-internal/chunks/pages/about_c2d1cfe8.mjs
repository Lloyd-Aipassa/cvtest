import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../astro_83225dd4.mjs';
import { $ as $$MainLayout } from './_slug__3b23ed9f.mjs';
/* empty css                           */import 'clsx';
import 'html-escaper';
/* empty css                            *//* empty css                            */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const response = await fetch(
    "https://skyhighrecruitment.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await response.json();
  const response2 = await fetch(
    "https://skyhighrecruitment.com/wp-json/wp/v2/posts?acf_format=standard"
  );
  const images = await response2.json();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "test", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<ul data-astro-cid-kh7btl4r>${images.map((Image) => renderTemplate`<li data-astro-cid-kh7btl4r>${renderTemplate`<img${addAttribute(
    Image.acf.hero_afbeeldingHero,
    "src"
  )} alt="" data-astro-cid-kh7btl4r>`}</li>`)}</ul><ul data-astro-cid-kh7btl4r>${posts.map((post) => renderTemplate`<li data-astro-cid-kh7btl4r>${renderTemplate`<img${addAttribute(post._embedded["wp:featuredmedia"]["0"].source_url, "src")} alt="" data-astro-cid-kh7btl4r>`}</li>`)}</ul><ul data-astro-cid-kh7btl4r>${posts.map((post) => renderTemplate`<li data-astro-cid-kh7btl4r>${unescapeHTML(post.slug)}</li>`)}</ul><ul data-astro-cid-kh7btl4r>${posts.map((post) => renderTemplate`<li data-astro-cid-kh7btl4r>${unescapeHTML(post.title.rendered)}</li>`)}</ul><ul data-astro-cid-kh7btl4r>${posts.map((post) => renderTemplate`<li data-astro-cid-kh7btl4r>${unescapeHTML(post.content.rendered)}</li>`)}</ul>` })}`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/about.astro", void 0);

const $$file = "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
