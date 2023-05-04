import React from 'react'
import Link from 'next/link';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton
} from "@material-tailwind/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc"
import { BsSearch } from "react-icons/bs"
import { FiKey } from "react-icons/fi"

const Navbar = () => {
    return (
        <div className='flex container mx-auto p-6 border-b border-gray-300 justify-between items-center'>
            <div className='text-3xl font-bold text-blue-500'>
                <Link href="/" class='pl-3'>Realtor</Link>
            </div>
            <div>
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <MenuHandler>
                        <IconButton color='white' className="">
                            <FcMenu className='text-xl' />
                        </IconButton>
                    </MenuHandler>

                    <MenuList className='menuList'>
                        <MenuItem className="gap-2">
                            <Link href="/" class='flex items-center' passHref>
                                <FcHome className="h-6 w-4" />
                                Home
                            </Link>
                        </MenuItem>

                        <MenuItem className="gap-2">
                            <Link href="/Search" class='flex items-center' passHref>
                                <BsSearch className="h-6 w-4" />
                                Search
                            </Link>
                        </MenuItem>

                        <MenuItem className="gap-2">
                            <Link href="/Search?purpose=for-sale" class='flex items-center' passHref>
                                <FcAbout className="h-6 w-4" />
                                Buy Property
                            </Link>
                        </MenuItem>
                        <MenuItem className="gap-2">
                            <Link href="/Search?purpose=for-rent" class='flex items-center' passHref>
                                <FiKey strokeWidth={2} className="h-6 w-4" />
                                Rent Property
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
