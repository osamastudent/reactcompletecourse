import React from "react";
import { Component } from "react";

class StyleInline extends Component{
constructor(props) {
  super(props)

  this.state = {
     activee:false,
  }
}

changeColor = () =>{
this.setState({
activee:true,
});
}


render(){
    let obj={
        color:"white",
        backgroundColor:"black",
        border: "3px solid blue",
    }
    if (this.state.activee) {
        obj.backgroundColor = "red";
        obj.color="yellow";
        obj.border="5px solid gray";
    }
    
return(
<>
StyleInline
{/* <button style={{backgroundColor:"yellow",color:"blue",fontFamily:"copper"}} type="button">Color</button> */}
<button style={obj} type="button" onClick={this.changeColor}>Color</button>
</>

);
}

}

export default StyleInline;