import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie= (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        console.log(response.data.results);
      }
      
    })
    

  }
  return (
    <div className='row'>
        <h2 className='rowTitle'>{props.title}</h2>
        <div className="posters">
        {
          movies.map((obj)=>{
            return <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
          })

        }
        </div>

       {urlId && <Youtube videoId={urlId.key} opts={opts}  />}

      
    </div>
  )
}

export default RowPost
