import Navbar, { UserProps } from '@/components/Navbar'
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react'

const HomepageLayout = async({children} : {children: ReactNode}) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
        <Navbar session={session as UserProps} />
        {children}
    </div>
  )
}

export default HomepageLayout