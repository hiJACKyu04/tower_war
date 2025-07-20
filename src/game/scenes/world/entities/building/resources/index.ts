import { BUILDING_TILE } from '../const';
import { BuildingAudio, BuildingIcon, BuildingTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(BuildingAudio.BUILD, 'assets/resources/audio/build.mp3');
Assets.AddAudio(BuildingAudio.DAMAGE_1, 'assets/resources/audio/damage_1.mp3');
Assets.AddAudio(BuildingAudio.DAMAGE_2, 'assets/resources/audio/damage_2.mp3');
Assets.AddAudio(BuildingAudio.DEAD, 'assets/resources/audio/dead.mp3');
Assets.AddAudio(BuildingAudio.ELECTRO, 'assets/resources/audio/electro.mp3');
Assets.AddAudio(BuildingAudio.OVER, 'assets/resources/audio/over.mp3');
Assets.AddAudio(BuildingAudio.RELOAD, 'assets/resources/audio/reload.mp3');
Assets.AddAudio(BuildingAudio.REPAIR, 'assets/resources/audio/repair.mp3');
Assets.AddAudio(BuildingAudio.SELECT, 'assets/resources/audio/select.mp3');
Assets.AddAudio(BuildingAudio.UNSELECT, 'assets/resources/audio/unselect.mp3');
Assets.AddAudio(BuildingAudio.UPGRADE, 'assets/resources/audio/upgrade.mp3');

Assets.AddImage(BuildingIcon.ALERT, 'assets/resources/icons/alert.png');
Assets.AddImage(BuildingIcon.CONFIRM, 'assets/resources/icons/confirm.png');
Assets.AddImage(BuildingIcon.CONFIRM_DISABLED, 'assets/resources/icons/confirm_disabled.png');
Assets.AddImage(BuildingIcon.UPGRADE, 'assets/resources/icons/upgrade.png');
Assets.AddImage(BuildingIcon.AMMO, 'assets/resources/icons/params/ammo.png');
Assets.AddImage(BuildingIcon.DAMAGE, 'assets/resources/icons/params/damage.png');
Assets.AddImage(BuildingIcon.DECLINE, 'assets/resources/icons/decline.png');
Assets.AddImage(BuildingIcon.DELAY, 'assets/resources/icons/params/delay.png');
Assets.AddImage(BuildingIcon.FREEZE, 'assets/resources/icons/params/freeze.png');
Assets.AddImage(BuildingIcon.POWER, 'assets/resources/icons/params/power.png');
Assets.AddImage(BuildingIcon.SPEED, 'assets/resources/icons/params/speed.png');

Assets.AddSprite(BuildingTexture.AMMUNITION, 'assets/resources/textures/ammunition.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.BOOSTER, 'assets/resources/textures/booster.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.GENERATOR, 'assets/resources/textures/generator.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.RADAR, 'assets/resources/textures/radar.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.TOWER_ELECTRO, 'assets/resources/textures/tower_electro.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.TOWER_FIRE, 'assets/resources/textures/tower_fire.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.TOWER_FROZEN, 'assets/resources/textures/tower_frozen.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.TOWER_LAZER, 'assets/resources/textures/tower_lazer.png', BUILDING_TILE);
Assets.AddSprite(BuildingTexture.WALL, 'assets/resources/textures/wall.png', BUILDING_TILE);
