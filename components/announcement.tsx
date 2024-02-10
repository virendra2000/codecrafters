"use client"
import Button from "./Button"
import Link from "next/link"
import { ANNOUNCEMENT_LIST } from "@/constants"
const Announcement = () => {
    return (
        <>
            <section className="p-2 h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between w-full">
                <h1 className="py-4 text-3xl uppercase text-center font-bold text-orange-500 w-full">Announcement</h1>

                <div className="w-full p-5 flex flex-col items-center justify-center">
                    <table className="w-full font-bold flex flex-col items-center justify-center rounded-md overflow-hidden">
                        <thead className="w-full">
                            <tr className="w-[100%] md:px-20 text-center">
                                <td className="p-5 bg-orange-500 text-white">Sr No.</td>
                                <td className="p-5 bg-orange-500 text-white w-[100%]">Announcements</td>
                                <td className="px-11 bg-orange-500 text-white">Link/Source</td>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                        {ANNOUNCEMENT_LIST.map((list) => (
                            <tr key={list.key} className="w-full px-5 md:px-20 text-center">
                                <td className="p-5 bg-slate-300 text-black w-[6%]">{list.key}</td>
                                <td className="p-5 bg-slate-300 text-black w-[100%]">{list.announcement_name}</td>
                                <td className="p-2 bg-slate-300 text-black ">
                                    <Link href={list.href}>
                                        <Button 
                                        type="button"
                                        title={list.label}
                                        variant="border-0 font-bold px-4 py-4 transition-all rounded-full bg-orange-500 hover:bg-transparent border-0 border-orange-500 hover:border-2 text-white dark:text-black hover:text-orange-500"/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        
                    </table>
                </div>
            </section>
        </>
    )
}
export default Announcement