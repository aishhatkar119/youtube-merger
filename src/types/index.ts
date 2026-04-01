export interface Subscription {
  channelId: string;
  channelTitle: string;
  channelUrl: string;
}

/** Result of an API call after retries (subscriptions, playlist items, ratings). */
export type ApiResult<T> =
  | { status: 'success'; data: T }
  | { status: 'duplicate' }
  | { status: 'failed'; error: unknown };
