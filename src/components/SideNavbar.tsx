"use client";

import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Nav } from "./ui/nav";

const SideNavbar = () => {
  // const onlyWidth = useWindowWidth();
  // const mobileWidth = onlyWidth < 768;
  const [isCollapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute right-[-20px] top-7">
        <Button
          variant="secondary"
          className="rounded-full p-2"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            variant: "default",
          },
          {
            title: "Users",
            icon: UsersRound,
            href: "/dashboard/users",
            variant: "ghost",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            href: "/dashboard/orders",
            variant: "ghost",
          },
          {
            title: "Settings",
            icon: Settings,
            href: "/dashboard/settings",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
