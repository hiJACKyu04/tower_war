import { ASSISTANT_TILE_SIZE } from '../const';
import { AssistantTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddSprite(AssistantTexture.DEFAULT, 'assets/resources/textures/default.png', ASSISTANT_TILE_SIZE);
Assets.AddSprite(AssistantTexture.FIREBOT, 'assets/resources/textures/firebot.png', ASSISTANT_TILE_SIZE);
Assets.AddSprite(AssistantTexture.LASERBOT, 'assets/resources/textures/laserbot.png', ASSISTANT_TILE_SIZE);
