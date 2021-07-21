import './ToDo.css';


const ToDo = ({ToDoData}) => {
    return (
        <li className = "to-do">
            <input type="checkbox" id = {ToDoData.id}  /> 
            <label htmlFor={ToDoData.id}>{ToDoData.content}</label>
        </li>
    )
}
export default ToDo;