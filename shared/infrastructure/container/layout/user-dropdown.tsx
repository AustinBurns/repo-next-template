"use client";

import { useState } from "react";
import {
  ScrollIcon,
  LogOut,
  ListTodoIcon,
  ChefHatIcon,
  SettingsIcon,
} from "lucide-react";
import Popover from "@shared/infrastructure/container/popover";
import Image from "next/image";
import Link from "next/link";

export default function UserDropdown({
  handleSignOut,
  email,
}: {
  handleSignOut: () => void;
  email: string;
}) {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <Link
              href="/member/generate-meal-options"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <ChefHatIcon className="h-4 w-4" />
              <p className="text-sm">Generate meal options</p>
            </Link>
            <Link
              href="/member/current-meal-plan"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <ScrollIcon className="h-4 w-4" />
              <p className="text-sm">Current meal plan</p>
            </Link>
            <Link
              href="/member/pantry-items"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <ListTodoIcon className="h-4 w-4" />
              <p className="text-sm">Pantry items</p>
            </Link>
            <Link
              href="/member/settings"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <SettingsIcon className="h-4 w-4" />
              <p className="text-sm">Settings</p>
            </Link>
            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => handleSignOut()}
            >
              <LogOut className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={email}
            src={`https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </div>
  );
}
