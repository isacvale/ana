const template = document.createElement("template");
template.innerHTML = `
<style>
    h1 {
        color: red;
    }
</style>
<section>
    <h1><slot name="setTitle">Default title</slot></h1>
    <h2>Default titletitle</ h2>
</section>
`;

class MyTest extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }

  static get observedAttributes() {
    return ["title", "camelCase", "normalified", "data-datified"];
  }

  get title() {
    return this.getAttribute("title");
  }
  set title(value) {
    this.setAttribute("title", value);
  }

  get camelCase() {
    return this.getAttribute("camelCase");
  }
  set camelCase(value) {
    this.setAttribute("camelCase", value);
  }

  get normalified() {
    return this.getAttribute("normalified");
  }
  set normalified(value) {}

  attributeChangedCallback(attribute, oldValue, newValue) {
    console.log({
      attribute,
      oldValue,
      newValue,
    });

    if (attribute === "title") {
      this.shadowRoot.querySelector("h2").innerText = newValue;
    }
  }
}

customElements.define("my-test", MyTest);
