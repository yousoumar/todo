import './Form.css'
import { v4 as uuidv4 } from 'uuid';
import {useState, useRef, useEffect} from 'react';

export default function Form(props) {
    const ref = useRef([]);
    // on input 
    let myInput;
    const [inputState, inputSetState] = useState();
    const handleInput = (e) => {
        inputSetState(e.currentTarget.value);
    }
    useEffect(()=>{
        myInput = ref.current;
    },[inputState]);

     // on submit
     const addToDo = (e) =>{
        e.preventDefault();
        if (inputState){
            const newState = [...props.state, {content : inputState, id : uuidv4()}];
            props.setState(newState);
        }
     
        myInput.value = "";  
    }
    
    return (
        <form onSubmit = {(e) => addToDo(e)}>
            <input type="text" 
                placeholder = "add task" 
                onInput = {e => handleInput(e)}
                ref = {ref}
 
            />
            <button type="submit">Add</button>
      </form>
    )
}
