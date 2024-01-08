const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";
</style>

<div>hello world</div>
`;

class BaseComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("base-component", BaseComponent);
