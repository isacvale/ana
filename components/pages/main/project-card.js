const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../variables.css";

  a {
    color: unset;
    text-decoration: none;
  }

  article {
    aspect-ratio: 1 / 1;
    background: var(--color-bg-card);
    box-shadow: var(--shadow);
    cursor: pointer;
    width: 100%;
  }

  article img {
    height: 50%;
    object-fit: cover;
    width: 100%;
  }

  article .card-content {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 50%;
      justify-content: space-between;
      padding: 1.4rem 0.8rem 0.8rem; 1.2rem;
  }

  article .card-content h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }

  article .card-content .meta-text {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0.4rem 0;
  }
</style>

<article>
  <a>
    <img>
    <div class="card-content">
      <h1>Project Title</h1>
      <div>
        <div class="meta-text">Focus: <span data-focus></span></div>
        <div class="meta-text">System: <span data-system></span></div>
      </div>
    </div>
  </a>
</article>
`;

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }

  connectedCallback() {
    const { src, title, focus, system, href } = this.dataset;

    this.shadowRoot.querySelector("img").src = src;
    this.shadowRoot.querySelector("h1").textContent = title;
    this.shadowRoot.querySelector("[data-focus]").textContent = focus;
    this.shadowRoot.querySelector("[data-system]").textContent = system;
    this.shadowRoot.querySelector("a").setAttribute("href", href);
    console.log(this.shadowRoot.querySelector("a"), href);
  }
}

customElements.define("project-card", ProjectCard);
