import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Soon...😊</h1>
      <Link to="dashboard/mobiles">Mobiles</Link>
      <br />
      <Link to="dashboard/laptops">Laptops</Link>

      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
