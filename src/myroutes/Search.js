import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [search,setSearch]=useSearchParams();

    const formSubmit = (e) =>{
        e.preventDefault();
        // alert(search.get('q'));

        const data=search.get("q");
        const age=search.get("age");
        alert(data + " " + age);

    }
  return (
    <div className='mt-3'>   
        <button type='button' onClick={()=>setSearch({q:"showall"})}>Show all Users</button>
        <form onSubmit={formSubmit}>
            <input type='text' onChange={(e)=>setSearch({q:e.target.value})}></input>
            <input type='submit'></input>
            <input type='button' onClick={()=>setSearch({})} value="Reset"></input>
        </form>
    </div>
  )
}
