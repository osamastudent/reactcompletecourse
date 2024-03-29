import React, { Component } from "react";
import '../css/Mycss.css';

class External extends Component{
constructor(props) {
  super(props)
this.props=props;
  this.state = {
    z:true,
  }
}

render(){
    let x;
    let z;
    x=this.props.cond ? 'class2' : 'class3';
    z=this.state.z ? 'class3' : 'class2';
return(
    <>
    
    <h1 className={x}>using props  External</h1>
    <h1 className={z}>using state  External</h1>
    <h1 className="class1">External External External</h1>
    </>
);
}

}

export default  External;