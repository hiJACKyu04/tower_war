import { ShotTexture } from '../../types';
import { ShotBallAudio } from '../types';

import { Assets } from '~core/assets';

Assets.AddAudio(ShotBallAudio.FIRE, 'assets/fire.mp3');
Assets.AddAudio(ShotBallAudio.SIMPLE, 'assets/simple.mp3');
Assets.AddAudio(ShotBallAudio.FROZEN, 'assets/frozen.mp3');

Assets.AddImage(ShotTexture.BALL, 'assets/resources/textures/ball.png');
