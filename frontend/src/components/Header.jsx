import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { GoMoon } from "react-icons/go";
import { LuSunDim } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { ThemeSwitcher } from './ThemeSwitcher';


const Header = () => {
  const [toggle, setToggle] = useState(false); 

  // Correct way to toggle the theme
  const toggleThemes = () => setToggle(prev => !prev);

  return (
    <>
      <Navbar isBordered className='w-full'>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4 space-x-3">
            {/* <AcmeLogo /> */}
            <h1 className='text-2xl font-bold md:hidden block'>RL</h1>
            <p className="hidden md:block font-bold text-inherit">Social</p>
          </NavbarBrand>

          <NavbarContent justify='center' className="hidden sm:flex gap-5">
            <NavbarItem>
              <LuHome size={30}/>
            </NavbarItem>
            <NavbarItem>
              <FaUserFriends size={30}/>
            </NavbarItem>
            <NavbarItem>
              <MdOndemandVideo size={30}/>
            </NavbarItem>
            <NavbarItem>
              <MdOndemandVideo size={30}/>
            </NavbarItem>
            <NavbarItem isActive>
              {/* <div onClick={toggleThemes} className='cursor-pointer'>
                {toggle ? <GoMoon size={30}/> : <LuSunDim size={30}/>}
              </div> */}
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        
        </NavbarContent>

        {/* Theme Toggle */}
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<IoSearch size={20} />}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
