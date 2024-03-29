import { func } from "prop-types";
import React, { Component } from "react";

// destructuring with function components
// 1st method
// export default function Destructure({name,semester}){

// return(
//     <>
//     {name}
//     {semester}
//     <h1>Destructure</h1>
//     </>
// );


// 2nd method
export default function Destructure(props){
const {name,semester}=props
return(
    <>
    {name}
    {semester}
    <h1>Destructure</h1>
    </>
);
}

// 1st method
// destructuring with class components
class Destructuretwo extends Component{
   
    constructor(props){
    super(props);

    this.state={
    diploma:"sfc",
    total:6,
    }
    }
    render(){
        const {name,semester}=this.props;
        const {diploma,total}=this.state;
    return(
<>
<h1>this Destructure class component --- {name} &nbsp; {semester} </h1>
<h1>this Destructure class component --- {diploma} &nbsp; {total} </h1>
</>

    );
    }
}

class Destructurethree extends Component{
render(){
const {name,semester}=this.props;
return(
<>
<b>this is Destructure three {name} &nbsp; {semester}</b>
</>

);
}
}




class Destructurefour extends Component{
constructor(){
    super();
    this.state={
    diploma:"name from state",
    sems:"semester from state",
    }
}
    render(){
    const {name,semester}=this.props;
    const {diploma,sems}=this.state;

    return (
        <>
        <h1>Destructurefour props:  {name} {semester}</h1>
        <h1>Destructurefour state: {diploma} {sems}</h1>
        </>
    );
}
}





const Destructurefive = ({name,semester,arr}) =>{
    return(
        <>
        <h4>Destructurefive {name} {semester}</h4>
        <b>{arr}</b>
        <h4>Destructurefive Array: {arr[0]} {arr[1]} {arr[2]}</h4>
        </>
    );
}
const Destructuresix = (props) =>{
    return(
        <>
        <h4>Destructurefive props: {props.name} {props.semester}</h4>
        <h4>Destructurefive Array: {props.arr} </h4>
        </>
    );
}



export {Destructuretwo,Destructurethree,Destructurefour,Destructurefive,Destructuresix};