"use client";

import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Nav } from "./ui/nav";

const SideNavbar = () => {
  return (
    <div>
      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            href: "/",
            variant: "default",
          },
          {
            title: "Users",
            icon: UsersRound,
            href: "/users",
            variant: "ghost",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            href: "/orders",
            variant: "ghost",
          },
          {
            title: "Settings",
            icon: Settings,
            href: "/settings",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
