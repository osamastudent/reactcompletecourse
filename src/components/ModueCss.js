import React, { Component } from "react";
import ModueCsss from '../css/ModueCss.module.css';
class ModueCss extends Component{
constructor(props) {
  super(props)

  this.state = {
     
  }
}
render(){
  const arr2=['osama',"aftab","naseer"];
return(
    <>
    <h6 className={ModueCsss.class1}>ModueCss</h6>
    {arr2.map((arr2,index)=><li key={index}>arr2  </li>)}
    </>
);
}
}

export default ModueCss;