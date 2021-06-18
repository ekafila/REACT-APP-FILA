import { connect } from 'react-redux'
import { fetchClickProjectAddUpload } from '../Actions/TaskProjectsAction'

const mapDispatchToProps = (dispatch) => ({
    dispatchOnFetchClickProjectUpload: () => dispatch(fetchClickProjectAddUpload())
})

const ProjectAddButtonComponent = ({ dispatchOnFetchClickProjectUpload }) => {
    const onFetchClickProjectUpload = () => {
        dispatchOnFetchClickProjectUpload()
    }

    return (
        <div>
            <button onClick={onFetchClickProjectUpload}>Add</button>
        </div>
    )
}

export const ProjectAddButton = connect(null, mapDispatchToProps)(ProjectAddButtonComponent);