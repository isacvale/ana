import "../atoms/social-media.js";
import "../atoms/copy-right.js";

const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";

  div {
    align-items: center;
    display: flex;
    height: 2.45rem;
    justify-content: space-between;
    padding: 0 var(--space-view-padding);
  }
</style>

<div>
  <copy-right></copy-right>
  <social-media></social-media>
</div>
`;

class NavFooter extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("nav-footer", NavFooter);
