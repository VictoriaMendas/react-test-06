import axios from "axios";

const API_KEY = "1091b85cfb1d620c2ad1642a2ab3f60a";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkxYjg1Y2ZiMWQ2MjBjMmFkMTY0MmEyYWIzZjYwYSIsIm5iZiI6MTcyOTY5MjI2MC41NjA5MDgsInN1YiI6IjY2YmNjOTEzZjRmNDljMmZmMGUxZTM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qj9DbPleYCTNh4w9v0Y_e-EsqqNn02Xkq1DrqAu-8JU",
};
//
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkxYjg1Y2ZiMWQ2MjBjMmFkMTY0MmEyYWIzZjYwYSIsIm5iZiI6MTcyOTY5MjI5MS43NDg5MSwic3ViIjoiNjZiY2M5MTNmNGY0OWMyZmYwZTFlMzY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RwMbaMAjLkv7-4BRbM_vVm1auZxrkwl1x2FEzNM-IJI
export const fetchTredingMovie = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data;
};
export const fetchMovieByQuery = async (query) => {
  const response = await axios.get("/search/movie/", {
    params: { query: query },
  });
  console.log(response.data);
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movies/${movieId}`);
  return response.data;
};

export const fetchMoviCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}credits`);

  return response.data;
};
export const fetchMovieReview = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}review`);
  return response.data;
};
