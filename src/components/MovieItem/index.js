// Write your code here

import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {eachObject} = props
  const {thumbnailUrl, videoUrl} = eachObject

  return (
    <Popup
      trigger={
        <button type="button" className="thumbnail-container">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        </button>
      }
      modal="true"
      className="popup-content"
    >
      {close => (
        <div className="popup-main-container">
          <button
            type="button"
            className="popup-close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="popup-icon" />
          </button>
          <div className="video-player-container">
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
