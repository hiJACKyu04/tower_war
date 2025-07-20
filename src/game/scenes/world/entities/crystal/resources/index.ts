import { CRYSTAL_TILE } from '../const';
import { CrystalAudio, CrystalTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(CrystalAudio.PICKUP, 'assets/resources/audio/pickup.mp3');

Assets.AddSprite(CrystalTexture.CRYSTAL, 'assets/resources/textures/crystal.png', CRYSTAL_TILE);
