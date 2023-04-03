import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {  API_KEY, imageUrl } from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data);
      
      setMovie(response.data.results[1])
    })
  
    
  }, [])
  
  return (
    
    <div>
      
     
      <div className='banner' style={{backgroundImage:`url( ${movie ? imageUrl+movie.backdrop_path : ""})`}} >
       
        <div className='content'>
            <h1 className='title'>{movie ?movie.name:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h3 className='description'>{movie ? movie.overview:""}</h3>
        </div>
        <div className="fade"></div>


      </div>
    </div>
  )
}

export default Banner
