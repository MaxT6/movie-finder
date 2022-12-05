import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export const Card = (props) => {
  console.log("card props", props)

  let showCard = document.querySelector(".movie-card");
  let isShow = true;
  function showMovieCard() {
    if(isShow){
      showCard.style.display = "none";
      isShow = false
    }
  }

  return (
  <div>
    {props.card.Title ? 
     <div>
      <div className='movie-card'>
        <h2>{props.card.Title}</h2>
        <img src={props.card.Poster} alt="poster for slected movie" />
        <p>{props.card.Plot}</p>
      </div>
    </div> : null }
  </div>
  )
}


export default connect(st => st, actionCreators)(Card) //appreviation for map state to props