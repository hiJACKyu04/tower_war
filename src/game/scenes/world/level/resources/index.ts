import { LEVEL_MAP_TILE, LEVEL_SCENERY_TILE } from '../const';
import { LevelSceneryTexture, LevelTilesetTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddSprite(LevelTilesetTexture.EARTH, 'assets/resources/textures/earth/tiles.png', LEVEL_MAP_TILE);
Assets.AddSprite(LevelTilesetTexture.MARS, 'assets/resources/textures/mars/tiles.png', LEVEL_MAP_TILE);
Assets.AddSprite(LevelTilesetTexture.MOON, 'assets/resources/textures/moon/tiles.png', LEVEL_MAP_TILE);

Assets.AddSprite(LevelSceneryTexture.EARTH, 'assets/resources/textures/earth/scenery.png', LEVEL_SCENERY_TILE);
Assets.AddSprite(LevelSceneryTexture.MARS, 'assets/resources/textures/mars/scenery.png', LEVEL_SCENERY_TILE);
Assets.AddSprite(LevelSceneryTexture.MOON, 'assets/resources/textures/moon/scenery.png', LEVEL_SCENERY_TILE);
