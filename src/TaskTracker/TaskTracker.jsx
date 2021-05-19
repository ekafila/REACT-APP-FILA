import React from 'react';
import AddButton from '../AddButton/AddButton';
import classnames from "classnames/bind"

import styles from "./TaskTracker.module.scss"
import { ThemeContext } from "../ThemeContext";

const cx = classnames.bind(styles)


const TaskAdd = ( {name, description, handleChange, handleClick} ) => {

    return (
            <div>
                <div class='taskName'>Task name:</div>
                <div class='taskDesc'>Description:</div>
                <input class='nameInput' value={name} onChange={handleChange} placeholder='Task name' name='name'/>
                <input class='descInput' value={description} onChange={handleChange} placeholder='Describe the task' name='description'/>
                <AddButton handleClick={handleClick}/>
            </div>
        )
    }

    export const nameInput = ({ value, onChange, placeholder }) => (
        <ThemeContext.Consumer>
          {theme => (
            <input
              className={cx("input", `input-theme-${theme}`)}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          )}
        </ThemeContext.Consumer>
      )
export default TaskAdd;

  