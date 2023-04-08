"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3  ">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-4 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
        >
          Airbnb your home
        </div>

        <DropdownMenu.Root >
          <DropdownMenu.Trigger asChild className="hidden md:flex">
            <div className="py-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
              <AiOutlineMenu />
              <div className="sm:block hidden ">
                <Avatar />
              </div>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className=" rounded-xl shadow-md min-w-[220px]     overflow-hidden bg-white text-sm z-10 "
              sideOffset={10}
            >
              <DropdownMenu.Item className="px-4  py-3 hover:bg-neutral-100 font-semibold  ">
                {" "}
                Signup
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4   py-3 hover:bg-neutral-100 font-semibold ">
                {" "}
                Logoff
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default UserMenu;
