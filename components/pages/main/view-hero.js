import "../../navigation/nav-social-media.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../../../variables.css";

  section {
    align-items: center;
    background:
      linear-gradient(160deg,
        var(--color-transparent),
        var(--color-transparent) 68%, 
        var(--color-bg-base-dark) 68%,
        var(--color-bg-base-dark)
    ), linear-gradient(200deg,
        var(--color-bg-base-light),
        var(--color-bg-base-light) 33%,
        white 33%,
        white
    );
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding-top: var(--space-menu-bar);
    position: relative;
  }

  ::slotted(p) {
    color: var(--color-text);
    font-family: var(--font-family);
    font-size: var(--font-size-hero);
    font-weight: 600;
    line-height: 135%;
    margin: 0 auto;
    max-width: 80%;
    text-align: center;
    text-wrap: balance;
  }
</style>

<section>
  <slot>HERO VIEW</slot>
  <nav-social-media></nav-social-media>
</section>
`;

class ViewHero extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("view-hero", ViewHero);
