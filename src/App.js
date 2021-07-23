import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // what contains and updates the task list
  const [state, setState] = useState(JSON.parse(localStorage.getItem('state')));

  // in case we have nothing in local storage
  const initialState = [
    {
      content : "Do coding challenges",
      id : uuidv4(),
      completed : false
    },
    {
      content : "Drink coffee",
      id : uuidv4(),
      completed : false
    },
    {
      content : "Listen to music",
      id : uuidv4(),
      completed : false
    }
  ];

  // what allows to navigate between all, active, and completed tasks
  const [toggleState, toggleSetState] = useState('all');
  function handleToggle(e){
    toggleSetState(e.currentTarget.classList[0]);
  }
 
  return (
    
    <>

      <h1>#todo</h1>

      <ul className = "filter-buttons-container">
        <li><button className = {toggleState === "all" ? "all active " : "all " } onClick ={(e)=>{handleToggle(e)}}>All</button></li>
        <li ><button className = {toggleState === "no-completed" ? "no-completed active " : "no-completed " } onClick ={(e)=>{handleToggle(e)}}>Active</button></li>
        <li><button className = {toggleState === "completed" ? "completed active " : "completed " } onClick ={(e)=>{handleToggle(e)}}>Completed</button></li>
      </ul> 

      <Form 
        state = {state ? state : initialState}
         setState ={setState} 
         toggleSetState ={toggleSetState}
      />

      <ToDoList 
        state = {state ? state : initialState}
         setState ={setState} 
         toggleState ={toggleState}
      />


      <footer>
        created by <a href="https://devchallenges.io/portfolio/yousoumar" target ="_blank" rel="noreferrer">yousoumar</a> - devChallenges.io
      </footer>
    </>
  );
}

export default App;
