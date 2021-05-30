import AddButton from '../AddButton/AddButton'
import classnames from 'classnames/bind'
import styles from './TaskInput.module.scss'
import { ThemeContext } from '../ThemeContext'

const cx = classnames.bind(styles)

const TaskInput = ( {name, description, handleChange, handleClick, project_id} ) => {
    return (
      <div className={cx('task_input_add')}>
        <ThemeContext.Consumer>
          {(theme) => (<div className={cx('inputs')}>
            <div>
              <input className={cx('input', `input-theme-${theme}`)} value={name} onChange={handleChange} placeholder='Task name' name='name' />
            </div>
            <div>
              <input className={cx('input', `input-theme-${theme}`)} value={description} onChange={handleChange} placeholder='Task description' name='description' />
            </div>
          </div>)}
        </ThemeContext.Consumer>
          <AddButton handleClick={handleClick} project_id={project_id} />
      </div>
    )
  }

  export default TaskInput;