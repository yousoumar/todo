import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [state, setState] = useState([
    {
      content : "Do coding challenges",
      id : uuidv4(),
    },
    {
      content : "Drink coffee",
      id : uuidv4(),
    },
    {
      content : "Listen to music",
      id : uuidv4(),
    }
  ]);
  return (
    <div className="app">

      <h1>#todo</h1>

      <ul className = "filter-buttons-container">
        <li><button>All</button></li>
        <li ><button className = "active">Active</button></li>
        <li><button >Completed</button></li>
      </ul> 

      <Form data = {state} setState ={setState}/>

      <ToDoList data = {state} />
    </div>
  );
}

export default App;
