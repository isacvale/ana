const template = document.createElement("template");

template.innerHTML = `
<style>
  @import "../../../variables.css";
  @import "../../../classes.css";

  svg, div, .icon-group {
    overflow: visible;
  }

  div {
    background: pink;
    height: 30px;
    width: 30px;
  }

  .icon-group {
    animation-name: anim-icon-group-rotate;
    animation-duration: 800ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 50% 50%;
  }

  @keyframes anim-icon-group-rotate {
     0% {
        transform: rotate(0deg)
    }
     62.5% {
        transform: rotate(90deg)
    }
     100% {
        transform: rotate(90deg)
    }
  }

  /** Top line animation **/

  .top-line {
    aanimation-name: anim-top-translate, anim-top-rotate, anim-top-scale;
    animation-duration: 800ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes anim-top-translate {
     0% {
        transform: translate(15,5.437527)
    }
     62.5% {
        transform: translate(15,15)
    }
     100% {
        transform: translate(15,15)
    }
  }

  @keyframes anim-top-rotate {
     0% {
        transform: rotate(0deg)
    }
     62.5% {
        transform: rotate(-45deg)
    }
     100% {
        transform: rotate(-45deg)
    }
  }

  @keyframes anim-top-scale {
     0% {
        transform: scale(9.35,1)
    }
     62.5% {
        transform: scale(4,1)
    }
     100% {
        transform: scale(12,1)
    }
  }

  /** Middle line animation **/

  .middle-line {
    /* animation: anim-middle-scale 800ms linear infinite alternate forwards; */
  }

  @keyframes anim-middle-scale {
     0% {
        transform: translate(15px,15.385655px) scale(9.351977,1)
    }
     1.25% {
        transform: translate(15px,15.385655px) scale(9.351977,1)
    }
     62.5% {
        transform: translate(15px,15.385655px) scale(0,1)
    }
     100% {
        transform: translate(15px,15.385655px) scale(0,1)
    }
  }

  /** Bottom line animation **/

   .bottom-line {
    /* animation-name: anim-bottom-translate, anim-bottom-rotate, anim-bottom-scale; */
    animation-duration: 800ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes anim-bottom-translate {
     0% {
        transform: translate(15px,24.562471px)
    }
     62.5% {
        transform: translate(15px,15.385655px)
    }
     100% {
        transform: translate(15px,15.385655px)
    }
  }
  
  @keyframes anim-bottom-rotate {
     0% {
        transform: rotate(0deg)
    }
     62.5% {
        transform: rotate(45deg)
    }
     100% {
        transform: rotate(45deg)
    }
  }
  
  @keyframes anim-bottom-scale {
     0% {
        transform: scale(9.351977,1)
    }
     62.5% {
        transform: scale(4,1)
    }
     100% {
        transform: scale(12,1)
    }
  }

</style>

<div>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <g class="icon-group" transform="rotate(0)">
  
      <g class="top-line" transform="translate(15, 5.437527) scale(9.35,1)">
        <line x1="-1.5" y1="0" x2="1.5" y2="0" fill="none" stroke="orange" stroke-width="2"/>
      </g>

      <g class="middle-line" transform="translate(15, 15.385655) scale(9.35,1)">
        <line x1="-1.5" y1="0" x2="1.5" y2="0" fill="none" stroke="blue" stroke-width="2"/>
      </g>

      <g class="bottom-line" transform="translate(15, 24.562471) scale(9.35,1)">
        <line x1="-1.5" y1="0" x2="1.5" y2="0"  fill="none" stroke="red" stroke-width="2"/>
      </g>
      
    </g>
  </svg>
</div>
`;

class CloseButtonAnim extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define("close-button-anim", CloseButtonAnim);
