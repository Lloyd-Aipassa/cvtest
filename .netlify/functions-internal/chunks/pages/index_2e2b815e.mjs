import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_83225dd4.mjs';
import { $ as $$MainLayout } from './_slug__3b23ed9f.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                            *//* empty css                            */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch(
    "https://skyhighrecruitment.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await response.json();
  return renderTemplate`<!-- ---
import MainLayout from "../layouts/MainLayout.astro";

---

<MainLayout title="home">
	<h1>hi from main</h1>


</MainLayout> -->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "home" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>hi from main</h1><ul>${posts.map((post) => renderTemplate`<a${addAttribute(post.slug, "href")}><li><div class="img-container">${renderTemplate`<img${addAttribute(
    post._embedded["wp:featuredmedia"]["0"].source_url,
    "src"
  )} alt="">`}${post.title.rendered}</div></li></a>`)}</ul>` })}`;
}, "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/index.astro", void 0);

const $$file = "C:/Users/lloyd/OneDrive/Bureaublad/Astro/cvtest/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
