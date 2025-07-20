import { EFFECT_SIZE } from '../const';
import { EffectAudio, EffectTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(EffectAudio.EXPLOSION, 'assets/resources/audio/explosion.mp3');

Assets.AddSprite(EffectTexture.EXPLOSION, 'assets/resources/textures/explosion.png', EFFECT_SIZE);
Assets.AddSprite(EffectTexture.DAMAGE, 'assets/resources/textures/damage.png', EFFECT_SIZE);
Assets.AddSprite(EffectTexture.SMOKE, 'assets/resources/textures/smoke.png', EFFECT_SIZE);
Assets.AddSprite(EffectTexture.BLOOD, 'assets/resources/textures/blood.png', EFFECT_SIZE);
