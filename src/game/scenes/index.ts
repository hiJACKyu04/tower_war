import Phaser from 'phaser';

import type { Game } from '..';

export class Scene extends Phaser.Scene {
  readonly game: Game;
}
