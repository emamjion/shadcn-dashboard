import PageTitle from '@/components/PageTitle';
import React from 'react';
import loginBg from '../../public/assets/login-img.png';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SocialLogin from '@/components/SocialLogin';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <section className='flex h-screen items-start mt-8 justify-center'>
        {/* registration form part */}
        <div className='w-full md:w-1/2 p-6 bg-[#F3F4F7] shadow flex flex-col items-center justify-center'>
          <h1 className='my-6 text-lg font-semibold text-gray-500'>Hirehub</h1>
          <div className='flex items-center gap-1'>
            <h1 className='text-2xl font-medium'>Hello,</h1>
            <h1 className='text-4xl font-bold'>Welcome!</h1>
          </div>
          <div className='mt-6'>
            <form className='w-[300px]'>
              <div>
                <label className='text-gray-500 mb-1 text-sm' htmlFor="Username">Username</label>
                <Input type="text" placeholder="username" />
              </div>
              <div className='mt-2'>
                <label className='text-gray-500 mb-1 text-sm' htmlFor="email">Email</label>
                <Input type="email" placeholder="email" />
              </div>
              <div className='mt-2'>
                <label className='text-gray-500 mb-1 text-sm' htmlFor="password">Password</label>
                <Input type="password" placeholder="password" className='' />
              </div>
              <div className='mt-6 flex items-center justify-center'>
                <Button type='submit' className='w-full font-medium'>Signup</Button>
              </div>
            </form>
            <div className='flex items-center justify-center my-4 w-[300px]'>
              <p className='text-sm text-gray-500'>Already have an account?</p><Link className='ml-0.5 font-semibold' href={'/login'}>Login</Link>
            </div>
            <div className='border-b border-gray-200 my-6'></div>
            {/* social login */}
            <SocialLogin/>
          </div>
        </div>
        
        {/* registration image part */}
        <div className=''>
          <Image
            src={loginBg}
            width={500}
            height={400}
            alt='login image'
            className=''
          />
        </div>

        
    </section>
  )
}

export default RegisterPage;