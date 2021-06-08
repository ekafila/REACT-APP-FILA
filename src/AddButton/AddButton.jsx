import React from 'react';
import { connect } from 'react-redux';
import {handleClick} from '../Actions/TaskProjectsAction'


const mapDispatchToProps = (dispatch) => ({
  dispatchOnClickTaskAdd: (project_id) => dispatch(handleClick(project_id))
})

const AddButtonComponent = ({ dispatchOnClickTaskAdd, project_id }) => {
  const onClickTaskAdd = (event) => {
    dispatchOnClickTaskAdd(event.target.value)
  }
  return (
    <button value={project_id} onClick={onClickTaskAdd}>Add</button>
  )
}

export const AddButton = connect(null, mapDispatchToProps)(AddButtonComponent);
