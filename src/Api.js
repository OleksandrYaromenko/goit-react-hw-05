import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const options = {
  params: { api_key: "163d81dce1b46d5d7981a65eb3f06948" },
};

export async function seachFilms() {
  const result = await axios.get(
    `3/trending/movie/day?language=en-US`,
    options
  );
  return result.data;
}
export async function getSeachFilmsId(paramentId) {
  const result = await axios.get(
    `3/movie/${paramentId}?language=en-US`,
    options
  );
  return result.data;
}
export async function getSeachFilmsCredits(paramentId) {
  const result = await axios.get(
    `3/movie/${paramentId}/credits?language=en-US`,
    options
  );
  return result.data;
}
export async function getSeachFilmsReviews(paramentId) {
  const result = await axios.get(
    `3/movie/${paramentId}/reviews?language=en-US&page=1`,
    options
  );
  return result.data;
}
