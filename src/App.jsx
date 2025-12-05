import { useState,useEffect } from 'react'

import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com/?apiKey=76949c48' 

function App() {

  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearch] = useState('')

  useEffect(()=>{
    searchMovies('Batman')
  },[])

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
console.log(movies)
  return(
    <div className='app'>
        <h1>PatMovies</h1>
        <div className="search">
          <input placeholder='Search for movies' value={searchTerm} 
          onChange={(e)=>setSearch(e.target.value)}/>
          <img src = {SearchIcon} alt='search' onClick={()=>searchMovies(searchTerm)}/>
        </div>
        {
          movies?.length > 0?(
            <div className='container'>
              {movies.map((movie)=>
                (<MovieCard movie={movie}/>)
              )}
            </div>
          ):(
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }
    </div>
  )
}

export default App
