import './App.css';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';
import {useState, useEffect} from 'react';
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
  const [toggleState, toggleSetStae] = useState('all');
  useEffect(()=>{
    const toglers = document.querySelectorAll('.toggler');
    toglers.forEach(togler => {
      togler.addEventListener('click', (e)=>{
        toglers.forEach(togler => togler.classList.remove('active'));
        e.currentTarget.classList.add('active');
        toggleSetStae(e.currentTarget.classList[0]);
       
      });
    });
  });
  return (
    <div className="app">

      <h1>#todo</h1>

      <ul className = "filter-buttons-container">
        <li><button className = "all active toggler">All</button></li>
        <li ><button className = "not-completed toggler">Active</button></li>
        <li><button className = "completed toggler" >Completed</button></li>
      </ul> 

      <Form state = {state} setState ={setState}/>

      <ToDoList state = {state} setState = {setState} toggleState = {toggleState}/>
    </div>
  );
}

export default App;
