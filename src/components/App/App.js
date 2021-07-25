import './App.css';
import Form from './../Form/Form';
import ToDoList from './../ToDoList/ToDoList';
import {useState, useEffect} from 'react';
import Loader from '../Loader/Loader'
import { v4 as uuidv4 } from 'uuid';

function App() {

  // what contains and updates the task list
  const [state, setState] = useState(JSON.parse(localStorage.getItem('state')));

  // in case we have nothing in local storage
  const initialState = [
    {
      content : "Apprendre React",
      id : uuidv4(),
      completed : false
    },
   
    {
      content : "Boire du café",
      id : uuidv4(),
      completed : true
    },
    {
      content : "Ecouter de la musique",
      id : uuidv4(),
      completed : true
    }
  ];

  // what allows to navigate between all, active, and completed tasks
  const [toggleState, toggleSetState] = useState('all');
  function handleToggle(e){
    toggleSetState(e.currentTarget.classList[0]);
  }
  
  // what allows us to handle our loader
  const [loaderState, loaderSetState] = useState('');
  useEffect(() => {
      setTimeout(()=>{
      loaderSetState('loaded')
    }, 2000);
  }, []);

  return (
    
    <>
      {loaderState === '' ? <Loader/> : <>
                                          <h1>#todo</h1>

                                          <ul className = "toggler-container">
                                            <li>
                                              <button 
                                                className = {toggleState === "all" ? "all active " : "all " } 
                                                onClick ={(e)=>{handleToggle(e)}}
                                              >
                                                Toutes
                                              </button></li>
                                            <li >
                                              <button 
                                                className = {toggleState === "no-completed" ? "no-completed active " : "no-completed " } 
                                                onClick ={(e)=>{handleToggle(e)}}
                                              >
                                                Actives
                                              </button>
                                            </li>
                                            <li>
                                              <button 
                                                className = {toggleState === "completed" ? "completed active " : "completed " } 
                                                onClick ={(e)=>{handleToggle(e)}}
                                              >
                                                Completées
                                              </button>
                                            </li>
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
                                            created by <a href="https://github.com/yousoumar" target ="_blank" rel="noreferrer">yousoumar</a> - devChallenges.io
                                          </footer>
                                        </>
       
      }
    </>
   
  );
}

export default App;
