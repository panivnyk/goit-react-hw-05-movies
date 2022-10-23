import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '520faa847257d57af54017c37ef43fe0';
//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export async function getTrending() {
  try {
    const resTrending = await axios.get(
      `${baseURL}/trending/movie/day?api_key=${API_KEY}`
    );
    return await resTrending.data.results;
  } catch (error) {
    console.log(error);
  }
}
const query = 'cat';
export async function getBySearch(query) {
  try {
    const resSearch = await axios.get(
      `${baseURL}/search/movie?api_key=${API_KEY}&page=1&include_adult=false&query=${query}`
    );
    return await resSearch.data.results;
  } catch (error) {
    console.log(error);
  }
}
console.log(getTrending());
console.log(getBySearch(query));
