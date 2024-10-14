import SideNavbar from '@/components/SideNavbar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({children} : {children : ReactNode}) => {
  return (
    <div className={`w-full min-h-screen bg-white text-black flex`}>
        {/* Sidebar */}
        <SideNavbar />
        
        {/* Dashboard main page */}
        <div className="p-8 w-full">{children}</div>
    </div>
  )
}

export default DashboardLayout