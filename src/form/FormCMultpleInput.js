import React, { Component } from 'react'

export default class FormCMultpleInput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"aftab",
         email:"aftab@gmail.com",
      }
    }
    
formHandler = (e) =>{
// console.log(e.target.value)
// console.log(e.target.name)

const fieldsValues=e.target.value
const fields=e.target.name
const identityOperator=(fields === "email") ? fieldsValues.toLowerCase() : fieldsValues;
this.setState({
    // [e.target.name]:e.target.value,
    // [fields]:fieldsValues,
    [fields]:identityOperator
});
}

  render() {
    return (
      <div>
        <h1>form handling with multiple input</h1>
        <li>{this.state.name}</li>
        <li>{this.state.email}</li>
    <form >
    <input type='text' name='name' value={this.state.name}  onChange={this.formHandler} placeholder='Enter Name'></input><br></br>
    <input type='text' name='email' value={this.state.email} onChange={this.formHandler} placeholder='Enter Email'></input>  <br></br>
    <input type='submit' value="Submit" ></input>
</form>

      </div>
    )
  }
}
