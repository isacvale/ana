import "../atoms/close-button.js";

const logoPath = "../../assets/smallLogo.png";
const logoDescription = "sharp triangle logo";

const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../variables.css";

  :host {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: var(--z-index-navbar);
  }

  nav {
    align-items: center;
    background: var(--color-transparent);
    display: flex;
    height: 56px;
    justify-content: space-between;
    padding: 0 var(--space-view-padding);
    z-index: var(--z-index-navbar);
    transition: all 0.2s ease-in-out;
  }

  :host([data-is-scrolled="true"]) nav {
    backdrop-filter: blur(10px) grayscale(80%);
    background: linear-gradient(
      180deg,
      var(--color-bg-base-light) -20%,
      var(--color-) 200%
    );
    box-shadow: var(--shadow);
  }
</style>

<nav>
  <slot>site logo</slot>
  <close-button></close-button>
</nav>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("nav-bar", NavBar);
