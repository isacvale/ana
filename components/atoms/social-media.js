const logoBehance = "../../assets/logos/Behance.png";
const logoLinkedIn = "../../assets/logos/LinkedIn.png";
const logoGitHub = "../../assets/logos/GitHub.png";

const template = document.createElement("template");
template.innerHTML = `
<style>
  @import "../variables.css";
 
  nav {
    display: flex;
    gap: 0.7rem;
  }

  a {
    align-items: center;
    aspect-ratio: 1;
    display: flex;
    height: 1.7rem;
    justify-content: center;
  }
</style>

<nav>
    <a href="https://linkedin.com">
        <img src="${logoLinkedIn}" alt="LinkedIn"/>
    </a>
    <a href="https://behance.com">
        <img src="${logoBehance}" alt="Behance"/>
    </a>
    <a href="https://github.com">
        <img src="${logoGitHub}" alt="GitHub"/>
    </a>
</nav>
`;

class SocialMedia extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("social-media", SocialMedia);
