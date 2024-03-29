import React, { Component } from 'react'

 class Binding extends Component {
  constructor(){
super();

this.BindingFun=this.BindingFun.bind(this);
this.state={
name:"osama",
}
 }
 BindingFun(){
    console.log("see here" ,this);
//     this.setState({
// name:"osama changed",
//     });
}
 BindingFun2(){
    console.log("see here2" ,this);
//     this.setState({
// name:"osama changed",
//     });
}


// arrow function
BindingFun3 = () =>{
    console.log("see here3" ,this);
    this.setState({
name:"osama changed",
    });
}


// regular function
BindingFun4(){
    console.log("see here4" ,this);
//     this.setState({
// name:"osama changed",
//     });
}
 

    render() {
     const BindingFun5 =()=>{
            console.log("see here5" ,this);
        //     this.setState({
        // name:"osama changed",
        //     });
        }
    return (
      <div>
Binding {this.state.name}

<input type="button" value="Binding" onClick={this.BindingFun}></input>
<input type="button" value="Binding2" onClick={this.BindingFun2.bind(this)}></input>
<input type="button" value="Binding3" onClick={this.BindingFun3}></input>
<input type="button" value="Binding4" onClick={()=>this.BindingFun4()}></input>
<input type="button" value="Binding5" onClick={BindingFun5}></input>
      </div>
    )
  }
}

export {Binding};