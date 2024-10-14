import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const HomepageLayout = ({children} : {children: ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default HomepageLayout