import ElementClass from './skin';

if (!customElements) {
  throw new Error('Custom Elements not supported');
}

const name = 'skin-plugin-default';

if (customElements.get(name)) {
  console.log(`Custom element "${name}" already defined`);
} else {
  customElements.define(name, ElementClass);
}
