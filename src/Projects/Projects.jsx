import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const Project = ({ id, name }) => {
    const project_path = `/projects/${id}/`
    return (
                <div>
                    <Link to={project_path}>{name}</Link>
                </div>
            )}

export const Project = connect(mapStateToProps)(Project);
