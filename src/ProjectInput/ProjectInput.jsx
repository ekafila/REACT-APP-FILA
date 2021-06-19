import AddButton from '../AddButton/AddButton'
import classnames from 'classnames/bind'
import styles from './ProjectInput.module.scss'
import { ThemeContext } from '../ThemeContext'

const cx = classnames.bind(styles)

const ProjectInput = ( {name, handleChange, handleClick} ) => {
    return (
      <div className={cx('task_input_add')}>
        <ThemeContext.Consumer>
          {(theme) => (<div className={cx('inputs')}>
            <div>
              <input className={cx('input', `input-theme-${theme}`)} value={name} onChange={handleChange} placeholder='Project name' name='name' />
            </div>
          </div>)}
        </ThemeContext.Consumer>
          <AddButton handleClick={handleClick} />
      </div>
    )
  }

  export default ProjectInput;