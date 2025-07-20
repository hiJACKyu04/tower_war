import { ShotTexture } from '../../types';
import { ShotBallAudio } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(ShotBallAudio.FIRE, 'assets/resources/audio/fire.mp3');
Assets.AddAudio(ShotBallAudio.SIMPLE, 'assets/resources/audio/simple.mp3');
Assets.AddAudio(ShotBallAudio.FROZEN, 'assets/resources/audio/frozen.mp3');

Assets.AddImage(ShotTexture.BALL, 'assets/resources/textures/ball.png');
