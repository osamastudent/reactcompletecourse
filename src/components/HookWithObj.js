
import React, { useState } from "react";

const HookWithObj = () =>{
    const myArr2= {
        name:"osama",
        age:25,
        class:"diploma",
        isMarried:true,
    }
    const [person,setPerson]=useState(myArr2);

    const changData = () =>{
        setPerson(
          {
        name:"updated name",
        age:"updated age",
        class:"updated class",
        isMarried:"No",
          }  
        );
    }
    const changSingle = () =>{
       setPerson(previousState=>{
        return{
            ...previousState,
name:"change single",
        }
       });
    }
    return(
<>
<h6>hook with object</h6>
<p>{person.name}</p>
<p>{person.age}</p>
<p>{person.class}</p>
<p>{person.isMarried.toString()}</p>

<button onClick={changData}>change data</button>
<button onClick={changSingle}>change Single</button>
</>

);
}

export default HookWithObj;





// import React, { useState } from "react";
// const HookWithObj = () =>{
// const Data=[
// {
// name:"osama",
// age:25,
// isMarried:true,
// },
// {
//     name:"aftab",
//     age:27,
//     isMarried:true,
//     },
// {
//     name:"naseer",
//     age:29,
//     isMarried:true,
//         },
// {
//     name:"Yasir",
//     age:20,
//     isMarried:false,
//     }
// ];


// const [person,setPerson]=useState(Data);
// return (
// <>
// HookWithObj
// {person.map((person,index)=>
// <li key={index}>
//     {person.name}
//     &nbsp;
//     {person.age}
//     &nbsp;
//     {person.isMarried.toString()}
// </li>

// )}

// {/* {Data.map((Data,index)=>
// <li key={index}>
//     {Data.name}
//     &nbsp;
//     {Data.age}
//     &nbsp;
//     {Data.isMarried ? "Married" : "Single"}
// </li>
// )} */}
// </>

// );
// }

// export default HookWithObj;
