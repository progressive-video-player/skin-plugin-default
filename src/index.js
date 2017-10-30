import ElementClass from './skin';

const name = 'skin-plugin-default';

if (customElements.get(name)) {
  console.log(`Custom element "${name}" already defined`);
} else {
  window.customElements.define(name, ElementClass);
}
