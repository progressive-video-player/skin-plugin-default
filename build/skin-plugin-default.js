(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class SkinPlugin extends HTMLElement {
  constructor() {
    // console.log('==> SkinPlugin.constructor');
    super();
    this.parent = null;
  }

  connectedCallback() {
    // console.log('==> SkinPlugin.connectedCallback');
    const parent = this.parent = this.parentNode;
    this.initSkin(parent);
    parent.registerPlugin('skin', this);
  }

  disconnectedCallback() {
    // console.log('==> SkinPlugin.disconnectedCallback');
    const parent = this.parent;
    this.deinitSkin();
    parent.unregisterPlugin('skin', this);
    this.parent = null;
  }

  initSkin(container) {
    console.log(`==> SkinPlugin.initSkin() container: ${container}`);
    const shadowRoot = container.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    shadowRoot.appendChild(div);
  }

  deinitSkin() {
    console.log(`==> SkinPlugin.deinitSkin()`);
  }
}

window.customElements.define('skin-plugin-default', SkinPlugin);

})));
