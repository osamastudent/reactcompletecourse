import React, { Component } from "react";

const Namedanddefault =()=>{
    return (
<>
<h6 className="d-inline">this is named Component</h6>
</>
    );
}

const Namedanddefault2=()=>{
    return(
<>
<h6 className="d-inline">this is also named Component</h6>
</>
    );
}
export const Namedanddefault3=()=>{
    return(
<>
<h6 className="d-inline">this is also named Component</h6>
<Namedanddefault6></Namedanddefault6>
</>
    );
}
 const Namedanddefault6=()=>{
    return(
<>
<h6 className="d-inline">this is Namedanddefault6 Component</h6>
</>
    );
}

const Namedanddefault4=()=>{
    return(
<>
<h6 className="d-inline">this is default Component</h6>
</>
    );
}

export {Namedanddefault,Namedanddefault2};
export default Namedanddefault4;
// default function 1  say ziyada  ham export nahi krsaktay
// named Component 1 say ziyada export kr sktay hay