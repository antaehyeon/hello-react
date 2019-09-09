import axios from "axios";

const commonAPIParams = {
  params: {
    api_key: "8fdf985d69ddae89b7bce0b75cbd30be",
    language: "ko-KR"
  }
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesAPI = {
  nowPlaying: () => api.get("movie/now_playing", commonAPIParams),
  upcoming: () => api.get("movie/upcoming", commonAPIParams),
  popular: () => api.get("movie/popular", commonAPIParams),
  movieDetail: id => api.get(`movie/${id}`, { params: { ...commonAPIParams.params, append_to_response: "videos" } }),
  search: term =>
    api.get("search/movie", {
      params: {
        api_key: "8fdf985d69ddae89b7bce0b75cbd30be",
        query: encodeURIComponent(term)
      }
    })
};

export const tvAPI = {
  topRated: () => api.get("tv/top_rated", commonAPIParams),
  popular: () => api.get("tv/popular", commonAPIParams),
  airingToday: () => api.get("tv/airing_today", commonAPIParams),
  showDetail: id => api.get(`tv/${id}`, { params: { ...commonAPIParams.params, append_to_response: "videos" } }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "8fdf985d69ddae89b7bce0b75cbd30be",
        query: encodeURIComponent(term)
      }
    })
};

export default api;
