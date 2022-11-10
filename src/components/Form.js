import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export const Form = () => {
  return (
    <div>
      <form id="form" onSubmit={onSubmit}>
            <h2>Create New Quiz</h2>
            <input
                maxLength={50}
                onChange={onInputChange}
                id="movieTitle"
                placeholder="Enter a Movie Title"
                name="movieTitle" 
                type="text"
                value={props.form.movieTitle}
            />


            <button>Submit</button>
        </form>
    </div>
  )
}

export default connect(st => st, actionCreators)(Form) //appreviation for map state to props