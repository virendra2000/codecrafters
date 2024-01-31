"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import useDarkMode from "@/constants/useDarkMode"
import React, { useState } from 'react';
const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className="relative flex items-center justify-between dark:bg-slate-800 dark:text-white px-6 lg:px-20 3xl:px-0 z-30 py-5 shadow-lg shadow-gray-600">
                <Link href="/" className="w-auto flex flex-col items-center justify-center">
                    <Image src="/logo.png"
                    alt="Code Crafters Logo"
                    width={60}
                    height={60}/>
                    <h1 className="text-lg text-orange-500 font-bold font-">CODE CRAFTERS</h1>
                </Link>
                <ul className={`absolute md:relative top-24 md:top-0 bg-white dark:bg-slate-500 md:dark:bg-transparent w-[90%] md:w-auto h-fit md:h-full gap-12 md:flex p-5 rounded-md md:rounded-none md:p-0 ${menuOpen ? 'block md:flex' : 'hidden md:flex bg-transparent'}`}>
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="hover:text-orange-500 font-bold flex items-center justify-center cursor-pointer p-5 md:p-2 transition-all">
                            {link.label}
                        </Link>
                    ))}
                    <div className="gap-5 flex flex-col md:flex-row">
                    <Link href="/">
                        <Button 
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="border-0 font-bold hover:text-orange-500 px-8 py-4 transition-all md:hover:bg-black md:shadow-sm md:hover:shadow-md md:hover:dark:shadow-xl md:hover:shadow-black md:hover:dark:shadow-white md:dark:shadow-black md:shadow-white md:bg-black md:text-white md:dark:bg-black rounded-full"/>
                    </Link>
                    
                </div>
                </ul>
                <div className="flex items-center justify-center">
                {colorTheme === "light" ? (
                    <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-orange-500 block cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                    <svg
                        onClick={() => setTheme("dark")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-orange-500 block cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                )}
                    <Image 
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        onClick={toggleMenu}
                        className="inline-block cursor-pointer md:hidden dark:invert"
                    />
                </div>
            </nav>
        </>
    )
}
export default Navbar