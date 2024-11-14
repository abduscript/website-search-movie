import axios from "axios"

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASEURL

// export const getMovieList = async() => {
//     const movie = await axios.get(`${baseUrl}/movie/original?api_key=${apiKey}`)
//     console.log({ movieList : movie})
//     return;
// }
export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    console.log({ movieList: movie });
    return movie.data.results; // Mengembalikan data movie
}
// export const searchMovie = async(q) => {
//     // const search = await axios.get(q)
//     return;
// }
export const searchMovie = async (q) => {
    const result = await axios.get(`${baseUrl}/search/movie?page=1&api_key=${apiKey}&query=${q}`);
    console.log({ searchResults: result.data });
    return result.data; // Mengembalikan hasil pencarian
}