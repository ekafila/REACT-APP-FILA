import {TaskButton} from '../TaskButton/TaskButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const TaskComponent = ({ project_id, id, name, description, completed }) => {
  const nameFinal = 'Task name: ' + name
  const descriptionFinal = 'Description: ' + description
  const completedFinal = 'Статус: ' + completed
    return (
      <div>
        <div>{nameFinal}</div>
        <div> {descriptionFinal}</div>
        <div>{completedFinal}</div>
        <TaskButton project_id={project_id} task_id={id} task_completed={completedFinal} />
      </div>
       )
      }


export const Task = connect(mapStateToProps)(TaskComponent);