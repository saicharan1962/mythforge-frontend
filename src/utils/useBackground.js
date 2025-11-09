// src/utils/useBackground.js
import parchmentBg from '../assets/parchment-bg.jpg';

export const applyParchmentBackground = () => {
  document.body.style.background = `url(${parchmentBg}) center/cover no-repeat fixed`;
  document.body.style.backgroundAttachment = 'fixed';
};