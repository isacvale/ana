const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";

  section {
    margin-top: 2.75rem;
    padding-bottom: 0.75rem;
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

  a {
    color: var(--color-link);
    font-weight: 600;
  }

  form {
    --spacing: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    margin: var(--spacing) var(--space-view-padding);
  }

  form label {
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
    font-size: var(--font-size-label);
    font-weight: var(--font-weight-label);
    position: relative;
  }

  /* Default handling of label */

  form label span.label {
    font-size: 1rem;
    position: absolute;
    top: -1.2rem;
    transition: opacity 0.2s ease-in-out, translate 0.2s ease-in-out;
  }

  /* Progressive enhancement: label positioning */
  form label:has(:is(input, textarea):placeholder-shown) span.label {
    opacity: 0;
    translate: 0 0.5rem;
  }

  form label:has(:is(input, textarea):not(:placeholder-shown)) span.label {
    opacity: 1;
    translate: 0 0;
  }

  form label:has(:is(input, textarea):invalid) span.label {
    opacity: 0;
    translate: 0 0.5rem;
  }

  /* Progressive enhancement: invalid message */

  form label span.invalid-message {
    color: var(--color-danger);
    font-size: 1rem;
    font-weight: 500;
    opacity: 0;
    position: absolute;
    top: -1.3rem;
    translate: 0 0.5rem;
    transition: opacity 0.2s ease-in-out, translate 0.2s ease-in-out;
  }

  form label:has(:is(input, textarea):not(:placeholder-shown):invalid) span.invalid-message {
    translate: 0 0;
    opacity: 1;
  }

  form label :is(input:invalid, textarea:invalid):not(:placeholder-shown, :active) {
    box-shadow: inset 0 0 0 3px var(--color-danger);
  }

  /* End of Progressive enhancement: invalid message */

  input, textarea {
    background: var(--color-bg-input);
    border: none;
    border-radius: 0;
    box-shadow: var(--shadow-inset);
    font-family: var(--font-family);
    font-size: var(--font-size-input);
    font-weight: 500;
    line-height: var(--line-height-copy);
    padding: 1.2rem 0.9rem;
  }

  input:focus, textarea:focus {
    outline: 2px solid black;
  }

  form button[type="submit"] {
    background: var(--color-bg-button);
    border: none;
    box-shadow: var(--shadow);
    color: white;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: var(--font-size-button-mobile);
    font-weight: var(--font-weight-label);
    height: 3.2rem;
    margin: 0 auto;
    position: relative;
    width: 15.8rem;
    z-index: 1;
  }

  form button[type="submit"]:focus,
  form button[type="submit"]:focus-visible {
    border: none;
    outline: none;
  }

  form button[type="submit"]::before {
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

  form button[type="submit"]:focus::before {
    bottom: -4px;
    left: -4px;
    opacity: 1;
    right: -4px;
    top: -4px;
  }

  @media (min-width: 600px) {
    form button[type="submit"] {
      font-size: var(--font-size-button-medium);
    }
  }

  form button[type="submit"]:hover {
    background: var(--color-bg-button-hover);
  }

  form button[type="submit"]:active {
    background: var(--color-bg-button-active);
    box-shadow: var(--shadow-inset);
  }

</style>

<section>
  <h2>Contact</h2>
  <p>You can reach me through any of my social medias, this contact form, or by sending me an email to <a class="copy-link" href="mailto:me@arado.com">me@arado.com</a>.</p>
  <form>
    <label>
      <span class="label">Email</span>
      <span class="invalid-message">Ops, this email does not seem valid.</span>
      <input
        name="email"
        placeholder="Please enter your email address"
        required
        type="email"
      >
    </label>
    <label>
      <span class="label">Subject</span>
      <input
        name="subject"
        placeholder="Please enter the Subject"
        required
        type="text"
      >
    </label>
    <label>
      <span class="label">Message</span>
      <textarea
        name="message"
        placeholder="Please write the message"
        required
        rows="6"
        type="email"
      ></textarea>
    </label>

    <button type="submit">Send Message</ button
  </form>

</section>
`;

class ViewContact extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("view-contact", ViewContact);
