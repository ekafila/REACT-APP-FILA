import React from 'react';

import classnames from "classnames/bind"

import styles from "./AddButton.module.scss"
import { ThemeContext } from "../ThemeContext"

const cx = classnames.bind(styles)

const AddButton = ({ handleClick }) => {

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <button 
            className={cx("addButton", `addButton-theme-${theme}`)}
            onClick={handleClick}>Add
          </button>
        )}
    </ThemeContext.Consumer>
    )
  }

export default AddButton;

// import React from "react"
// import classnames from "classnames/bind"

// import styles from "./AddButton.module.scss"
// import { ThemeContext } from "../ThemeContext"

// const cx = classnames.bind(styles)

// export class AddButton extends React.Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <button className={cx("button", `button-theme-${this.context}`)} onClick={this.props.onClick}>Add
//         {this.props.children}
//       </button>
//     )
//   }
// }
