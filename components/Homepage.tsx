"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
const Homepage = () => {
    return (
        <>
            <header className="h-auto w-full bg-slate-100 dark:bg-slate-800 flex flex-col  md:flex-row items-center justify-center md:justify-between">
                <div className="header-container w-full flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="p-2 head-title w-full md:w-[40%] flex flex-col items-center md:items-start justify-center md:justify-start">
                        <h2 className="p-2 text-2xl text-center md:text-left uppercase font-bold text-orange-500">Student Internship Program 2024</h2>
                        <h1 className="p-2 text-lg text-center md:text-left font-bold text-black dark:text-white">Unlock Your Potential, Gain Experience, and Shape Your Future</h1>
                        <p className="p-2 text-md text-justif text-black dark:text-white">Whether you are looking to learn new skills, upgrade your existing technology, or simply stay up-to-date on the latest trends, we have the resources you need to succeed. contact us today to learn more about our services.</p>

                        <Link href="/register">
                            <Button 
                            type="button"
                            title="Get Started"
                            variant="m-2 px-2 py-2 w-full rounded-full border-0 font-bold bg-orange-500 text-white hover:bg-transparent border-0 border-orange-500 hover:border-2 dark:hover:text-white hover:text-orange-500"/>
                        </Link>
                    </div>
                    <div className="illustration p-10 md:w-[50%] flex items-center justify-center rounded-full">
                        <Image src="/illustrate_internship.svg"
                        alt="SportsBuddy Logo"
                        width={400}
                        height={400} className="p-2"/>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Homepage