import React, { Component } from "react";
import Child2 from "./Child2";


const color =["yellow","grey","white","Cornsilk","BlanchedAlmond","Gainsboro","DarkKhaki"]  ;

class Child extends Component{


state={
    show :"false",
    position:0,
    color:color[0],
    count:1
    
}

componentDidMount(){
        setInterval( ()=>{
            this.setState({show:"true",position:(this.state.position+4)%400, count:(this.state.count +1)%(color.length -1), color:color[this.state.count+1]});
            
        },200)
    }
    render(){
    
       
       const colored=`${this.state.color}`;
        return(
            <div className="Child" style={{
                "height":"50%",
                "width":"50%",
                "border":"1px solid maroon",
                "backgroundColor": colored,
                "marginTop":"30%",
                "transform":`translateX(${this.state.position}px)`
            }} >
                
           <Child2 color={colored}/>
             </div>
        )
    }
}

export default Child;
