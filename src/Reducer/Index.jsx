import { combineReducers } from "redux";
import { themeReducer } from './ThemeReducer'
import { tasks_projectsReducer } from './TasksProject'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks_projects: tasks_projectsReducer
})