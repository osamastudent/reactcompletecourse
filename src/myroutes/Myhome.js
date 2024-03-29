import React from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import PraciceFormik from '../formikyup/PraciceFormik'
import MyBootstrap from './MyBootstrap'

export default function Myhome() {
  return (
    <div className='mt-3 container'>
      <h1>Home Component</h1>
      <NavLink to="/search">Search</NavLink>
     <PraciceFormik></PraciceFormik>
    

    <h1>this is Bootstrap</h1>
<MyBootstrap></MyBootstrap>

    </div>
  )
}
