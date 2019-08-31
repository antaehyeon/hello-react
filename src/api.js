import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "8fdf985d69ddae89b7bce0b75cbd30be",
    language: "ko-KR"
  }
});

export const moviesAPI = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
        api_key: "8fdf985d69ddae89b7bce0b75cbd30be"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvAPI = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
        api_key: "8fdf985d69ddae89b7bce0b75cbd30be"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "8fdf985d69ddae89b7bce0b75cbd30be",
        query: encodeURIComponent(term)
      }
    })
};

export default api;
