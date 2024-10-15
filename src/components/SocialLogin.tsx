"use client";
import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const SocialLogin = () => {
  return (
    <section className='flex items-center justify-center gap-2'>
        <Button onClick={() => signIn('google', {
          callbackUrl: 'http://localhost:3000/dashboard'
        })} variant='outline'>
            <FaGoogle/>
        </Button>
        <Button onClick={() => signIn('github', {
          callbackUrl: 'http://localhost:3000/dashboard'
        })} variant='outline'>
            <FaGithub/>
        </Button>
    </section>
  )
}

export default SocialLogin