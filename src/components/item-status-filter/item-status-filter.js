 import React, {Component} from "react";
 import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {


    render(){
       
        const  { activeTab, onTabClick} = this.props;
  
        return(
            <div className="btn-group">
                <button 
                    type="button" 
                    className={`btn btn-outline-secondary${ activeTab === "All" ? " btn-info " :  " " }`}
                    onClick={onTabClick}

                > 
                    All 
                </button>
                <button 
                    type="button" 
                    className={`btn btn-outline-secondary${ activeTab === "Active" ? " btn-info " :  " " }`}
                    onClick={onTabClick}
                > 
                    Important
                </button>

                <button 
                    type="button" 
                    className={`btn btn-outline-secondary${ activeTab === "Done" ? " btn-info " :  " " }`}   
                    onClick={onTabClick}
                > 
                    Done
                </button>
            </div>
        );
    };
};