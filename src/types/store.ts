// Define the shape of a shortened URL
export interface ShortenedUrl {
  originalUrl: string;
  shortenedUrl: string;
}

// Define the URL state
export interface UrlState {
  urlShortenerList: ShortenedUrl[];
}

// Define the root state type
export interface RootState {
  url: UrlState;
}

// Define the response type from the API
export interface UrlShortenResponse {
  result_url: string;
}
