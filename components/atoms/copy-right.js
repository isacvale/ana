const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";

  small {
    font-family: var(--font-family);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-label);
  }
</style>

<div><small>&copy; 2021 - Ana Arado</small></div>
`;

class CopyRight extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("copy-right", CopyRight);
