const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";

  section {
    background:
      linear-gradient(180deg,
        var(--color-transparent),
        var(--color-transparent) 68%, 
        var(--color-bg-base-light) 68%,
        var(--color-bg-base-light)
    ), linear-gradient(160deg,
        var(--color-bg-base-dark),
        var(--color-bg-base-dark) 33%,
        white 33%,
        white
    );
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 2.75rem;
    position: relative;
  }

  ::slotted(h2) {
    margin: 1.25rem var(--space-view-padding);
    font-family: var(--font-family);
    font-size: var(--font-size-heading);
    font-weight: var(--font-weight-heading);
  }

  ::slotted(p) {
    color: var(--color-text);
    font-family: var(--font-family-narrow);
    font-size: var(--font-size-copy);
    line-height: var(--line-height-copy);
    margin: 0 var(--space-view-padding);
    text-wrap: balance;
  }

  ::slotted(p) {
    margin-bottom: 5.3rem;
  }

  ::slotted(.projects-wrapper) {
    display: grid;
    gap: var(--space-view-padding);
    // grid-auto-columns: minmax(40%, 250px);
    // grid-auto-rows: 1fr;
    // grid-template-columns: repeat(auto-fit, minmax(1fr, 120px));
    grid-auto-columns: 1fr;
    padding: var(--space-view-padding);

    project-card {
      border: 1px solid blue;
    }
  }
</style>

<section>
  <slot name="title">Portfolio</slot>
  <slot name="intro">Intro</slot>
  <slot name="projects">Intro</slot>
</section>
`;

class ViewPortfolio extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("view-portfolio", ViewPortfolio);
