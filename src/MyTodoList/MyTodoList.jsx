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
import { fetchStateLoad } from '../Actions/TaskProjectsAction';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasksById: state.tasks_projects.tasksById,
  projectsById: state.tasks_projects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme)),
  dispatchFetchStateLoad: (projects) => dispatch(fetchStateLoad(projects))
})

class MyTodoListComponent extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchStateLoad()
  }

  onThemeChange = (event) => {
    this.props.dispatchOnThemeChange(event.target.value)
  }

  render() {

    return (
      <BrowserRouter>
      <div className={cx('page', `page-theme-${this.props.theme}`)}>
        <div className={cx('radios', `radios-theme-${this.props.theme}`)}>
          <div>
            <input
              type='radio'
              name='theme'
              id='light'
              value='light'
              checked={this.props.theme === 'light'}
              onChange={this.onThemeChange}
            />
            <label htmlFor='light'>Light</label>
          </div>
          <div>
          <input
              type='radio'
              name='theme'
              id='dark'
              value='dark'
              checked={this.props.theme === 'dark'}
              onChange={this.onThemeChange}
            />
            <label htmlFor='light'>Dark</label>
          </div>
        </div>
        <div className={cx('projects_and_tasks')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1>
                <Link className={cx('header', `header-theme-${this.props.theme}`)} to='/'>Home</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${this.props.theme}`)}>Projects</h1>
              <ListProjects projectsById={this.props.projectsById} />
              <ProjectInput />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header_tasks', `header_tasks-theme-${this.props.theme}`)}>Tasks</h1>
                <div>
                  <TaskInput project_id={'no_project'} />
                </div>
                <List project_id={'no_projects'} tasksById={this.props.tasksById} />
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
}


export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(MyTodoListComponent)
