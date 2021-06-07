import React from 'react';

import classnames from "classnames/bind"

import styles from "./AddButton.module.scss"
import { ThemeContext } from "../ThemeContext"

const cx = classnames.bind(styles)

const AddButton = ({ handleClick }) => {

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <button className={cx("addButton", `addButton-theme-${theme}`)} onClick={handleClick}>Add</button>
        )}
    </ThemeContext.Consumer>
    )
  }

export default AddButton;
