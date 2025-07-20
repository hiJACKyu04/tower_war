import { Scene } from '..';

import { Assets } from '~core/assets';
import { CONTROL_KEY } from '~core/controls/const';
import { Storage } from '~core/storage';
import { GameScene, GameState } from '~game/types';
import { MenuPage } from '~scene/menu/types';

export class SystemScene extends Scene {
  constructor() {
    super(GameScene.SYSTEM);
  }

  public async preload() {
    console.log('Starting preload...');
    console.log('Assets.Files count:', Assets.Files.length);
    
    this.load.on('progress', (value: number) => {
      const percentage = Math.round(value * 100);
      console.log(`Loading progress: ${percentage}%`);
      SystemScene.SetLoadingStatus(`LOADING\n${percentage}%`);
    });

    this.load.on('complete', () => {
      console.log('All assets loaded successfully');
    });

    this.load.on('loaderror', (file: any) => {
      console.error('Asset load error:', file.key, file.url);
    });

    this.load.addPack([{
      files: Assets.Files,
    }]);

    Assets.Clear();

    console.log('Starting font loading...');
    try {
      await Promise.all([
        Assets.ImportFontFace('PixelLabel', 'pixel_label.ttf'),
        Assets.ImportFontFace('PixelText', 'pixel_text.ttf'),
      ]);
      console.log('Fonts loaded successfully');
    } catch (error) {
      console.error('Font loading error:', error);
    }
  }

  public async create() {
    SystemScene.SetLoadingStatus('LOADING\nDONE');

    await Storage.Register()
      .then(() => Storage.LoadSaves());

    this.scene.launch(GameScene.MENU, {
      defaultPage: MenuPage.NEW_GAME,
    });
    this.scene.bringToTop();

    SystemScene.RemoveLoading();

    if (!this.game.isDesktop()) {
      this.input.addPointer(1);
    }

    this.input.keyboard?.on(CONTROL_KEY.PAUSE, () => {
      if (this.game.isPaused) {
        // System pause
        return;
      }

      switch (this.game.state) {
        case GameState.FINISHED: {
          this.game.stopGame();
          break;
        }
        case GameState.PAUSED: {
          this.game.resumeGame();
          break;
        }
        case GameState.STARTED: {
          this.game.pauseGame();
          break;
        }
      }
    });
  }

  private static SetLoadingStatus(text: string) {
    const status = document.getElementById('loading-status');
    if (status) {
      status.innerText = text;
    }
  }

  private static RemoveLoading() {
    const overlay = document.getElementById('loading');
    if (overlay) {
      overlay.remove();
    }
  }
}
