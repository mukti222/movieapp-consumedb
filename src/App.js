import { getMovieList, searchMovie} from './api';
import './App.css';
import React, {useState, useEffect} from 'react'

const App = () => {
const [getPopularMovies, setPopularMovies] = useState([])

useEffect(() => {
    getMovieList().then((result) => {//result nya dari api.js
      setPopularMovies(result)
    })
  }, [])
//langkah 1 buat fungsi app dan search didalam nya
//langkah 2 buat fungsi untuk consume api di api.js
//langkah 3 impor api.js ke app > gunakan useEffect
//langkah 4 membuat variabel Popularmovie => isinya getPopularmovie parameter(movie,i)  div movie
//langkah 5 buat fungsi search di app.js dan ubah fungsi search
const PopularMovieList = () => {
  //buat array baru utk ditampilkan
  return getPopularMovies.map((movie, i) =>{
    return (
          <div className='Movie-wrapper' key={i}>
            <div className='Movie-title'>{movie.title}</div>
            <img className='Movie-image'
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
            
            <div className='Movie-date'> {movie.release_date}</div>
            <div className='Movie-rate'> {movie.vote_average}</div>
          </div>
    )
  })
}

  const search = async (q) => {
    const query = await searchMovie(q)
    setPopularMovies(query.results)
    console.log({ query: query });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MovieApp Data by mukti</h1>
        <div><input
        placeholder="cari film..." 
        className="Movie-search"
        onChange={({target}) => search(target.value)}//utk tahu value yg diganti
        
        />
        <button className='searchbutton'>mukti</button>
        </div>
        <div className='Movie-container'>
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
