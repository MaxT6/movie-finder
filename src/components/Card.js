import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export const Card = (props) => {
  console.log("card props", props)


  return (
  <div>
    {props.card.Title ? 
     <div className='movie-container'>
      <div className='movie-card'>
        <h2 className='movie-title'>{props.card.Title}</h2>
        <div className='poster-raiting-container'>
          <div className='movie-poster-container'>
            <img className='movie-poster' src={props.card.Poster} alt="poster for slected movie" />
          </div>
           <div className='movie-rating-container'>
          <div className='movie-rating'>
            {`Rating:
          ${props.card.Metascore}`}
          </div>
        </div>
        </div>
        
       
        <div className='movie-plot-container'>
          <p className='movie-plot'>{props.card.Plot}</p>
        </div>
      </div>
    </div> : null }
  </div>
  )
}


export default connect(st => st, actionCreators)(Card) //appreviation for map state to props