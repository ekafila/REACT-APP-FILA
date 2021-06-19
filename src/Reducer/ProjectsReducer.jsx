import { INPUT_CHANGE, TASK_ADD, PROJECT_ADD, TASK_COMPLETED } from '../Actions/TaskProjectsAction';
import normalizeState from '../MyTodoList/NormalizeState';

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

const projectsList = normalizeState(projects)

export const tasksProjectsReducer = (state=projectsList, action) => {
  switch(action.type) {
      case INPUT_CHANGE: {
          const { value, name } = action.payload
          return {
              ...state,
              [name]: value
          }
      }

      case TASK_COMPLETED: {
        let task_id = action.payload
        const newTasks = {...state.tasksById}
        newTasks[task_id] = {...newTasks[task_id], completed: true}
    
        return {
            ...state,
            tasksById: newTasks
        }
    }

      case TASK_ADD: {
          const project_id = action.payload
          const new_id = Object.keys(state.tasksById).length + 1
          const newTask = {
            id: new_id,
            name: state.task_name,
            description: state.task_description,
            completed: false
          }
          if (project_id === 'no_project') {
              return {
                  ...state,
                  tasksById: {
                      ...state.tasksById,
                      [new_id]: newTask
                  }
              }
          } else {
              const newTasksById = {...state.tasksById}
              newTasksById[new_id] = newTask
              const newProjectsById = {...state.projectsById}
              newProjectsById[project_id] = {...newProjectsById[project_id]}
              newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]
        
              return {
                  ...state,
                  tasksById: newTasksById,
                  projectsById: newProjectsById
              }
          }
      }
      case PROJECT_ADD: {
          const new_id = Object.keys(state.projectsById).length + 1
          const newProject = {
            id: new_id,
            name: state.project_name,
            tasksIds: []
          }
      
          const newProjectsById = {...state.projectsById}
          newProjectsById[new_id] = newProject
  
          return {
              ...state,
              projectsById: newProjectsById
          }
      }
      default:
        return state
  }
}