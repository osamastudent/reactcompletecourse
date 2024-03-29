import { element } from 'prop-types';
import React, { Component } from 'react'

export default class Callbackref extends Component {
    constructor(props) {
      super(props)
    this.backRef=null;
this.setBackRef=(element)=>{
    this.backRef=element;
}
    }
    
componentDidMount(){
        console.log(this.backRef);
        if(this.backRef){
            this.backRef.focus();
this.backRef.style.color="red";
this.backRef.style.backgroundColor="yellow";
        }
}

formSubmit = (e) =>{
e.preventDefault();
// console.log(this.backRef.value);
this.backRef.style.borderRadius="50px";
}

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
            <input type='text' ref={this.setBackRef} placeholder='Name'></input>
            <input type='submit'></input>
        </form>
      </div>
    )
  }
}
