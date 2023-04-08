// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const filteredActionList = moviesList.filter(
    eachObject => eachObject.categoryId === 'ACTION',
  )
  const filteredComedyList = moviesList.filter(
    eachObject => eachObject.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image-prime-video"
      />
      <div className="movies-slider-container-main">
        <div className="action-movies-container">
          <h1 className="action-movies-heading">Action Movies</h1>
          <MoviesSlider moviesListFiltered={filteredActionList} />
        </div>
        <div className="comedy-movies-container">
          <h1 className="comedy-movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesListFiltered={filteredComedyList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
