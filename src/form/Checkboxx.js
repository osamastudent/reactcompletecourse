import React, { Component } from 'react'

export default class Checkboxx extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          checked: false,
        };
      }
    
    checkboxFun = (e) => {
        this.setState({
          checked: e.target.checked,
        });
        // console.log(e.target.checked);
      }

      selectHandler = (e) =>{
console.log(e.target.value)
      }

      formHandler = (e) =>{
        e.preventDefault();
        // console.log("country",e.target[0].value)
        // console.log("checkbox",this.state.checked)
      }
  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
            <select onChange={this.selectHandler}>
<option value="pakistan">Pakistan</option>
<option value="india">india</option>
<option value="bangladesh">bangladesh</option>
<option value="dubai">dubai</option>
            </select>
            <br></br>
            <input type='checkbox' checked={this.state.checked} onChange={this.checkboxFun}></input>
             <br></br>
             <br></br>
            <input type='submit' value="Submit"></input>
        </form>

      </div>
    )
  }
}
