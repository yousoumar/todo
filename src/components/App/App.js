import './App.css';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [state, setState] = useState([
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
  ]);
  
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

      <Form state = {state} setState ={setState} toggleSetState ={toggleSetState}/>

      <ToDoList state = {state} setState = {setState} toggleState = {toggleState}/>

      <footer>
        created by <a href="https://devchallenges.io/portfolio/yousoumar" target ="_blank">yousoumar</a> - devChallenges.io
      </footer>
    </>
  );
}

export default App;
