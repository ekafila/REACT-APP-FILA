import {AddButton} from '../AddButton/AddButton'
import classnames from 'classnames/bind'
import styles from './TaskInput.module.scss'
import { connect } from 'react-redux'
import { handleChange } from '../Actions/TaskProjectsAction';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  task_name: state.tasks_projects.task_name,
  task_description: state.tasks_projects.task_description,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnInputChange: (input) => dispatch(handleChange(input))
})

const TaskAddComponent = ({ task_name, task_description, theme, dispatchOnInputChange, project_id }) => {
  const onInputChange = (event) => {
    dispatchOnInputChange(event.target)
  }

  return (
    <div className={cx('task_input_add')}>
      <div className={cx('inputs')}>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={task_name} onChange={onInputChange} placeholder='Task name' name='task_name' />
          </div>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={task_description} onChange={onInputChange} placeholder='Task Description' name='task_description' />
          </div>
        </div>
        <AddButton project_id={project_id} />
    </div>
  )
}

export const TaskInput = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent);