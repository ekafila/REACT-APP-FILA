import {ProjectAddButton} from '../AddButton/ProjectAddButton'
import classnames from 'classnames/bind'
import styles from './ProjectInput.module.scss'
import { connect } from 'react-redux'
import { handleChange } from '../Actions/TaskProjectsAction'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  project_name: state.tasks_projects.project_name
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnInputChange: (input) => dispatch(handleChange(input))
})

const ProjectAddComponent = ({ project_name, dispatchOnInputChange }) => {
  const onInputChange = (event) => {
      dispatchOnInputChange(event.target)
  }

  return (
      <div className={cx('task_input_add')}>
          <div>
              <input className={cx('input')} value={project_name} onChange={onInputChange} placeholder='Project name' name='project_name' />
          </div>
          <div>
              <ProjectAddButton />
          </div>    
      </div>
  )
}

export const ProjectInput = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent);