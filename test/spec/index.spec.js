import '../../src/index';
import '../../core/src/index';

describe('skin-plugin-default', () => {
  describe('JS interface', () => {
    beforeEach(() => {
      const player = document.createElement('progressive-video-player');
      const skin = document.createElement('skin-plugin-default');
      player.appendChild(skin);
      document.body.appendChild(player);
    });

    afterEach(() => {
      const player = document.querySelector('progressive-video-player');
      document.body.removeChild(player);
    });

    it('should initialize/deinitialize skin', () => {
      const player = document.querySelector('progressive-video-player');
      const skin = document.querySelector('skin-plugin-default');
      expect(player.plugins.skin.size).toBe(1);
      player.removeChild(skin);
      expect(player.plugins.skin.size).toBe(0);
    });
  });

  describe('HTML interface', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <progressive-video-player src="http://xxx.com">
          <skin-plugin-default></skin-plugin-default>
        </progressive-video-player>
      `;
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should initialize/deinitialize skin', () => {
      const player = document.querySelector('progressive-video-player');
      expect(player.plugins.skin.size).toBe(1);
      player.innerHTML = '';
      expect(player.plugins.skin.size).toBe(0);
    });
  });
});
