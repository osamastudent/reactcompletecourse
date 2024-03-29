import React, { Component } from "react";
import Stateconcept from  './Stateconcept';
// const ConditionalRendering = ()=>{
//     const name="osama";

// if(name=="osama"){
//     return  <b>my name i s: {name}</b>  
// }
// else{
// return "please enter your correct  name";
// }
    
// }

// function ConditionalRendering(){
// const name="osama";
// let data;
// if(name=="osama"){
// return data=<Stateconcept></Stateconcept>
// }

//     return(
//         // <>    {name=="osama" && <h1>this is okk</h1> } </>
//         {data}

// );
// }



// function ConditionalRendering() {
// let age=20;
//     return(
// <>
// {age>18 ? <b>you can be selected</b> : <b>your age is very less</b>}
// {age>18 ? <Stateconcept/> : <b>your age is very less</b>}
// </>
// );
// }

class ConditionalRendering extends Component{
    // without constructor
    state={
        name:"affan janab",
        }

        // witho constructor
    // constructor(){
    // super();
    // this.state={
    // name:"affan janab",
    // }
    // }
render(){
return(
    <>
    {this.state.name=="affan janab" ? "valid" : "invalid"}
    </>
);
}
}
export default ConditionalRendering;