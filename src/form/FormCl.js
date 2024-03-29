import React, { Component } from 'react'

export default class FormCl extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"osama",
         email:"osama@gmail.com"
      }
    }

    handleName = (e) =>{
        // console.log(e.target.value);
this.setState({
name:e.target.value.toLowerCase().substring(0,15),
});
    }

    handleEmail = (e) =>{
        // console.log(e.target.value);
this.setState({
email:e.target.value.toLowerCase().substring(0,25),
});
    }
    
    formHandlingSubmission = (e) =>{
e.preventDefault();
        // console.log(e.target.value);
        // console.log(this.state.name,this.state.email);
        //     this.setState({
// name:e.target.value
//     });
    }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h5>{this.state.name}</h5>
<form onClick={this.formHandlingSubmission}>
    <input type='text' value={this.state.name} onChange={this.handleName}></input> <br></br>
    <input type='text' value={this.state.email} onChange={this.handleEmail}></input>
    <input type='submit' value="Submit" ></input>
</form>

      </div>
    )
  }
}
