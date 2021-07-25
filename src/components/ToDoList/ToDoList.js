import './ToDoList.css';
import ToDo from '../ToDo/ToDo';
import trash from '../../assets/trash.svg';
import Button from '../Button/Button';

export default function ToDoList({state, setState, toggleState}) {
    function deleteToDo(id){
        const newState = state.filter(todo => todo.id !== id);
        localStorage.setItem('state', JSON.stringify(newState));
        setState(newState);
    }
    function checkToDo(id){

        const newState = state.slice();
        const todo = newState.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        localStorage.setItem('state', JSON.stringify(newState));
        setState(newState);
   
    }
    function deleteCompletedToDoList(){
        const newState = state.filter(todo => todo.completed === false);
        localStorage.setItem('state', JSON.stringify(newState));
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
        <div >
            <ul className = "to-do-list">
            
                {
                     
                     displayToDoList(toDolistFilter(state, toggleState))               
                }
                
            </ul>
            {
                (toDolistFilter(state, toggleState).length >= 2 && toggleState === "completed") && 
                <Button 
                    class="delete" 
                    icon = {trash} 
                    backgroundColor = "#EB5757" 
                    padding = "1rem"
                    handleClick = {deleteCompletedToDoList}
                >
                    Tout supprimer
                </Button>
            }
        </div>
        
    )
}
