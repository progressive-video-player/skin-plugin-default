import '../../src/index';
import '../../core/src/index';

describe('player', () => {
  it('should initialize/deinitialize skin (JS)', () => {
    const player = document.createElement('video-player');
    const skin = document.createElement('skin-plugin-default');
    player.appendChild(skin);
    expect(player.plugins.skin.size).toBe(0);
    document.body.appendChild(player);
    expect(player.plugins.skin.size).toBe(1);
    player.removeChild(skin);
    expect(player.plugins.skin.size).toBe(0);
    document.body.removeChild(player);
    expect(player.plugins.skin.size).toBe(0);
  });

  it('should initialize/deinitialize skin (HTML)', () => {
    const htmlTextPlayer = '<video-player></video-player>';
    const htmlTextSkin = '<skin-plugin-default></skin-plugin-default>';
    document.body.innerHTML = htmlTextPlayer;
    const player = document.querySelector('video-player');
    expect(player.plugins.skin.size).toBe(0);
    player.innerHTML = htmlTextSkin;
    expect(player.plugins.skin.size).toBe(1);
    player.innerHTML = '';
    expect(player.plugins.skin.size).toBe(0);
    document.body.innerHTML = '';
    expect(player.plugins.skin.size).toBe(0);
  });

  it('should initialize/deinitialize skin 2 (JS)', () => {
    const player = document.createElement('video-player');
    const skin = document.createElement('skin-plugin-default');
    player.appendChild(skin);
    expect(player.plugins.skin.size).toBe(0);
    document.body.appendChild(player);
    expect(player.plugins.skin.size).toBe(1);
    document.body.removeChild(player);
    expect(player.plugins.skin.size).toBe(0);
  });

  it('should initialize/deinitialize skin 2 (HTML)', () => {
    const htmlTextPlayer = '<video-player></video-player>';
    const htmlTextSkin = '<skin-plugin-default></skin-plugin-default>';
    document.body.innerHTML = htmlTextPlayer;
    const player = document.querySelector('video-player');
    expect(player.plugins.skin.size).toBe(0);
    player.innerHTML = htmlTextSkin;
    expect(player.plugins.skin.size).toBe(1);
    document.body.innerHTML = '';
    expect(player.plugins.skin.size).toBe(0);
  });
});
