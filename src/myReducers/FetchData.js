import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';

export default function FetchData() {
    const [data,setData]=useState([]);
    useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
              response.json().then((result)=>{
                // console.log(result)
                setData(result);
            })
        })
    })
  return (
    <div>
        <h1>FetchData,Resolved=completed promise, Rejected=failed promise,Pending=initial state before the secceeds or fails</h1>
        
                <Container>
                 <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {/* {data.map(data=>{
            return(
        <tr>
          <td>{data.userId}</td>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.body}</td>
        </tr>
        )
        })} */}

         {data.map(data=>(
        <tr>
          <td>{data.userId}</td>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.body}</td>
        </tr>
    ))}
      </tbody>
    </Table>
    
    </Container>
           
    </div>
  )
}
