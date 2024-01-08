const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classe.css";

  section {
    background: var(--color-bg-base-dark);
    padding: 2.75rem 0;
  }

  h2 {
    color: var(--color-heading);
    font-family: var(--font-family);
    font-size: var(--font-size-heading);
    font-weight: var(--font-weight-heading);
    margin: 1.25rem var(--space-view-padding);
  }

  p {
    color: var(--color-text);
    font-family: var(--font-family-narrow);
    font-size: var(--font-size-copy);
    line-height: var(--line-height-copy);
    margin: 0 var(--space-view-padding);
    text-wrap: balance;
  }

  .button {
    align-items: center;
    background: var(--color-link);
    border: none;
    box-shadow: var(--shadow);
    color: white;
    cursor: pointer;
    display: flex;
    font-family: var(--font-family);
    font-size: var(--font-size-button-mobile);
    font-weight: var(--font-weight-label);
    height: 3.2rem;
    justify-content: center;
    margin: 1.9rem auto 0;
    position: relative;
    text-decoration: inherit;
    width: 15.8rem;
    z-index: 1;
  }

  .button:focus,
  .button:focus-visible {
    border: none;
    outline: none;
  }

  .button::before {
    box-shadow: var(--focus-control);
    content: "";
    bottom: 4px;
    left: 4px;
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: -1;
    opacity: 0;
    transition: all 0.14s ease-in-out;
  }

  .button:focus::before {
    bottom: -4px;
    left: -4px;
    opacity: 1;
    right: -4px;
    top: -4px;
  }

  @media (min-width: 600px) {
    .button {
      font-size: var(--font-size-button-medium);
    }
  }

  .button:hover {
    background: var(--color-bg-button-hover);
  }

  .button:active {
    background: var(--color-bg-button-active);
    box-shadow: var(--shadow-inset);
  }
</style>


<section>
  <h2 class="view-title">Curriculum</h2>
  <p>Please feel free to view and download a copy of my curriculum vitae.</p>
  <a download="Ana Arado - Portfolio" href="assets/files/dummy.pdf" class="button">Download PDF</a>
</section>
`;

class ViewCurriculum extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("view-curriculum", ViewCurriculum);
