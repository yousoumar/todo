import './ToDo.css';
import trash from '../../assets/trash.svg'


const ToDo = ({ToDoData, deleteToDo, toggleState, checkToDo}) => {

    return (
        <li className = {ToDoData.completed ? 'to-do completed' : 'to-do ' } id = {ToDoData.id} onClick = {e => checkToDo(e.currentTarget.id)} >
            <div className="input-label-container">
                <input 
                    type="checkbox" 
                    defaultChecked = {ToDoData.completed ? "checked" : ""}
                /> 
                <label htmlFor = {ToDoData.id}>{ToDoData.content}</label>
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