import { combineReducers } from "redux";
import { themeReducer } from './ThemeReducer'
import { tasksProjectsReducer } from './ProjectsReducer'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks_projects: tasksProjectsReducer
})