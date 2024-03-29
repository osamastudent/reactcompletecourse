import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Clothes extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h3>all Clothes Are available.</h3>
        <Link to="cotton">Cotton</Link>
        <Outlet></Outlet>
      </div>
    )
  }
}
