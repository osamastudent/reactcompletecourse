import React, { Children } from "react";
import PropTypes from 'prop-types'

function Header(props){
    return(
<div>
<p>static Name:{props.name} &nbsp;</p>
<p>dynamic email:{props.email}</p>
<p>dynamic age:{props.age}</p>
<p>dynamic isMarried:{props.isMarried.toString()}</p>
<p>dynamic isMarried:{String(props.isMarried)}</p>
<p>Is Married: {props.isMarried ? 'Yes' : 'No'}</p>


<br></br>
<b>children props:{props.Children}</b>

<br></br>
<p className="d-block">dynamic array:{props.arr}</p>
<p className="d-block">one by one array:{props.arr[0]}</p>
<p className="d-block">one by one array:{props.arr[1]}</p>
<p className="d-block">one by one array:{props.arr[2]}</p>



<h1>this is header from header component</h1>
</div>

    );
}

Header.propTypes={
    name:PropTypes.string.isRequired,
// age:PropTypes.number,
age:PropTypes.number,
isMarried:PropTypes.bool,
arr:PropTypes.array,
}
// propTypes types:
// PropTypes.array
// PropTypes.bool
// PropTypes.func
// PropTypes.object
// PropTypes.number
// PropTypes.string
// PropTypes.symbol

Header.defaultProps={
    name:"default value for name",
    age:1000,
}

export default Header;