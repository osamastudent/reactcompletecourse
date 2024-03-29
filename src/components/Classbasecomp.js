import React, { Children, Component } from "react";
import PropTypes, { string } from 'prop-types'

class Classbasecomp extends Component{
    constructor(props){
        super(props);
    };
   
   
    render(){
       
return (
    <>
this is Classbasecomp 
<br></br>
{this.props.country}
<br></br>
<b>Children props:{this.props.children}</b>
<br></br>
<b>Array:{this.props.team}</b>
<br></br>
<b>bool Value:{this.props.booLv.toString()}</b>
<b>bool Value:{String(this.props.booLv)}</b>
</>
);
    }
}
export default Classbasecomp;

Classbasecomp.propTypes={
country:PropTypes.string,
booLv:PropTypes.bool,
team:PropTypes.array,
}