const template = document.createElement("template");
template.innerHTML = `
<style>
    .layout {
        gap: 1rem;
        padding: 42px;
    }
</style>
<section>
    <div class='layout'>
        <slot name="header">uno</slot>
        <slot name="content">dos</slot>
    </div>
</section>
`;

class MyLayout extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("my-layout", MyLayout);
