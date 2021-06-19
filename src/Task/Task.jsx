import React from 'react';
import {TaskButton} from '../TaskButton/TaskButton';
import { connect } from 'react-redux';
import {handleClickCompleted} from '../Actions/TaskProjectsAction'

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const TaskComponent = ({id, name, description, completed}) => {
  completed ='Status: ' + completed

    return (
      <div>
        <div>ID: {id}</div>
        <div>Task name: {name}</div>
        <div>Description: {description}</div>
        <div>{completed}</div>
        <TaskButton task_id={id} task_completed={completed} handleClickCompleted={handleClickCompleted} />
      </div>
       )
      }


export const Task = connect(mapStateToProps)(TaskComponent);