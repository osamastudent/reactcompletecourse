import React, { Component, createRef } from 'react'

export default class Myref extends Component {
    constructor(props) {
      super(props)
          this.myRef=createRef();
          }

          componentDidMount(){
        // console.log(this.myRef.current.innerHTML);
          }
    
          changeFun = ()=>{
        // this.myRef.current.align="right";
        this.myRef.current.style.color = "yellow";
        this.myRef.current.style.backgroundColor = "blue";
          }

         
  render() {
    return (
      <div>
        <h1 ref={this.myRef}>refs refrence</h1>
        <button onClick={this.changeFun}>Click</button>

      </div>
    )
  }
}
