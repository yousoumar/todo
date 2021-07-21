import './ToDoList.css';
import ToDo from '../ToDo/ToDo';

export default function ToDoList({data, updateData}) {
    function updateToDoList(id){
        const newData = data.filter(todo => todo.id !== id);
        updateData(newData);
    }
    return (
        <ul className = "to-do-list">
            
            {
                data.length !== 0 ?
                                    data.map(item => <ToDo ToDoData = {item} key = {item.id} updateToDoList = {updateToDoList}/>) 
                                  :
                                    <p className = "void-list">
                                         You have no task at the moment.👏🏼 
                                    </p>  
                                    
            }
            
        </ul>
    )
}
