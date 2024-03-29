import React, { Component } from "react";

// class PassingMethod extends Component{
// render(){
// return(
// <>
// PassingMethod
// <button type="button" onClick={()=>this.props.parentMethod("paramater")}>Click Me</button>
// </>

// );
// }
// }


const PassingMethod = (props) =>{
return(
<>
{/* PassingMethod */}
 <button type="button" onClick={()=>props.parentMethod("Affan Ahmad","Osama")}>Click Me</button>

</>
);
}
export default PassingMethod;