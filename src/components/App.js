import React from 'react';
import todosData from '../todosData';
import Todoitem from './Todoitem';

function App(){
  const todosComponents = todosData.map(todoitem  => {
    return(
      <Todoitem 
        key = {todoitem.id} 
        todoitem = {todoitem} />
    );
  }) 


  return(
    <div className = "todoitemList">
        {todosComponents}
    </div>
  )
}

export default App