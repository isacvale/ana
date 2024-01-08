const logoPath = "../../assets/smallLogo.png";
const logoDescription = "sharp triangle logo";

const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../variables.css";

  a {
    display: flex;
    cursor: pointer;
    justify-content: center;
    width: calc(0.6 * var(--space-menu-bar));
  }

  img {
    height: calc(2.2 * var(--space-base));
  }
</style>

<a href="#top">
  <img src="${logoPath}" alt=${logoDescription} aria-label=${logoDescription} >
</a>
`;

class NavLogo extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("nav-logo", NavLogo);
