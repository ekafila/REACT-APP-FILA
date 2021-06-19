import { connect } from 'react-redux'
import { handleClickProject } from '../Actions/TaskProjectsAction'


const mapDispatchToProps = (dispatch) => ({
    dispatchOnClickProjectAdd: (event) => dispatch(handleClickProject(event))
})

const ProjectAddButtonComponent = ({ dispatchOnClickProjectAdd }) => {
    const onClickProjectAdd = (event) => {
        dispatchOnClickProjectAdd(event.target)
    }

    return (
        <div>
            <button onClick={onClickProjectAdd}>Add</button>
        </div>
    )
}

export const ProjectAddButton = connect(null, mapDispatchToProps)(ProjectAddButtonComponent);