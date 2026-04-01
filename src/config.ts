/**
 * Paths and flags for YouTube Takeout → API migration.
 * Edit takeoutPath to point at your unzipped Takeout folder
 * (e.g. .../Takeout/YouTube and YouTube Music).
 */
export const CONFIG = {
  credentialsPath: './credentials.json',
  tokenPath: './token.json',
  takeoutPath: './Takeout/YouTube and YouTube Music',
  migrate: {
    subscriptions: true,
    playlists: true,
    likedVideos: true,
  },
  rateLimitDelay: 500,
} as const;
