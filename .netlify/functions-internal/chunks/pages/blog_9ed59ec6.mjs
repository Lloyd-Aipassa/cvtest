import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_83225dd4.mjs';
import { $ as $$MainLayout } from './_slug__3b23ed9f.mjs';
/* empty css                          */import 'clsx';
import 'html-escaper';
/* empty css                            *//* empty css                            */
const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const response = await fetch(
    "https://skyhighrecruitment.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await response.json();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "home", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-ijnerlr2>hi from main</h1><ul data-astro-cid-ijnerlr2>${posts.map((post) => renderTemplate`<a${addAttribute(post.slug, "href")} data-astro-cid-ijnerlr2><li data-astro-cid-ijnerlr2><div class="img-container" data-astro-cid-ijnerlr2>${renderTemplate`<img${addAttribute(
    post._embedded["wp:featuredmedia"]["0"].source_url,
    "src"
  )} alt="" data-astro-cid-ijnerlr2>`}${post.title.rendered}</div></li></a>`)}</ul>` })}`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/blog.astro", void 0);

const $$file = "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
