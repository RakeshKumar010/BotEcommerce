import React from 'react'
import { Outlet } from 'react-router-dom'
import Ssidebar from '../components/superadmin/Ssidebar'

const SuperAdmin = () => {
  return (
    <div>
      <Ssidebar />
      <Outlet />
    </div>
  )
}

export default SuperAdmin