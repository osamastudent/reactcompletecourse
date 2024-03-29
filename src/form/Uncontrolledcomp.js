import React, { Component, createRef } from 'react'

export default class Uncontrolledcomp extends Component {
    constructor(props) {
      super(props)
          this.myRef=createRef();
          this.nameRef=createRef();
          this.emailRef=createRef();
          }

          componentDidMount(){
        // console.log(this.myRef.current.innerHTML);
        console.log(this.nameRef);
        console.log(this.emailRefRef);
this.nameRef.current.focus();
          }
    
       

          formSubmit = (e) =>{
e.preventDefault();
console.log("name=>" , this.nameRef.current.value);
console.log("email=>" , this.emailRef.current.value);
let address=document.getElementById("address").value;
console.log("address", address);
          }
  render() {
    return (
      <div>
    
<h1>Uncontrolld component</h1>
        <form onSubmit={this.formSubmit}>
            
            <input type='text' placeholder='Name' ref={this.nameRef}></input><br></br>
            <input type='text' placeholder='Email' ref={this.emailRef}></input><br></br>
            <input type='text' placeholder='Address' id='address' ></input><br></br>
            <input type='submit'></input>
        </form>
      </div>
    )
  }
}
