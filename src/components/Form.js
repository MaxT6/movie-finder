import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export const Form = () => {
  return (
    <div>Form</div>
  )
}

export default connect(st => st, actionCreators)(Form) //appreviation for map state to props