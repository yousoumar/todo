import './ToDoList.css';
import ToDo from '../ToDo/ToDo';


export default function ToDoList(props) {
   
    return (
        <ul className = "to-do-list">
            {
                
                props.data.map(item => <ToDo ToDoData = {item} key = {item.id}/>)    
            }
            
        </ul>
    )
}
