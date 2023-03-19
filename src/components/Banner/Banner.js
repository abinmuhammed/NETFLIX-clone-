import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY} from '../Constants/Constants'
import axios from '../../axios' 
import {IMAGEURL} from '../Constants/Constants'



function Banner() {
  const [Movie,SetMovie] = useState()
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
    console.log(Response.data)
    console.log(Response.data.results[0])
    SetMovie(Response.data.results[0])
  })
  
   
  }, [])        
  
  return (
    <div 
    style={{backgroundImage:`url(${Movie ? IMAGEURL+ Movie.backdrop_path:"no image"})`}}
         className='banner'>

            <div className='content' >
                <h1 className='title'>{Movie ? Movie.name: " sorry  "} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner