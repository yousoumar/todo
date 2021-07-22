import './ToDoList.css';
import ToDo from '../ToDo/ToDo';
import trash from '../../assets/trash.svg'

export default function ToDoList({state, setState}) {
    function deleteToDo(id){
        const newState = state.filter(todo => todo.id !== id);
        setState(newState);
    }
    function deleteToDoList(){
        setState('');
    }
    return (
        <div className = "to-do-list-container">
            <ul className = "to-do-list">
            
                {
                    state.length !== 0 ?
                                        state.map(item => <ToDo ToDoData = {item} key = {item.id} deleteToDo = {deleteToDo}/>) 
                                    :
                                        <p className = "void-list">
                                            You have no task at the moment.
                                        </p>  
                                        
                }
                
            </ul>
            {
                state.length >= 2 && 
                <button className="delete-all" onClick = {()=>{deleteToDoList()}}>
                    <span><img src={trash} alt="trash" /></span> <span>delete all</span> 
                </button>
            }
        </div>
        
    )
}
