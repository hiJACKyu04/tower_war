import pkg from '../package.json';

import { Game } from './game';

import { checkScreenOrientation } from '~core/screen';

// Add error handling for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

try {
  window.GAME = new Game();
  console.log('Game initialized successfully');
} catch (error) {
  console.error('Failed to initialize game:', error);
}

checkScreenOrientation();

console.log([
  `Created by ${pkg.author.name} / ${pkg.author.url}`,
  `Build v${pkg.version}`,
  `Open-Source at ${pkg.repository.url.replace('git+', '')}`,
].join('\n'));
