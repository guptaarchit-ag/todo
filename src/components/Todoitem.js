import React from 'react';

function Todoitem(props){
    return(
        <div className = "todoitem">
            <input type = "checkbox" checked = {props.todoitem.completed} />
            <p>{props.todoitem.text}</p>
        </div>
    )
}

export default Todoitem