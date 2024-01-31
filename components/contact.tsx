"use client"
import Button from "./Button"
const Contact = () => {
    return (
        <>
            <section id="contact" className="h-auto w-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center">
                <h1 className="p-5 text-3xl text-orange-500 font-bold uppercase">Contact Us</h1>
                <form className="w-full p-3">
                    <div className="contact-container w-full flex flex-col items-center justify-center">
                        <div className="p-2 field1 w-full md:w-[50%] flex flex-col md:flex-row items-center justify-between">
                            <input type="text" name="fname" id="t1" placeholder="First Name" className="py-2 px-4 outline-none bg-transparent border-b-2 border-orange-500 font-bold text-md text-green-500 placeholder:text-black dark:placeholder:text-white w-full md:w-[45%]"/>
                            <input type="text" name="lname" id="t2" placeholder="Last Name" className="mt-2 md:mt-0 py-2 px-4 outline-none bg-transparent border-b-2 border-orange-500 font-bold text-md text-green-500 placeholder:text-black dark:placeholder:text-white w-full md:w-[45%]"/>
                        </div>
                        <div className="p-2 field2 w-full md:w-[50%] flex flex-col md:flex-row items-center justify-between">
                            <input type="email" name="emailid" id="t3" placeholder="Email Address" className="py-2 px-4 outline-none bg-transparent border-b-2 border-orange-500 font-bold text-md text-green-500 placeholder:text-black dark:placeholder:text-white w-full md:w-[45%]"/>
                            <input type="text" name="fname" id="t4" placeholder="Mobile Number" className="mt-2 md:mt-0 py-2 px-4 outline-none bg-transparent border-b-2 border-orange-500 font-bold text-md text-green-500 placeholder:text-black dark:placeholder:text-white w-full md:w-[45%]"/>
                        </div>
                        <div className="p-2 field3 w-full md:w-[50%] flex flex-col md:flex-row items-center justify-between">
                            <textarea name="msg" id="t3" placeholder="Your Message" className="py-2 px-4 outline-none bg-transparent border-b-2 border-orange-500 font-bold text-md text-green-500 placeholder:text-black dark:placeholder:text-white w-full"/>
                        </div>
                        <Button 
                            type="button"
                            title="Send Message"
                            variant="m-2 px-2 py-2 md:w-[20%] rounded-full border-0 font-bold bg-orange-500 dark:bg-white text-white dark:text-black cursor-pointer dark:hover:bg-black dark:hover:text-white shadow-md hover:shadow-orange-500 dark:hover:shadow-black"/>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Contact