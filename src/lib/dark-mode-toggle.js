class DarkModeToggle extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        const button = document.createElement('button');
        
        button.setAttribute('id', 'mode-switch')
        button.addEventListener('click', this.toggleDarkMode.bind(this));

        // it's a lot of svg isn't it
        button.innerHTML = `<i class="icon-dark"><svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" fill="none" color="var(--color-light, #ccc)"><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="var(--color-light, #ccc)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"></path></svg></i><i class="icon-light"><svg width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="var(--color-dark, #333)"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="var(--color-dark, #333)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"  fill="var(--color-dark, #333)"></path></svg></i>`

        this.shadowRoot.appendChild(button);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        if (prefersDark || isDarkMode) {
            document.body.classList.add('dark');
            button.classList.add('dark');
        }
        
        const style = document.createElement('style');
        style.textContent = `
            :host {
                position: fixed;
z-index: 9001;
            }
@media screen and (max-width: 1023px) {
:host {
top: 20px;
right: 20px;
}
}
@media screen and (min-width: 1024px) {
:host {
                bottom: 20px;
                left: 20px;
}
}
            #mode-switch {
                background: none;
                border: 0;
                cursor: pointer;
                padding: 0px;
                outline: 0px;
            }
            :host(:not(.no-anim)) .icon-dark {
                animation: 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135) 0s 1 normal none running spin-left;
            }
            :host(:not(.no-anim)) .icon-light {
                animation: 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135) 0s 1 normal none running spin-right;
            }
           .dark .icon-light,  .icon-dark {
                display: none;
            }
           .dark .icon-dark,  .icon-light {
                display: block;
            }
            @keyframes spin-right {
                0% {
                    transform: scale(0) rotate(0deg);
                }
                100% {
                    transform: scale(1) rotate(720deg);
                }
            }
        
            @keyframes spin-left {
                0% {
                    transform: scale(0) rotate(0deg);
                }
                100% {
                    transform: scale(1) rotate(-720deg);
                }
            }
            
        `;

        this.shadowRoot.appendChild(style);
    }

    toggleDarkMode() {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);

        const btn = this.shadowRoot.querySelector('#mode-switch')
        btn.classList.toggle('dark')
    }

    static get observedAttributes() {
        return ['top', 'left', 'bottom', 'right', 'no-anim'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'top':
                this.style.top = newValue || 'auto';
                if (newValue && this.hasAttribute('bottom')) {
                    this.removeAttribute('bottom');
                }
                break;
            case 'left':
                this.style.left = newValue || 'auto';
                if (newValue && this.hasAttribute('right')) {
                    this.removeAttribute('right');
                }
                break;
            case 'bottom':
                this.style.bottom = newValue || 'auto';
                if (newValue) {
                    this.style.top = 'auto';
                }
                break;
            case 'right':
                this.style.right = newValue || 'auto';
                if (newValue) {
                    this.style.left = 'auto';
                }
                break;
            case 'no-anim': 
                console.log("asdfasfa")
                this.classList.add('no-anim');
                break;

            default:
                break;
        }
    }

}

customElements.define('dark-mode-toggle', DarkModeToggle);
