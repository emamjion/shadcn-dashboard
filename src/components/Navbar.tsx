import React from 'react'
import NavigationBar from './NavigationBar'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className='container mx-auto my-6'>
        <nav className='flex justify-between'>
            <div>
                <h1>logo.</h1>
            </div>
            <div>
                <NavigationBar/>
            </div>
            <Link href={'/login'}>
                <Button >Login</Button>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar