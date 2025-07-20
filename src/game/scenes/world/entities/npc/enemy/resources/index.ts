import { ENEMY_SIZE_PARAMS, ENEMY_TEXTURE_SIZE } from '../const';
import { EnemyAudio, EnemyTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(EnemyAudio.ROAR, 'assets/roar.mp3');

addSprite(EnemyTexture.ADHERENT, 'assets/resources/textures/adherent.png');
addSprite(EnemyTexture.DEMON, 'assets/resources/textures/demon.png');
addSprite(EnemyTexture.RISPER, 'assets/resources/textures/risper.png');
addSprite(EnemyTexture.UNDEAD, 'assets/resources/textures/undead.png');
addSprite(EnemyTexture.SPIKE, 'assets/resources/textures/spike.png');
addSprite(EnemyTexture.BERSERK, 'assets/resources/textures/berserk.png');
addSprite(EnemyTexture.EXPLOSIVE, 'assets/resources/textures/explosive.png');
addSprite(EnemyTexture.GHOST, 'assets/resources/textures/ghost.png');
addSprite(EnemyTexture.STRANGER, 'assets/resources/textures/stranger.png');
addSprite(EnemyTexture.TANK, 'assets/resources/textures/tank.png');
addSprite(EnemyTexture.TELEPATH, 'assets/resources/textures/telepath.png');
addSprite(EnemyTexture.TERMER, 'assets/resources/textures/termer.png');
addSprite(EnemyTexture.BOSS, 'assets/resources/textures/boss.png');

function addSprite(texture: EnemyTexture, url: string) {
  Assets.AddSprite(texture, url, ENEMY_SIZE_PARAMS[ENEMY_TEXTURE_SIZE[texture]]);
}

