import './Button.css';

export default function Button(props) {
    const style = {
        backgroundColor : props.backgroundColor,
        width : props.width,
        fontSize : props.fontSize,
        padding : props.padding
    }
    return (
        
        <button 
        className = {props.class ? props.class + " button" : "button"} 
        type = {props.type} 
        style ={style} 
        onClick = {props.handleClick}
        >
            {props.icon ? 
                            <><span><img src = {props.icon} alt =""></img> </span><span>{props.children}</span></> 
                        : props.children}
         
        </button>
    )
}
