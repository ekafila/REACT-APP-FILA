import List from '../List/List'
import {TaskInput} from '../TaskInput/TaskInput'
import { useParams, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
    tasksById: state.tasks_projects.tasksById,
    projectsById: state.tasks_projects.projectsById,
    theme: state.theme.theme
})

const ProjectTasksComponent = ({ tasksById, projectsById, theme }) => {
    const { projectId } = useParams()
    if (projectId in projectsById) {
        const project_name = projectsById[projectId].name
        const project_task_ids = projectsById[projectId].tasksIds.map(id => String(id))
        const project_tasks = Object.keys(tasksById).filter(key => project_task_ids.includes(key)).reduce((object, key) => {
            return {
                ...object,
                [key]: tasksById[key]
            }
        }, {})

        return (
            <div >
                <h1 >{project_name}</h1>
                <div>
                    <TaskInput project_id={projectId} />
                </div>
                <List tasksById={project_tasks} />
            </div>
        )
    } else {
        return (
            <Redirect to='/' />
        )
    }
}

export const ProjectTasks = connect(mapStateToProps)(ProjectTasksComponent);
