import React from 'react';
import { connect } from 'react-redux';
import { fetchClickTaskAddUpload } from '../Actions/TaskProjectsAction'


const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchClickTaskUpload: (project_id) => dispatch(fetchClickTaskAddUpload(project_id))
})

const AddButtonComponent = ({ dispatchOnFetchClickTaskUpload, project_id }) => {
  const onFetchClickTaskUpload = (event) => {
    dispatchOnFetchClickTaskUpload(event.target.value)
  }

  return (
    <button value={project_id} onClick={onFetchClickTaskUpload}>Add</button>
  )
}

export const AddButton = connect(null, mapDispatchToProps)(AddButtonComponent);
