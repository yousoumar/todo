import './Form.css'
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

export default function Form(props) {

    // on input 
    const [inputState, inputSetState] = useState('');
    const handleInput = (e) => {
        inputSetState(e.currentTarget.value);
    }

    // on submit
    const addToDo = (e) =>{
        e.preventDefault();
        if (inputState.trim()){
            const newState = [...props.state, {content : inputState, id : uuidv4(), completed : false}];
            localStorage.setItem('state', JSON.stringify(newState));
            props.setState(newState);
            props.toggleSetState("all");
        }
        
        inputSetState('');
    }
    
    return (
        <form onSubmit = {(e) => addToDo(e)}>
            <input type="text" 
                placeholder = "Nouvelle tâche" 
                onInput = {e => handleInput(e)}
                value = {inputState}
            />
            <Button 
                type = "submit" 
                backgroundColor = "#2F80ED"
                width = "6.8rem"
                fontSize = ".9rem"   
            >
                Ajouter
            </Button>
           
      </form>
    )
}
