import { PLAYER_TILE_SIZE } from '../const';
import { PlayerAudio, PlayerSkillIcon, PlayerSuperskillIcon, PlayerTexture } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(PlayerAudio.DAMAGE_1, 'assets/resources/audio/damage_1.mp3');
Assets.AddAudio(PlayerAudio.DAMAGE_2, 'assets/resources/audio/damage_2.mp3');
Assets.AddAudio(PlayerAudio.DAMAGE_3, 'assets/resources/audio/damage_3.mp3');
Assets.AddAudio(PlayerAudio.DEAD, 'assets/resources/audio/dead.mp3');
Assets.AddAudio(PlayerAudio.SUPERSKILL, 'assets/resources/audio/superskill.mp3');
Assets.AddAudio(PlayerAudio.UPGRADE, 'assets/resources/audio/upgrade.mp3');
Assets.AddAudio(PlayerAudio.WALK, 'assets/resources/audio/walk.mp3');

Assets.AddImage(PlayerTexture.SUPERSKILL, 'assets/resources/textures/superskill.png');
Assets.AddImage(PlayerSkillIcon.ATTACK_DAMAGE, 'assets/resources/icons/skills/attack_damage.png');
Assets.AddImage(PlayerSkillIcon.ATTACK_DISTANCE, 'assets/resources/icons/skills/attack_distance.png');
Assets.AddImage(PlayerSkillIcon.ATTACK_SPEED, 'assets/resources/icons/skills/attack_speed.png');
Assets.AddImage(PlayerSkillIcon.BUILD_SPEED, 'assets/resources/icons/skills/build_speed.png');
Assets.AddImage(PlayerSkillIcon.MAX_HEALTH, 'assets/resources/icons/skills/max_health.png');
Assets.AddImage(PlayerSkillIcon.SPEED, 'assets/resources/icons/skills/speed.png');
Assets.AddImage(PlayerSkillIcon.STAMINA, 'assets/resources/icons/skills/stamina.png');
Assets.AddImage(PlayerSuperskillIcon.FIRE, 'assets/resources/icons/superskills/fire.png');
Assets.AddImage(PlayerSuperskillIcon.FROST, 'assets/resources/icons/superskills/frost.png');
Assets.AddImage(PlayerSuperskillIcon.INVISIBLE, 'assets/resources/icons/superskills/invisible.png');
Assets.AddImage(PlayerSuperskillIcon.RAGE, 'assets/resources/icons/superskills/rage.png');
Assets.AddImage(PlayerSuperskillIcon.SHIELD, 'assets/resources/icons/superskills/shield.png');

Assets.AddSprite(PlayerTexture.PLAYER, 'assets/resources/textures/player.png', PLAYER_TILE_SIZE);
