"use client"
import Image from "next/image"
import Link from "next/link"
const About = () => {
    return (
        <>
            <section className="h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between" id="about">
                <div className="p-5 about-container w-full flex flex-col md:flex-row-reverse items-center justify-center">
                    <div className="info w-auto md:w-[40%] flex flex-col items-start justify-start">
                        <h1 className="p-2 text-3xl text-left uppercase font-bold text-orange-500">About Us</h1>
                        <h2 className="p-2 text-xl font-bold text-black dark:text-white text-justify">Empowering Students for Success Through Practical Learning</h2>
                        <p className="p-2 text-lg dark:text-white text-justify">We are Code Crafters Community, an IT training and products company that helps businesses and individuals achieve their goals and reach their full potential. We understand that the tech landscape is constantly evolving, and we are committed to helping you stay ahead of the curve. Our team of experts offers a wide range of IT training and products to help businesses and individuals of all levels achieve their goals. Whether you are looking to learn new skills, upgrade your existing technology, or simply stay up-to-date on the latest trends, we have the resources you need to succeed.</p>
                    </div>
                    <div className="illustrate w-full md:w-[50%]">
                        <Image src="/illustrate_internship2.svg"
                        alt="SportsBuddy Logo"
                        width={600}
                        height={600} className="p-10"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About