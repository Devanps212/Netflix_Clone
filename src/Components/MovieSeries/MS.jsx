import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl, API_KEY} from ''
import './MS.css'

function Movies(props)
{
  const [series, setSeries] = useState([])
  const [url, setUrl] = useState('')
  useEffect(()=>{
     axios.get(props.url).then((response)=>
     {
      console.log(response.data)
      setSeries(response.data.results)
     }).catch((error)=>{
      alert(error)
     })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  const movieHandle = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0)
    {
      setUrl(response.data.results[0])
    }
    else
    {
      console.log("Trailer not availabale")
    }
    })
  }
  return(
    <div className='row'>
      <h2 style={{marginLeft:'18px'}}>{props.title}</h2>
      <div className='posters'>
        {
          series.map((serieses, index)=>(
          <img onClick={()=>movieHandle(serieses.id)} className={props.isSmall?'smallImage':'images'} key={index} src={`${imageUrl+serieses.backdrop_path}`} alt='series'/>
          ))
        }
      </div>
      {url? <Youtube opts ={opts} videoId={url.key}/>: console.log("trailer no available")}
    </div>
  )
}

Movies.propTypes={
  title:PropTypes.string,
  isSmall:PropTypes.bool,
  url:PropTypes.string
}
export default Movies


