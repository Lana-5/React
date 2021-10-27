
import React from 'react'
import TodoListItem from '../todo-list-item'
import "./todo-list.css"



const TodoList=({todos, onDeleted, onToggleImportant, onToggleDone, activeTab, textInput })=>{
  let filterArray=[];

  if(activeTab === "All"){
     filterArray=todos
  }
    else if(activeTab === "Important"){  
      filterArray=todos.filter((el)=>  el.important===true )
    }
      else if(activeTab === "Done"){
        filterArray=todos.filter((el)=>  el.done===true )
      }

  if(textInput!=="" ){
    filterArray= filterArray.filter((els)=>els.label.toLowerCase().includes(textInput.toLowerCase()));
  } 

  const elements = filterArray.map((item) => {

    const {id,  ...itemProps }=item; 
  
    return(
    
      <li key ={id} className="list-group-item" > 
      <TodoListItem { ...itemProps}
        onDeleted={()=> onDeleted(id)}
        onToggleImportant={()=>onToggleImportant(id)}
        onToggleDone={()=> onToggleDone(id)}
      />
      </li>
    );
  });

  return(
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};
export default TodoList;