import { ProjectInput } from '../ProjectInput/ProjectInput';
import { AddButton } from '../AddButton/AddButton';
import {projects, normalizeState} from '../MyTodoList/MyTodoList';

const {projectsById} = normalizeState(projects)

const initialState = {
  projects: projectsById,
}

export const projectsReducer = (state = initialState, action) => {
        switch (action.type) {
          case ProjectInput: {
            const newProjId = action.id
            const newProjectsList = {...state.projects}
            newProjectsList[newProjId] = {
                id: action.id,
                name: action.name,
                tasksId: []
            }
            
            return {
              ...state,
              projects: newProjectsList
            }
          }
          case AddButton: {
            const projectId = action.projectId
            const newTaskId = action.taskId
            let newProjectTasksList = {...state.projects}
            newProjectTasksList[projectId].tasksIds.push(newTaskId)

            return {
              ...state,
              projects: newProjectTasksList
            }
          }
          default:
            return state;
        }
      };