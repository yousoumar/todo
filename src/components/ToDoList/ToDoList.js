import './ToDoList.css';
import ToDo from '../ToDo/ToDo';


export default function ToDoList(props) {
    function updateToDoList(id){
        const newData = props.data.filter(todo => todo.id !== id);
        props.updateData(newData);
    }
    return (
        <ul className = "to-do-list">
            {
                
                props.data.map(item => <ToDo ToDoData = {item} key = {item.id} updateToDoList = {updateToDoList}/>)    
            }
            
        </ul>
    )
}
