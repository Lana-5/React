import React from "react";
import "./app-header.css";

const AppHeader=({todo, done})=>{

    return(
        <div className="header">
            <h1> Todo List</h1> 
            <div className="headerTotal"> {todo} more to do, {done} done </div>
        </div>
    );
};

export default AppHeader;