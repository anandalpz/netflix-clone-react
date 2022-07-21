import React from 'react'
import {useEffect,useState} from 'react'
import instance from './instance'
import requests from './requests'
import './Banner.css'
function Banner() {
    const base_url="https://image.tmdb.org/t/p/original/"
    const [movie,setMovie]=useState([])
    useEffect(() => {
      async function fetchMovie(){
        const request=await instance.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]) 
      }
      fetchMovie();
    }, [])
    console.log("originals",movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"....":str;
    }
  return (
    <header className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            ${base_url}${movie.backdrop_path}
        )`,
        backgroundPosition:"centre"
      }}>
        <div className='banner__contents'>
            <span className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </span>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button> 
                <button className='banner_button'>More Info</button>
            </div>
            <h1 className='banner_description'>
                {truncate(movie?.overview,160)}
            </h1>
        </div>
        <div className='banner-fade'></div>
    </header>
  )
}

export default Banner