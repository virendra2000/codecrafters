"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { INTERNSHIP_DETAIL } from "@/constants"
const Internship = () => {
    return (
        <>
            <section className="p-2 h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between w-[100%]" id="services">
                <h1 className="p-2 text-3xl uppercase text-center font-bold text-orange-500 w-full">Services</h1>
                <h3 className="text-md text-black dark:text-white font-bold">Empowering Your Learning Journey with Exceptional Offerings</h3>
                <div className="p-3 md:p-5 services-container gap-3 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between w-[100%]">
                {INTERNSHIP_DETAIL.map((intern) => ( 
                    <div key={intern.key} className="service-box w-full h-[60vh] md:w-[30%] rounded-md md:p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src={intern.image_url}
                        alt={intern.alt}
                        width={80}
                        height={80}
                        />
                        <h1 className="px-4 py-2 text-lg font-bold text-orange-500">{intern.title}</h1>
                        <p className="px-2 py-2 text-black dark:text-white text-justify">
                            {intern.detail1}<br/>
                            {intern.detail2}<br/>
                            {intern.detail3}<br/>
                            {intern.detail4}<br/>
                            {intern.detail5}<br/>
                        </p>
                        <Link href={intern.href}>
                        <Button 
                        type="button"
                        title="Apply"
                        variant="border-0 font-bold px-8 py-4 transition-all rounded-full bg-orange-500 dark:bg-white hover:bg-transparent dark:hover:bg-transparent border-0 border-orange-500 dark:border-white hover:border-2 text-white dark:text-black hover:text-orange-500 dark:hover:text-white"/>
                    </Link>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}
export default Internship