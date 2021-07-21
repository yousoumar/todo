import './Form.css'
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

export default function Form(props) {

    // on input 
    let [inputState, inputSetState] = useState();
    const handleInput = (e) => {
        inputSetState(e.currentTarget.value);
    }
     // on submit
     const addToDo = (e) =>{
        e.preventDefault();
        if (inputState){
            const newData = [...props.data, {content : inputState, id : uuidv4()}];
            props.setState(newData);
        }
     
        inputSetState('');  
    }
    return (
        <form onSubmit = {(e) => addToDo(e)}>
            <input type="text" 
                placeholder = "add details" 
                onInput = {e => handleInput(e)}
                value = {inputState}
 
            />
            <button type="submit">Add</button>
      </form>
    )
}
