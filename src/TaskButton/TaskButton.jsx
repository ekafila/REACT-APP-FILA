import React from 'react';
import { fetchClickTaskCompletedUpload } from '../Actions/TaskProjectsAction'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchClickTaskCompletedUpload: (completed) => dispatch(fetchClickTaskCompletedUpload(completed))
})

const TaskButtonComponent = ({ project_id, task_id, dispatchOnFetchClickTaskCompletedUpload }) => {
  const onFetchClickTaskCompletedUpload = (event) => {
    dispatchOnFetchClickTaskCompletedUpload(event.target)
  }

  return (
    <button data-project-id={project_id} data-task-id={task_id} onClick={onFetchClickTaskCompletedUpload}>Success!</button>
  )
}
  
  export const TaskButton = connect(null, mapDispatchToProps)(TaskButtonComponent);