import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../add-item-form";
import "./app.css";

export default class App extends Component { 

  maxId=100;

  state={
    todoData:[
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    activeTab:"All",
    textInput:""
  };

  createTodoItem(label) {
    return {
      label,
      important:false,
      done:false,
      id:this.maxId++
    }
  }

  deleteItem=(id)=>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id  === id );
      const newArray=[...todoData.slice(0, idx), 
                      ...todoData.slice( idx+1)];
      return{
        todoData:  newArray
      };
    });
  };

  AddItem=(text)=>{

    const newItem = this.createTodoItem(text);
    console.log(newItem);
    this.setState(({todoData})=>{
        const newArr=[
          ...todoData,
          newItem
        ];
        return {
          todoData:newArr
        };
    });
    
  };

  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el)=>el.id  === id );
    const oldItem= arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName]};
      
  return [...arr.slice(0, idx), 
    newItem,
    ...arr.slice( idx+1)];
  };

  onToggleDone=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toggleProperty( todoData, id, "done")
      };
    });
  };

  onToggleImportant=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toggleProperty( todoData, id,"important")
      };
    });
  };

  onTabClick=(e)=>{
    this.setState({
        activeTab: e.target.innerText,
    });
};

  onClickSearsh=(e)=>{   
    this.setState({
        textInput:e.target.value,
    });
  };

 render( ){
   const {todoData, activeTab, textInput}=this.state;
   const doneCount = todoData.filter((el)=> el.done).length;
   const todoCount = todoData.length-doneCount;

  return(
    <div className="todo-app">
  
    <AppHeader todo={todoCount} done={doneCount} />

    <SearchPanel 
      onClickSearsh={this.onClickSearsh} />
    <ItemStatusFilter 
      onFilterTodos={this.filterTodos}
      onTabClick={this.onTabClick} 
      activeTab={activeTab} />

    <TodoList 
      textInput={textInput} 
      todos={todoData}
      activeTab={activeTab}
      onDeleted={ this.deleteItem }
      onToggleImportant={this.onToggleImportant}
      onToggleDone={this.onToggleDone} />

    <ItemAddForm 
      onItemAdded={this.AddItem} />
  </div>
  );
  };
 };