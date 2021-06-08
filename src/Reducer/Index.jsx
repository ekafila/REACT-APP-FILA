import { combineReducers } from "redux";
import { themeReducer } from './theme/theme'
import { tasksProjectsReducer } from './tasks/tasks'
import { projectsReducer } from './projects/projects'

export const rootReducer = combineReducers({
    themeState: themeReducer,
    tasksProjects: tasksProjectsReducer
})