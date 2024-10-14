import React from 'react'
import UserCard, { UserCardContent, UserCardProps } from './UserCard';
import { User } from 'lucide-react';

const userCardData : UserCardProps[] = [
    {
        icon: User,
        name : 'Olivia Martin',
        email: 'olivia.martin@email.com',
        amount: '+$1,999.00'
    },
    {
        icon: User,
        name : 'Isabella Nguyen',
        email: 'isabella.nguyen@email.com',
        amount: '+$39.00'
    },
    {
        icon: User,
        name : 'Jackson Lee',
        email: 'jackson.lee@email.com',
        amount: '+$39.00'
    },
    {
        icon: User,
        name : 'William Kim',
        email: 'will@email.com',
        amount: '+$99.00'
    },
    {
        icon: User,
        name : 'Sofia Davis',
        email: 'sofia.davis@email.com',
        amount: '+$39.00'
    }
]

const RecentSales = () => {
  return (
    <div>
        <div>
            <h1 className='text-base font-semibold text-[#09090b]'>Recent Sales</h1>
            <p className='text-sm text-gray-500 mt-[6px]'>You made 265 sales this month.</p>
        </div>
        
        {/* Recent sales user card */}
        <div className='mt-8  '>
            {
                userCardData.map(user => <UserCard icon={user.icon} name={user.name} email={user.email} amount={user.amount} />)
            }   
        </div>
    </div>
  )
}

export default RecentSales;


