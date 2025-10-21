import { createOptimizedPicture } from '../../scripts/aem.js';

function createFullImageBanner(elm) {
  const fullImageBanner = document.createElement('div');
  fullImageBanner.className = 'full-image-banner-image';
  fullImageBanner.appendChild(createOptimizedPicture(elm.querySelector('picture img').src, elm.querySelector('picture img').alt, false, [{ width: '750' }]));
  return fullImageBanner;
}

function createForegroundContentBox(elm) {
  const foregroundContentBox = document.createElement('div');
  foregroundContentBox.className = 'foreground-content-box';
  foregroundContentBox.appendChild(elm);
  elm.querySelector(':scope > div').classList.add('foreground-content-box__content');
  return foregroundContentBox;
}

export default function decorate(block) {
  const elms = [...block.children];
  const bannerImage = createFullImageBanner(elms[0]);
  const contentBox = createForegroundContentBox(elms[1]);
  block.textContent = '';
  block.appendChild(bannerImage);
  block.appendChild(contentBox);
  return block;
}
