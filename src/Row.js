import React, { useState, useEffect } from 'react'
import axios from "./axios";
import './Row.css';
//컴포넌트 파일은 파일명 대문자로

//포스터이미지 url
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    
    //하나의 snippet
    useEffect(()=>{
        // 한번만 돌면 다시는 안돈다 []이거 쓰면
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //http://api.themoviedb.org/3/trending/all/week?api_key={API_KEY}&language=en-US 
            //이런식으로 가져옴
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
        //여기에 위에서 get한 걸 꼭 넣어줘야함

        console.log(movies);


  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
        {/* several row_posters */}
        {movies.map(movie => (
            <img 
            className="row_poster" 
            src={`${base_url}${movie.poster_path}`} alt="{movie.name}"/>
        ))}

        </div>
    </div>
  )
}

export default Row