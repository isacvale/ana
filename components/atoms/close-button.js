import raven from "../../node_modules/@dvo/raven/src/index.js";

const template = document.createElement("template");

const onClick = () => {
  if (raven.store.isPanelOpen) raven.set("isPanelOpen", false);
  else raven.set("isPanelOpen", true);
};

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";

  .menu, .close {
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-in-out;
    translate: 0 -6px;
  }

  :host([data-is_panel_open="false"]) .menu,
  :host(:not([data-is_panel_open])) .menu {
    translate: 0 0;
    opacity: 1;
  }
  :host([data-is_panel_open="true"]) .close {
    translate: 0 0;
    opacity:10;
  }



  button {
    align-items: center;
    aspect-ratio: 1;
    border: none;
    background: var(--color-transparent);
    cursor: pointer;
    display: flex;
    height: 1.875rem;
    justify-content: center;
    position: relative;
  }
</style>

<button>
  <div class="menu">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <g style="fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:bevel;stroke-dasharray:none">
        <path d="M 3,6 H 27" />
        <path d="M 3,24 H 27"/>
        <path d="M 3,15 H 27"/>
      </g>
    </svg>
  </div>
  <div class="close">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <g style="fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:bevel;stroke-dasharray:none">
        <path d="M 3,3 27,27" />
        <path d="M 3,27 27,3" />
      </g>
    </svg>
  </div>
</button>
`;

class CloseButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", onClick);
    this.dataset.foo = "bar";
    raven.subscribe("isPanelOpen", (x) => {
      this.dataset.is_panel_open = String(x);
    });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", onClick);
  }
}

customElements.define("close-button", CloseButton);
