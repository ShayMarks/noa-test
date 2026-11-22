/* FRAMELESS LAB — shared header, footer and interactions.
   Edit SITE below to change contact details and social links everywhere. */

const SITE = {
  // TODO: these are the placeholder details from the Wix template — replace with the real ones.
  address: ["1 Example Street", "Leeds LS1 1AA"],
  phone: "0113 496 0000",
  email: "hello@example.com",
  social: {
    Instagram: "#",
    X: "#",
    TikTok: "#",
    LinkedIn: "#",
    Facebook: "#",
  },
  // Optional: URL of a form service (e.g. Formspree). When empty, the contact
  // form opens the visitor's email app addressed to SITE.email.
  formEndpoint: "",
};

const PAGES = [
  ["Home", "index.html"],
  ["Portfolio", "portfolio.html"],
  ["Packages", "packages.html"],
  ["Our Approach", "approach.html"],
  ["Contact", "contact.html"],
];

const ICONS = {
  Instagram: '<svg viewBox="0 0 24 24"><path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.2c-.1-1.5-.4-2.800-1.500-3.800C18.500 3.300 17.200 3 15.700 2.900 14.200 2.800 9.800 2.800 8.300 2.900 6.800 3 5.500 3.300 4.500 4.400 3.400 5.400 3.100 6.700 3 8.200c-.1 1.500-.1 6 0 7.500.1 1.500.4 2.800 1.500 3.800 1 1.100 2.300 1.400 3.800 1.500 1.500.1 5.900.1 7.400 0 1.500-.1 2.800-.4 3.800-1.500 1.100-1 1.400-2.300 1.500-3.800.1-1.500.1-5.900 0-7.500Zm-2 9.100a3.100 3.100 0 0 1-1.700 1.700c-1.200.5-4 .4-5.300.4s-4.100.1-5.300-.4A3.100 3.100 0 0 1 5 17.300c-.5-1.200-.4-4-.4-5.300s-.1-4.100.4-5.300A3.100 3.100 0 0 1 6.700 5c1.200-.5 4-.4 5.300-.4s4.100-.1 5.300.4A3.100 3.100 0 0 1 19 6.700c.5 1.200.4 4 .4 5.300s.1 4.100-.4 5.300Z"/></svg>',
  X: '<svg viewBox="0 0 24 24"><path d="M17.800 3h3l-6.600 7.600L22 21h-6.100l-4.800-6.300L5.600 21h-3l7.100-8.100L2.200 3h6.300l4.300 5.700L17.800 3Zm-1.100 16.200h1.700L7.600 4.700H5.800l10.900 14.500Z"/></svg>',
  TikTok: '<svg viewBox="0 0 24 24"><path d="M16.500 2h-3.200v13.600a2.700 2.700 0 1 1-2.700-2.700c.3 0 .5 0 .8.100V9.700a6 6 0 1 0 5.100 5.900V8.700a7.600 7.600 0 0 0 4.400 1.400V6.900a4.400 4.400 0 0 1-4.400-4.400V2Z"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24"><path d="M6.900 8.800H3.600V20h3.300V8.800ZM5.300 3.500a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.500 13.400c0-3.200-1.700-4.900-4.100-4.900-1.700 0-2.600.9-3.100 1.700V8.800H10V20h3.300v-6.100c0-1.500.6-2.600 2-2.600 1.300 0 1.900 1 1.900 2.600V20h3.300v-6.600Z"/></svg>',
  Facebook: '<svg viewBox="0 0 24 24"><path d="M13.700 21v-8h2.700l.4-3.200h-3.100V7.800c0-.9.3-1.500 1.600-1.500h1.700V3.400c-.3 0-1.300-.1-2.500-.1-2.400 0-4.100 1.500-4.100 4.200v2.300H7.700V13h2.700v8h3.300Z"/></svg>',
};

const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const navLinks = (cls = "") =>
  PAGES.map(([t, h]) => `<a class="${cls}" href="${h}"${h === here ? ' aria-current="page"' : ""}>${t}</a>`).join("");

/* Header is written synchronously (this script sits at the top of <body>) so there is no flash. */
document.documentElement.classList.add("js");
document.currentScript.insertAdjacentHTML(
  "afterend",
  `<header class="site-header">
     <a class="brand" href="index.html" aria-label="FRAMELESS LAB — home"><span class="logo"></span></a>
     <nav class="nav" aria-label="Main">${navLinks()}</nav>
     <button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>
   </header>
   <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">${navLinks()}</nav>`
);

document.addEventListener("DOMContentLoaded", () => {
  /* Footer */
  const social = Object.entries(SITE.social)
    .map(([n, u]) => `<a href="${u}" aria-label="${n}"${u !== "#" ? ' target="_blank" rel="noopener"' : ""}>${ICONS[n]}</a>`)
    .join("");
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="site-footer">
       <a class="brand" href="index.html" aria-label="FRAMELESS LAB — home"><span class="logo"></span></a>
       <div>
         <address>
           <p>${SITE.address.join("<br>")}</p>
           <p><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>
         </address>
         <div class="social">${social}</div>
       </div>
       <div>
         <ul class="footer__nav">${PAGES.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
         <div class="footer__legal">
           <p>Privacy Policy</p>
           <p>Accessibility Statement</p>
           <p>© ${new Date().getFullYear()}. All rights reserved.</p>
         </div>
       </div>
     </footer>`
  );

  /* Header state + mobile menu */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 24);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = document.querySelector(".menu-btn");
  const setMenu = (open) => {
    document.documentElement.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
  };
  menuBtn.addEventListener("click", () => setMenu(!document.documentElement.classList.contains("menu-open")));
  document.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
  matchMedia("(min-width: 721px)").addEventListener("change", () => setMenu(false));

  /* Reveal on scroll */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  initCarousel();
  initLang();
  initForm();
});

const pad = (n) => String(n).padStart(2, "0");
const chevron = (d) => `<svg viewBox="0 0 18 18"><path d="${d === "prev" ? "M11 3 5 9l6 6" : "M7 3l6 6-6 6"}"/></svg>`;

/* Portfolio carousel + lightbox */
function initCarousel() {
  const root = document.querySelector(".carousel");
  if (!root) return;
  const track = root.querySelector(".carousel__track");
  const slides = [...track.children];
  const count = root.parentElement.querySelector(".carousel__count");
  const [prev, next] = ["prev", "next"].map((d) => {
    const b = document.createElement("button");
    b.className = `carousel__btn carousel__btn--${d}`;
    b.type = "button";
    b.setAttribute("aria-label", d === "prev" ? "Previous" : "Next");
    b.innerHTML = chevron(d);
    root.append(b);
    return b;
  });
  const step = () => slides[1].offsetLeft - slides[0].offsetLeft;
  const index = () => Math.min(slides.length - 1, Math.round(track.scrollLeft / step()));
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
    const i = track.scrollLeft >= max ? slides.length - 1 : index();
    count.textContent = `${pad(i + 1)} / ${pad(slides.length)}`;
  };
  prev.onclick = () => track.scrollBy({ left: -step(), behavior: "smooth" });
  next.onclick = () => track.scrollBy({ left: step(), behavior: "smooth" });
  track.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();

  /* Lightbox */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Image viewer");
  lb.innerHTML = `<img alt=""><button class="lb-close" type="button" aria-label="Close"><svg viewBox="0 0 18 18"><path d="M3 3l12 12M15 3 3 15"/></svg></button>
    <button class="lb-prev" type="button" aria-label="Previous">${chevron("prev")}</button>
    <button class="lb-next" type="button" aria-label="Next">${chevron("next")}</button><div class="lb-count"></div>`;
  document.body.append(lb);
  const img = lb.querySelector("img");
  let cur = 0;
  const show = (i) => {
    cur = (i + slides.length) % slides.length;
    const src = slides[cur].querySelector("img");
    img.src = src.src;
    img.alt = src.alt;
    lb.querySelector(".lb-count").textContent = `${pad(cur + 1)} / ${pad(slides.length)}`;
  };
  const close = () => lb.classList.remove("is-open");
  slides.forEach((s, i) => {
    const open = () => (show(i), lb.classList.add("is-open"), lb.querySelector(".lb-close").focus());
    s.addEventListener("click", open);
    s.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), open()));
  });
  lb.querySelector(".lb-close").onclick = close;
  lb.querySelector(".lb-prev").onclick = () => show(cur - 1);
  lb.querySelector(".lb-next").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => e.target === lb && close());
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
}

/* English / Hebrew toggle on the Packages page */
function initLang() {
  const buttons = document.querySelectorAll(".lang button");
  if (!buttons.length) return;
  const set = (lang) => {
    document.querySelectorAll("[data-lang]").forEach((el) => (el.hidden = el.dataset.lang !== lang));
    buttons.forEach((b) => b.setAttribute("aria-pressed", b.dataset.set === lang));
    try { localStorage.setItem("fl-lang", lang); } catch {}
  };
  buttons.forEach((b) => b.addEventListener("click", () => set(b.dataset.set)));
  let saved = new URLSearchParams(location.search).get("lang");
  try { saved = saved || localStorage.getItem("fl-lang"); } catch {}
  set(saved === "he" ? "he" : "en");
}

/* Contact form */
function initForm() {
  const form = document.querySelector(".form");
  if (!form) return;
  const status = form.querySelector(".form__status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [];
    for (const key of new Set(data.keys())) {
      const v = data.getAll(key).filter(Boolean).join(", ");
      if (v) lines.push(`${key}: ${v}`);
    }
    if (SITE.formEndpoint) {
      status.textContent = "Sending…";
      try {
        const r = await fetch(SITE.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!r.ok) throw 0;
        form.reset();
        status.textContent = "Thank you — your brief was sent. We'll be in touch shortly.";
      } catch {
        status.textContent = `Something went wrong. Please email us at ${SITE.email}.`;
      }
    } else {
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Project brief — " + (data.get("Brand") || data.get("First Name")))}&body=${encodeURIComponent(lines.join("\n"))}`;
      status.textContent = "Your email app should open with the brief ready to send.";
    }
  });
}
