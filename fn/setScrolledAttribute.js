const setAttribute = (el, onWindowScroll) => () => {
  const isScrolled = onWindowScroll ? window.scrollY > 6 : isScrollTop > 0;
  el.setAttribute("data-is-scrolled", isScrolled ? "true" : "false");
};

const setScrolledAttribute = (selector, { onWindowScroll }) => {
  const el = document.querySelector(selector);
  if (!el) return;

  setAttribute(el, onWindowScroll)();
  if (onWindowScroll)
    document.addEventListener("scroll", setAttribute(el, onWindowScroll));
  else el.addEventListener("scroll", setAttribute(el, onWindowScroll));
};

export default setScrolledAttribute;
