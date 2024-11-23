(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = u(e);
    fetch(e.href, n);
  }
})();
const a = document.getElementById("menu-icon"),
  y = document.getElementById("menu-bar");
a.addEventListener("click", () => {
  y.classList.toggle("hidden");
});
const l = document.getElementById("container-home"),
  i = document.getElementById("container-about"),
  s = document.getElementById("container-skills"),
  d = document.getElementById("container-contact");
document.addEventListener("DOMContentLoaded", () => {
  const o = () => {
    (l.style.display = "none"),
      (i.style.display = "none"),
      (s.style.display = "none"),
      (d.style.display = "none");
  };
  document.querySelector(".home").addEventListener("click", (t) => {
    t.preventDefault(), o(), (l.style.display = "block");
  }),
    document.querySelector(".about").addEventListener("click", (t) => {
      t.preventDefault(), o(), (i.style.display = "block");
    }),
    document.querySelector(".skill").addEventListener("click", (t) => {
      t.preventDefault(), o(), (s.style.display = "flex");
    }),
    document.querySelector(".contact").addEventListener("click", (t) => {
      t.preventDefault(), o(), (d.style.display = "flex");
    });
});
