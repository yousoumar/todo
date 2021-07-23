import './ToDoList.css';
import ToDo from '../ToDo/ToDo';
import trash from '../../assets/trash.svg'

export default function ToDoList({state, setState, toggleState}) {
    function deleteToDo(id){
        const newState = state.filter(todo => todo.id !== id);
        setState(newState);
    }
    function checkToDo(id){

        const newState = state.slice();
        const todo = newState.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setState(newState);
   
    }
    function deleteCompletedToDoList(){
        const newState = state.filter(todo => todo.completed === false);
        setState(newState);
    }
    function displayToDoList(state){
       return state.map(todo =>   <ToDo 
                                    ToDoData = {todo} 
                                    key = {todo.id} 
                                    deleteToDo = {deleteToDo} 
                                    toggleState= {toggleState}
                                    checkToDo = {checkToDo}
                                   />); 
    }
    function toDolistFilter(state, toggleState){
        if (toggleState === "all"){
            return state;
        }else if (toggleState === "completed"){
            state = state.filter(todo => todo.completed === true);
            return state;
        }else{
            state = state.filter(todo => todo.completed === false);
            return state;
        }
          
    }
    return (
        <div className = "to-do-list-container">
            <ul className = "to-do-list">
            
                {
                     
                     displayToDoList(toDolistFilter(state, toggleState))               
                }
                
            </ul>
            {
                (toDolistFilter(state, toggleState).length >= 2 && toggleState === "completed") && 
                <button className="delete-all" onClick = {()=>{deleteCompletedToDoList()}}>
                    <span><img src={trash} alt="trash" /></span> <span>delete all</span> 
                </button>
            }
        </div>
        
    )
}
