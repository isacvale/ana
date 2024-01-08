const template = document.createElement("template");
template.innerHTML = `
<style>
    h1 {
        color: red;
    }
</style>
<section>
    <h2>Second test</ h2>
</section>
`;

class MySecond extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }

  static get observedAttributes() {
    return ["data-one", "data-two", "data-three", "data-four"];
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    console.log({
      attribute,
      oldValue,
      newValue,
    });
  }
}

customElements.define("my-second", MySecond);
