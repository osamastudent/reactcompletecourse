
import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts";
export default function GetAxios() {
        
const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get(baseURL).then((response)=>{
            setData(response.data);
        });
    },[]);


  return (
    <div className='container'>
        <h1>How to Make a GET Request In AXIOS | Fetch Data Using Get Request In Axios | React (Hindi/Urdu)</h1>
        <br></br>
        <Link to="/postaxios"><h1>Post Axios</h1></Link>
        <table className='table table-bordered table-striped'>
    <thead>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
    </thead>
<tbody>
{data ? data.map(items=>{
    const {id,title,body}=items;
    return(
        <>
   <tr>
   <td>{id}</td>
    <td>{title.slice(0,10).toUpperCase()}</td>
    <td>{body}</td>
   </tr>
    </>
    )
}) : null}

</tbody>

{/* {data ? data.map(items=>{
return(
    <tr>
        <td>{items.id}</td>
        <td>{items.title}</td>
        <td>{items.body}</td>
    </tr>
)
}): "loading Data"} */}

</table>

{/* <li>
<strong>Id:</strong>
{data ? data.id : null}
</li>
<li> <strong>Title:</strong> {data ? data.title.slice(0,10) : null}
</li>
<li> <strong>Body: </strong> 
{data ? data.body.slice(0,30) : null}
</li> */}

    </div>
  );
}
