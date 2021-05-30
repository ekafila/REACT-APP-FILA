import List from '../List/List'
import TaskInput from '../TaskInput/TaskInput'
import { useParams } from 'react-router-dom'
import ProjectInput from '../ProjectInput/ProjectInput'


const ProjectTasks = ({ projectsById, tasksById, handleClickCompleted, handleChange, handleClick, input_name, input_description }) => {
    const { projectId } = useParams()
    console.log(projectId)
    const project_name = projectsById[projectId].name
    console.log(projectsById)
    const project_task_ids = projectsById[projectId].tasksIds.map(id => String(id))
    console.log(project_task_ids)
    console.log(Object.keys(tasksById).filter(key => project_task_ids.includes(key)))
    const project_tasks = Object.keys(tasksById).filter(key => project_task_ids.includes(key)).reduce((obj, key) => {
        return {
            ...obj,
            [key]: tasksById[key]
        }
    }, {})
    console.log(project_tasks)
    return (
        <div>
            <div >
                <TaskInput name={input_name} description={input_description} handleChange={handleChange} handleClick={handleClick} project_id={projectId} />
            </div>
            <List tasksById={project_tasks} handleClickCompleted={handleClickCompleted} />
        </div>
    )
}

export default ProjectTasks;
