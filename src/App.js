// import { useEffect } from 'react';
// import React, { useState } from 'react';
// import './App.css';
// import {getMovieList, searchMovie} from "./api"

// const App = () => {
// const [popularMovies, setPopularMovies] = useState([])

//   useEffect(()=>{
//     getMovieList().then((result)=>{
//       setPopularMovies(result)
//     })
//   },[])


//   const PopularMovieList = () => {
//     return popularMovies.map((movie, i) => {
//       return (
//         <div className="Movie-wrapper" key={i}>
//           <div className="Movie-title">{movie.title}</div>
//           <img
//             className="Movie-image"
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  // Menambahkan URL lengkap
//             alt={movie.title}  // Menambahkan alt text untuk aksesibilitas
//           />
//           <div className="Movie-date">{movie.release_date}</div>
//           <div className="Movie-rate">{movie.vote_average}</div>
//         </div>
//       )
//     })
//   }


//   const search = (q) =>{
//     console.log({q})
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>WEBSITE FILM BEN GEMINI OX</h1>
//         <input 
//         placeholder="find your discover..." 
//         className="Movie-search"
//         onChange={({ target })=> search(target.value)}
//         />
//         <div className="Movie-container">
//           <popularMovieList/>
//         </div>
//       </header>
//     </div>
//   );
// }
// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import { getMovieList, searchMovie } from "./api";
import PopularMovieList from './PopularMovieList';  // Pastikan diimpor dengan benar

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async(q) => {
    if(q.length > 3){
      const query = await searchMovie(q);
      setPopularMovies(query.results)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WEBSITE FILM BEN GEMINI OX</h1>
        <input
          placeholder="Find your discover..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList popularMovies={popularMovies} />  {/* Pass popularMovies sebagai props */}
        </div>
      </header>
    </div>
  );
};

export default App;


