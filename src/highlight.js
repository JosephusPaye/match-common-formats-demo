// @ts-check
import { highlightBlock } from 'highlight.js';

export const highlight = {
  mounted(el, { value }) {
    const codeEl = el.querySelector('code');

    if (codeEl) {
      codeEl.textContent = value;
      highlightBlock(codeEl);
    }
  },

  updated(el, { value }) {
    const codeEl = el.querySelector('code');

    if (codeEl) {
      codeEl.textContent = value;
      highlightBlock(codeEl);
    }
  },
};
