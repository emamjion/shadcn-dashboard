import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react'
import React, { HtmlHTMLAttributes } from 'react'

export type UserCardProps = {
    icon: LucideIcon;
    name : string;
    email: string;
    amount : string;
}

const UserCard = (props: UserCardProps) => {
  return (
    <UserCardContent>
        <section className='flex items-center justify-between space-y-8'>
            {/* user part */}
            <div className='flex'>
                {/* user avater */}
                <div className=''>
                    <props.icon className='h-10 w-10 p-2 rounded-full shadow bg-gray-100 flex items-center justify-center' />
                </div>
                {/* user info */}
                <div className='ml-4'>
                    <h1 className='font-semibold text-sm'>{props.name}</h1>
                    <p className='text-sm text-gray-500'>{props.email}</p>
                </div>
            </div>

            {/* amount part */}
            <div>
                <h1 className='font-[600]'>{props.amount}</h1>
            </div>
        </section>              
    </UserCardContent>
  )
}

export default UserCard;


export const UserCardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div  
            {...props}
            className={cn("w-full flex flex-col        ", props.className)}
        />
            
    )
}