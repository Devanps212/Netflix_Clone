import { useEffect, useState } from 'react'
import {imageUrl} from '../../constants/constants'
import {originals} from '../../url'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState() 
  useEffect(()=>
  {
    axios.get(`${originals}`).then((response)=>
    {
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div className='Banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}}>
      <div className='Content'>
         <h1 className='Title'>{movie ? movie.title : ""}</h1>
         <div className="Banner_Buttons">
             <button className="button">Play</button>
             <button className="button">My List</button>
         </div>
         <h1 className="description">
          {movie? movie.overview: ""}
         </h1>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Banner
