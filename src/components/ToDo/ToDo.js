import './ToDo.css';
import trash from '../../assets/trash.svg'


const ToDo = ({ToDoData, deleteToDo}) => {

    return (
        <li className = "to-do" id = {ToDoData.id}>
            <div className="input-label-container">
                <input type="checkbox" /> 
                <label>{ToDoData.content}</label>
            </div>
            
            <button onClick = { e => deleteToDo(e.currentTarget.parentElement.id)}>
                <img src={trash} alt = "trash"/>
            </button>
        </li>
    )
}
export default ToDo;