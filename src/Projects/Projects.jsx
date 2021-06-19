import { Link } from 'react-router-dom'


const Project = ({ id, name }) => {
    const project_path = `/projects/${id}/`
    return (
                <div>
                    <Link to={project_path}>{name}</Link>
                </div>
            )}

export default Project;
