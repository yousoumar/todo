import './ToDo.css';
import trash from './trash.svg'


const ToDo = ({ToDoData, updateToDoList}) => {

    function handleClick(id){
        updateToDoList(id);
    }
    return (
        <li className = "to-do" id = {ToDoData.id}>
            <input type="checkbox" /> 
            <label >{ToDoData.content}</label>
            <button onClick = { e => handleClick(e.currentTarget.parentElement.id)}>
                <img src={trash} alt = "trash"/>
            </button>
        </li>
    )
}
export default ToDo;