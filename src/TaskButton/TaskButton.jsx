import React from 'react';
import {handleClickCompleted} from '../Actions/TaskProjectsAction'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    dispatchOnClickTaskCompleted: (task_id) => dispatch(handleClickCompleted(task_id))
  })

  const TaskButtonComponent = ({ task_id, dispatchOnClickTaskCompleted }) => {
    const onClickTaskCompleted = (event) => {
      dispatchOnClickTaskCompleted(event.target.value)
    }
  
      return (
        <button value={task_id} onClick={onClickTaskCompleted}>Success!</button>
      )
    }
  
  export const TaskButton = connect(null, mapDispatchToProps)(TaskButtonComponent);