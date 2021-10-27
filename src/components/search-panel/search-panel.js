import React, {Component} from "react";
import "./search-panel.css";

export default class SearchPanel extends Component{

    render(){
        
        const {onClickSearsh}=this.props;
    
        return(
            <input  
                type="text"  
                id="search" 
                placeholder="Type to search"
                onChange={onClickSearsh } 
            />
        )
    };
};
