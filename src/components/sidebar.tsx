"use client";

import { Home, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`bg-white border-r transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <h2 className="font-bold text-xl">Store</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      <nav className="mt-4">
        <Link
          href="/"
          className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            pathname === "/" ? "bg-gray-100 border-r-2 border-gray-500" : ""
          }`}
        >
          <Home className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Home</span>}
        </Link>
        <Link
          href="/profile"
          className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            pathname === "/profile"
              ? "bg-gray-100 border-r-2 border-gray-500"
              : ""
          }`}
        >
          <User className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Profile</span>}
        </Link>
      </nav>
    </div>
  );
}
