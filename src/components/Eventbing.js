import React, { Component } from "react";
const Eventbing = () => {

    function Eventbing(){
    alert("Eventbing");
    }

    const EventBindingTwo = () =>{
    alert("EventBindingTwo");
    }
    return (
        <>
        <h6>Eventbing</h6>
        
        <input type="button" value="Click" onClick={Eventbing}></input>
        <input type="button" value="Click" onClick={EventBindingTwo}></input>
        </>
    );
}



class EventBindingThree extends Component{

    EventBindingThree(){
    alert("EventBindingThree");
    }
    render(){
    
    const EventBindingFour = () =>{
            alert("render k andr agr function call krengay to onclick event may this keyword ka use  nahi karenga");
        }
return(
    <>
    <h6>EventBindingThree</h6>
    <input type="button" value="EventBindingThree" onClick={this.EventBindingThree}></input>
    <input type="button" value="EventBindingFour" onClick={() => EventBindingFour()}></input>
    <input type="button" value="EventBindingFour" onClick={EventBindingFour}></input>
    </>
);
}
}

export { Eventbing , EventBindingThree};