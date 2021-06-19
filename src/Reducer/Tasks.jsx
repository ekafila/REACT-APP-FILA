import { AddButton } from '../AddButton/AddButton';
import { TaskButton } from '../TaskButton/TaskButton';
import projects from '../MyTodoList/MyTodoList';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const {tasksById} = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  tasks: tasksById
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case AddButton: {
        const {taskId, taskName, taskDescription} = action
        const newTasksList = {...state.tasks}
        newTasksList[taskId] = {
          id: taskId,
          name: taskName,
          description: taskDescription,
          completed: false
        }
        return { 
          ...state, 
          tasks: newTasksList
        }
      }
      case TaskButton: {
          let taskToChangeStatusID = action.id
          let updatedTasksList = {...state.tasks}
          updatedTasksList[taskToChangeStatusID].completed = !action.status
          return {
              ...state,
              tasks: updatedTasksList
          }
      }
      default:
        return state;
    }
  };