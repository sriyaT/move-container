import React, { Component } from "react";
import Child from "../components/Child";
import styles from "./Container.css";




class Container extends Component{
    property=(color)=>{
    
    }
    render(){
        return(
        <div className="Container" style={styles.Container} >
            <Child property={this.property}/>
                
                      

        </div>
    )}

}
export default Container;