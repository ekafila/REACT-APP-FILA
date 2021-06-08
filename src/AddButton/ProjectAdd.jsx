import { ProjectAddButton } from '../ProjectAddButton/project_add_button'
import { connect } from 'react-redux'
import { handleChange } from '../Actions/TaskProjectsAction'


const mapStateToProps = (state) => ({
    project_name: state.tasks_projects.project_name
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnInputChange: (input) => dispatch(handleChange(input))
})

const ProjectAddComponent = ({ project_name, dispatchOnInputChange }) => {
    const onInputChange = (event) => {
        dispatchOnInputChange(event.target)
    }

    return (
        <div>
            <div>
                <input value={project_name} onChange={onInputChange} placeholder='Project name' name='project_name' />
            </div>
            <div>
                <ProjectAddButton />
            </div>    
        </div>
    )
}

export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent);