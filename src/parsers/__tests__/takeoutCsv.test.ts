import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { parseSubscriptions, parsePlaylists, parseLikedVideos } from '../takeoutCsv.js';

describe('takeoutCsv parsers', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'yt-merge-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('parseSubscriptions reads Channel Id and title aliases', () => {
    mkdirSync(join(root, 'subscriptions'), { recursive: true });
    writeFileSync(
      join(root, 'subscriptions', 'subscriptions.csv'),
      'Channel Id,Channel Title,Channel Url\nUCabc,My Channel,https://youtube.com/channel/UCabc\n'
    );
    const subs = parseSubscriptions(root);
    expect(subs).toHaveLength(1);
    expect(subs[0].channelId).toBe('UCabc');
    expect(subs[0].channelTitle).toBe('My Channel');
  });

  it('parsePlaylists skips liked and watch-later files', () => {
    const playlistsDir = join(root, 'playlists');
    mkdirSync(playlistsDir, { recursive: true });
    const header = 'x\nx\nx\n';
    const csvBody = 'Video Id\nvid1\n';
    writeFileSync(join(playlistsDir, 'My PL.csv'), header + csvBody);
    writeFileSync(join(playlistsDir, 'liked videos.csv'), header + 'Video Id\nv99\n');
    writeFileSync(join(playlistsDir, 'watch-later.csv'), header + 'Video Id\nv98\n');

    const map = parsePlaylists(root);
    expect(map.size).toBe(1);
    expect(map.get('My PL')).toEqual(['vid1']);
  });

  it('parseLikedVideos finds liked csv and reads from_line 4', () => {
    const playlistsDir = join(root, 'playlists');
    mkdirSync(playlistsDir, { recursive: true });
    const content = 'line1\nline2\nline3\nVideo Id\nlike1\nlike2\n';
    writeFileSync(join(playlistsDir, 'Liked videos.csv'), content);

    const ids = parseLikedVideos(root);
    expect(ids).toEqual(['like1', 'like2']);
  });
});
