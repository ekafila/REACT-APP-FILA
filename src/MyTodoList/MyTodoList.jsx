import React from 'react';
import List from '../List/List';
import {TaskInput} from '../TaskInput/TaskInput';
import classnames from "classnames/bind";
import ListProjects from '../List/ListProjects';
import {ProjectTasks} from '../Projects/ProjectsTasks';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import styles from '../MyTodoList/MyTodoList.module.scss';
import {ProjectInput} from '../ProjectInput/ProjectInput';
import { handleThemeChange } from '../Actions/ThemeAction';
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasksById: state.tasks_projects.tasksById,
  projectsById: state.tasks_projects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const MyTodoListComponent = ({ tasksById, projectsById, theme, dispatchOnThemeChange }) => {
  const onThemeChange = (event) => {
    dispatchOnThemeChange(event.target.value)
  }
  return (
    <BrowserRouter>
      <div className={cx('page', `page-theme-${theme}`)}>
        <div className={cx('radios', `radios-theme-${theme}`)}>
          <div>
            <input
              type='radio'
              name='theme'
              id='light'
              value='light'
              checked={theme === 'light'}
              onChange={onThemeChange}
            />
            <label htmlFor='light'>Light</label>
          </div>

          <div>
            <input
              type='radio'
              name='theme'
              id='dark'
              value='dark'
              checked={theme === 'dark'}
              onChange={onThemeChange}
            />
            <label htmlFor='light'>Dark</label>
          </div>
        </div>
        <div className={cx('projects_and_tasks')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1>Wonderful List</h1>
              <h1>
                <Link className={cx('header', `header-theme-${theme}`)} to='/'>Home</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${theme}`)}>Projects List:</h1>
              <div>
                <ProjectInput/>
              </div>
              <ListProjects projectsById={projectsById} />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header', `header-theme-${theme}`)}>Tasks List</h1>
                  <div className={cx('new_task')}>
                    <TaskInput project_id={'no_project'} />
                  </div>
                  <List tasksById={tasksById} />
              </div>
            </Route>
            <Route path='/projects/:projectId/'>
                <ProjectTasks />
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}


export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(MyTodoListComponent);

// class MyTodoList extends React.Component {
//   state = normalizeState(projects)

//   handleThemeChange = event => {
//     this.setState({ theme: event.target.value })
//   }
    

//   handleChange = (event) => {
//     const { value, name } = event.currentTarget

//     this.setState({ [name]: value })
//   }

//   handleClick = (event) => {
//     const { value: project_id } = event.currentTarget
//     const new_id = Object.keys(this.state.tasksById).length + 1
//     const newTask = {
//       id: new_id,
//       name: this.state.name,
//       description: this.state.description,
//       completed: false
//     }

//     console.log(typeof project_id)
//     console.log(project_id)

//     if (project_id === 'no_project') {
//       this.setState(state => {
//         const newTasksById = { ...state.tasksById }
//         newTasksById[new_id] = newTask
//         return {
//           tasksById: newTasksById
//         }
//       })
//     } else {
//       this.setState(state => {
//         const newTasksById = { ...state.tasksById }
//         newTasksById[new_id] = newTask
//         const newProjectsById = { ...state.projectsById }
//         newProjectsById[project_id] = { ...newProjectsById[project_id] }
//         newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]

//         return {
//           tasksById: newTasksById,
//           projectsById: newProjectsById
//         }
//       })
//     }
//   }

//   handleClickCompleted = (event) => {
//     let { value: task_id } = event.currentTarget
//     this.setState(state => {
//       const newTasks = {
//         ...state.tasksById
//       }
//       newTasks[task_id] = {...newTasks[task_id], completed: true}

//       return {
//         tasksById: newTasks
//       }
//     })
//   }
       
//   handleClickProject = () => {
//     const newProject = {
//       id: this.state.projects.length + 1,
//       name: this.state.name,
//     }
//     const newProjects = [...this.state.projects, newProject]

//     this.setState(state => {
//       return {
//         projects: newProjects
//       }
//     })
//   }
