// Define the first web component
class CustomComponent1 extends HTMLElement {
    constructor() {
        super();

    }
}

customElements.define('custom-component-1', CustomComponent1);

// Define the second web component
class CustomComponent2 extends HTMLElement {
    constructor() {
        super();
        // Your component logic here
    }
}

customElements.define('custom-component-2', CustomComponent2);