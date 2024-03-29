import React, { Component } from "react";

export default class Stateconcept extends Component {
//   without constructor
state = {
    name: "affan",
    age: " 3 months",
    email:this.props.email,
}
  
    // with constructor
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: "affan",
    //         age: " 3 months",
    //         email:this.props.email,
    //     }
    // }

    changeName(){
    this.setState({
name:"Affan Ahmad",
age: " 4 months ",
email: " affanahmad123@gmail.com ",
    });
    }
    render() {
        return (
            <>
                <h1>this is Stateconcept</h1>
                {this.state.name}
                {this.state.age}
                {this.state.email}
<button type="button" onClick={()=>this.changeName()}>Click</button>
            </>
        );
    }

}