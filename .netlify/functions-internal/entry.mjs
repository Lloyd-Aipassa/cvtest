import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ab6ff6ce.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_83225dd4.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_08b3b9c4.mjs');
const _page1  = () => import('./chunks/index_a98e9d8b.mjs');
const _page2  = () => import('./chunks/about_3d5dd7a3.mjs');
const _page3  = () => import('./chunks/blog_c6d9f0d0.mjs');
const _page4  = () => import('./chunks/_slug__c88bde22.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/blog.astro", _page3],["src/pages/[slug].astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
