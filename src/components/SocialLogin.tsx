import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SocialLogin = () => {
  return (
    <section className='flex items-center justify-center gap-2'>
        <Button variant='outline'>
            <FaGoogle/>
        </Button>
        <Button variant='outline'>
            <FaGithub/>
        </Button>
    </section>
  )
}

export default SocialLogin