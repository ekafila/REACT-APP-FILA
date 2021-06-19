import React from 'react';
import List from '../List/List';
import TaskInput from '../TaskInput/TaskInput';
import classnames from "classnames/bind";
import ListProjects from '../List/ListProjects'
import ProjectTasks from '../Projects/ProjectsTasks'
import { DEFAULT_THEME, ThemeContext } from '../ThemeContext';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styles from '../MyTodoList/MyTodoList.module.scss';
import ProjectInput from '../ProjectInput/ProjectInput';

const cx = classnames.bind(styles)

const normalizeState = (projects) => {
  const normalizeBy = (key) => {
    return (data, item) => {
      data[item[key]] = item
      return data
    }
  }

  const normalizedTasks = projects.map(project => project.tasks).flat().reduce(normalizeBy('id'), {})

  const normalizedProjects = projects.map(project => ({
    ...project,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce(normalizeBy('id'), {})

  const normalizedState = {
    projectsById: normalizedProjects,
    tasksById: normalizedTasks,
    name: '',
    description: '',
    theme: DEFAULT_THEME
  }

  return normalizedState
}

const projects = [
  {
    id: '1',
    name: 'School',
    tasks: [{ id: 1, name: 'Visit lecture', description: 'Read materials', completed: false },
    { id: 2, name: 'Homework', description: 'Make React App', completed: true },
    { id: 4, name: 'School', description: 'Make a presentation', completed: true }
    ]
  },
  {
    id: '2',
    name: 'Household',
    tasks: [{ id: 3, name: 'Dinner', description: 'Buy products', completed: false },
    { id: 6, name: 'B-Day party', description: 'Find a present', completed: false }
    ]
  },
  {
    id: '3',
    name: 'Additional lessons',
    tasks: [{ id: 5, name: 'Driving', description: 'Call the teacher', completed: true }]
  }
]


class MyTodoList extends React.Component {
    state = normalizeState(projects)

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }
    

  handleChange = (event) => {
    const { value, name } = event.currentTarget

    this.setState({ [name]: value })
  }

  handleClick = (event) => {
    const { value: project_id } = event.currentTarget
    const new_id = Object.keys(this.state.tasksById).length + 1
    const newTask = {
      id: new_id,
      name: this.state.name,
      description: this.state.description,
      completed: false
    }

    console.log(typeof project_id)
    console.log(project_id)

    if (project_id === 'no_project') {
      this.setState(state => {
        const newTasksById = { ...state.tasksById }
        newTasksById[new_id] = newTask
        return {
          tasksById: newTasksById
        }
      })
    } else {
      this.setState(state => {
        const newTasksById = { ...state.tasksById }
        newTasksById[new_id] = newTask
        const newProjectsById = { ...state.projectsById }
        newProjectsById[project_id] = { ...newProjectsById[project_id] }
        newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]

        return {
          tasksById: newTasksById,
          projectsById: newProjectsById
        }
      })
    }
  }

  handleClickCompleted = (event) => {
    let { value: task_id } = event.currentTarget
    this.setState(state => {
      const newTasks = {
        ...state.tasksById
      }
      newTasks[task_id] = {...newTasks[task_id], completed: true}

      return {
        tasksById: newTasks
      }
    })
  }
       
  handleClickProject = () => {
    const newProject = {
      id: this.state.projects.length + 1,
      name: this.state.name,
    }
    const newProjects = [...this.state.projects, newProject]

    this.setState(state => {
      return {
        projects: newProjects
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className={cx('page', `page-theme-${this.state.theme}`)}>
          <div className={cx('radios', `radios-theme-${this.state.theme}`)}>
            <div>
              <input
                type='radio'
                name='theme'
                id='light'
                value='light'
                checked={this.state.theme === 'light'}
                onChange={this.handleThemeChange}
              />
              <label htmlFor='light'>Light</label>
            </div>

            <div>
            <input
                type='radio'
                name='theme'
                id='dark'
                value='dark'
                checked={this.state.theme === 'dark'}
                onChange={this.handleThemeChange}
              />
              <label htmlFor='light'>Dark</label>
            </div>
          </div>
          <div className={cx('projects_and_tasks')}>
            <Route path='/'>
              <div className={cx('projects')}>
              <h1>Wonderful List</h1>
                <h1>
                  <Link className={cx('header', `header-theme-${this.state.theme}`)} to='/'>Home</Link>
                </h1>
                <h1 className={cx('header', `header-theme-${this.state.theme}`)}>Projects List:</h1>
                <div>
                  <ProjectInput name={this.state.name} handleChange={this.handleChange} handleClick={this.handleClickProject}/>
                </div>
                <ListProjects projectsById={this.state.projectsById} />
              </div>
            </Route>
            <Switch>
              <Route exact path='/'>
                <div className={cx('tasks')}>
                  <h1 className={cx('header', `header-theme-${this.state.theme}`)}>Tasks List</h1>
                  <ThemeContext.Provider value={this.state.theme}>
                    <div className={cx('new_task')}>
                      <TaskInput name={this.state.name} description={this.state.description} handleChange={this.handleChange} handleClick={this.handleClick} project_id={'no_project'} />
                    </div>
                  <List tasksById={this.state.tasksById} handleClickCompleted={this.handleClickCompleted} />
                  </ThemeContext.Provider>
                </div>
              </Route>
              <Route path='/projects/:projectId/'>
                <ThemeContext.Provider value={this.state.theme}>
                  <ProjectTasks projectsById={this.state.projectsById} tasksById={this.state.tasksById} handleClickCompleted={this.handleClickCompleted} handleChange={this.handleChange} handleClick={this.handleClick} input_name={this.state.name} input_description={this.state.description} />
                </ThemeContext.Provider>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}




export default MyTodoList;