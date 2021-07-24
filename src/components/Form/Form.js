import './Form.css'
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
        if (inputState){
            const newState = [...props.state, {content : inputState, id : uuidv4(), completed : false}];
            localStorage.setItem('state', JSON.stringify(newState));
            props.setState(newState);
        }
        props.toggleSetState("all");
        inputSetState('');
    }
    
    return (
        <form onSubmit = {(e) => addToDo(e)}>
            <input type="text" 
                placeholder = "Nouvelle tâche" 
                onInput = {e => handleInput(e)}
                value = {inputState}
            />
            <button type="submit">Ajouter</button>
      </form>
    )
}
