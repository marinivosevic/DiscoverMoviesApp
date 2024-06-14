import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavMenu } from '../components/NavMenu'

const Root = () => {
  return (
    <div>
        <NavMenu />
        <Outlet />
    </div>
  )
}

export default Root