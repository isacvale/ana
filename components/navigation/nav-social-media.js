import "../atoms/social-media.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../variables.css";

  :host {
    bottom: 2rem;
    position: absolute;
  }
</style>

<social-media></social-media>
`;

class NavSocialMedia extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("nav-social-media", NavSocialMedia);
