import React, { Component } from "react";

class Child2 extends Component{

    render(){
        return(
            <div className="Child2" style={{
                "height":"50%",
                "width":"50%",
                "border":"1px solid maroon",
                "backgroundColor": "white",
                "margin":"30px"
                }}>
            color:{this.props.color}
            </div>

        )};

}

export default Child2;
