// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesListFiltered} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <Slider {...settings} className="slider-container">
      {moviesListFiltered.map(eachObject => (
        <MovieItem eachObject={eachObject} key={eachObject.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
