import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuItem>
            
                <NavigationMenuItem>
                    <Link href='/dashboard'>
                        <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    </Link>
                </NavigationMenuItem>
            
            <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationBar;
