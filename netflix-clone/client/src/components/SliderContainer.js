import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end)=>{
        return movies.slice(start, end)
    }

  return (
   <SliderWrapper>
      <MovieSlider data={getMoviesBetween(0,10)} title="For You" />
      <MovieSlider data={getMoviesBetween(10,20)} title="Trending now" />
      <MovieSlider data={getMoviesBetween(20,30)} title="Only On Netflix " />
      <MovieSlider data={getMoviesBetween(30,40)} title="Kids And Family" />
      <MovieSlider data={getMoviesBetween(40,50)} title="Romance" />
      <MovieSlider data={getMoviesBetween(50,60)} title="Suspenseful TV Dramas" />
      <MovieSlider data={getMoviesBetween(60,70)} title="Thriller Movies" />
   </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`

export default SliderContainer