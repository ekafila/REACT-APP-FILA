import {Project} from '../Projects/Projects'

const ListProjects = ({ projectsById }) => {
    const projects = Object.values(projectsById)
    return (
        <div>
            {
                projects.map(project => <Project id={project.id} name={project.name} key={project.id} />)
            }
        </div>
    )
}

export default ListProjects;
