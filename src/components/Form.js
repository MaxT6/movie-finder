import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";
import { Button } from '@mui/material';

export const Form = (props) => {
  console.log("The props", props)

 console.log("PROPS.FORM:", props.form.movieTitle)

    const onInputChange = evt => {
        props.form.movieTitle = evt.target.value
        props.inputChange(props.form.movieTitle)
        console.log("props.form.movieTitle", props.form.movieTitle)
    }

   

    const onSubmit = evt => {
        evt.preventDefault();
        props.fetchMovie(props.form.movieTitle)
     
       
    }
  return (
    <div>
      <form id="form" onSubmit={onSubmit}>
            <h2 className='header'>Search For A Movie</h2>
            <input
                maxLength={50}
                onChange={onInputChange}
                id="movieTitle"
                placeholder="Enter a Movie Title"
                name="movieTitle" 
                type="text"
                value={props.form.movieTitle}
            />
            {/* <Button>
              Submit
            </Button> */}
            <button className='button'>Submit</button>
        </form>
    </div>
  )
}

export default connect(st => st, actionCreators)(Form) //appreviation for map state to props