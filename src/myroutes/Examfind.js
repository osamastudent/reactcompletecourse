import React from 'react'
import { useParams } from 'react-router-dom';

export default function Examfind() {
        const userId=useParams();
    const id=userId.id;
// const {id}=useParams();
  return (
    <div>
        <h1>Your Exam Here.. {id}</h1>

    </div>
  )
}
