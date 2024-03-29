import React, { Component } from "react";
import PassingMethod from './PassingMethod';
const MapFun = () =>{
const arr=["osama","aftab","naseer","aiza","siyam","affan"];
const num=[10,20,30,40];

const students=[
{
name:"osama janab",
age:5,
},
{
name:"affan janab",
age:25,
},
{
name:"commando janab",
age:30,
}
];


const lahorQalandar=[
{
    captain:"Captain shaheen shah afridi",
player1:"alex hales",
player2:"shadab khan",
},
{
    captain:"Captain daren sami",
player1:"kamran akmal",
player2:"ahmad shahzad",
}
];
return(
<>
MapFun
{/* {arr.map(arr=> <b>{arr }</b>)} */}
{/* {num.map(numData => <p>{numData}</p>)} */}
{num.map((numData,index) => <p key={index}>{numData}</p>)}
{/* {num.map(numData => <p>{numData*2}</p>)} */}
{students.map((student,index) => <li key={index}>{index} {student.name}</li>)}
{/* {students.map(students => <p>{students} </p>)} */}
{/* {students.map(listData => <PassingMethod listData={listData} />)} */}

<br></br>
{lahorQalandar.map((lahorQalandar,index)=><ul key={index} >
    <li>{lahorQalandar.captain}</li>
<li>{lahorQalandar.player1}</li>
<li> {lahorQalandar.player2}</li>
</ul>)}
</>
);
}


export default MapFun;