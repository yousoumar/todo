import './ToDo.css';
import trash from '../../assets/trash.svg'


const ToDo = ({ToDoData, deleteToDo, toggleState, checkToDo}) => {

    return (
        <li className = {ToDoData.completed ? 'to-do completed' : 'to-do ' } id = {ToDoData.id} >
            <div className="input-label-container">
                <input 
                    type="checkbox" 
                    checked = {ToDoData.completed ? "checked" : ""}
                    onClick = {e => checkToDo(e.currentTarget.parentElement.parentElement.id)}
                /> 
                <label>{ToDoData.content}</label>
            </div>
            
            {
                (toggleState === "completed") && <button onClick = { e => deleteToDo(e.currentTarget.parentElement.id)}>
                                                    <img src={trash} alt = "trash"/>
                                                </button> 
            }
        </li>
    )
}
export default ToDo;