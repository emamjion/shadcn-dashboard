"use client";

import React from 'react'
import NavigationBar from './NavigationBar'
import Link from 'next/link'
import { Button } from './ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
import { signOut } from 'next-auth/react';

export type UserProps = {
    user: {
        email? : string;
        name? : string;
        image? : string;
    }
}


const Navbar = ({session} : {session : UserProps}) => {
  return (
    <header className='container mx-auto my-6'>
        <nav className='flex justify-between'>
            <div>
                <h1>Hirehub</h1>
            </div>
            <div>
                <NavigationBar/>
            </div>
            <div>
                {session?.user ? <div className='flex items-center gap-2'>
                    <Avatar>
                        <AvatarImage src={session?.user?.image} alt="User image" />
                        <AvatarFallback>NU</AvatarFallback>
                    </Avatar>
                    <Button onClick={() => signOut()} >Logout</Button>
                </div> : <Link href={'/login'}>
                    <Button >Login</Button>
                </Link>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar