"use client"
import Image from "next/image"
const Services = () => {
    return (
        <>
            <section className="p-2 h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between w-[100%]" id="services">
                <h1 className="p-2 text-3xl uppercase text-center font-bold text-orange-500 w-full">Services</h1>
                <h3 className="text-md text-black dark:text-white font-bold">Empowering Your Learning Journey with Exceptional Offerings</h3>
                <div className="p-3 md:p-5 services-container gap-3 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between w-[100%]">
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md md:p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/internship.png"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}
                        className="p-2"/>
                        <h1 className="px-4 py-2 text-lg font-bold text-orange-500">Student Internship Program</h1>
                        <p className="px-2 py-2 text-black dark:text-white text-justify">
                            1. Hands-on learning through real-world projects.<br/>
                            2. Industry exposure and experience with mentorship.<br/>
                            3. Skill enhancement and practical application of knowledge.<br/>
                        </p>
                    </div>
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/courses.png"
                        alt="SportsBuddy Logo"
                        width={70}
                        height={70}
                        className="p-2"/>
                        <h1 className="p-3 text-lg font-bold text-orange-500">Skill Enhancement Courses (Future Offering)</h1>
                        <p className="px-2 py-2 text-black dark:text-white text-justify">
                            1. Comprehensive courses designed to elevate your expertise.<br/>
                            2. Learn from industry professionals and experienced instructors.<br/>
                            3. Gain valuable skills to excel in your chosen field.<br/>
                        </p>
                    </div>
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/app-development.png"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}/>
                        <h1 className="text-lg font-bold text-orange-500">Project Development and Sales</h1>
                        <p className="px-2 py-2 text-justify text-black dark:text-white">
                            1. Customized projects crafted to meet client requirements.<br/>
                            2. Solutions tailored to address specific business needs.<br/>
                            3. High-quality projects available for purchase.<br/>
                        </p>
                    </div>
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/events.png"
                        alt="SportsBuddy Logo"
                        width={70}
                        height={70}
                        className="p-2"/>
                        <h1 className="py-2 text-lg font-bold text-orange-500">Quiz and Hackathon Events (Future Offering)</h1>
                        <p className="px-2 py-3 text-black dark:text-white text-justify">
                            1. Engaging quiz competitions to test and expand your knowledge.<br/>
                            2. Exciting hackathon challenges to showcase your problem-solving skills.<br/>
                            3. Networking opportunities and recognition for top performers.<br/></p>
                    </div>
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/professiondev.png"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}
                        className="p-2"/>
                        <h1 className="py-1 text-lg font-bold text-orange-500">Professional Development Workshops (Future Offering)</h1>
                        <p className="px-2 py-2 text-black dark:text-white text-justify">
                            1. Specialized workshops designed to enhance career-related skills.<br/>
                            2. Practical insights from industry experts to stay ahead in your field.<br/>
                            3. Learn about current trends, best practices, and emerging technologies.</p>
                    </div>
                    <div className="service-box w-full h-[50vh] md:w-[30%] rounded-md p-5 shadow-lg shadow-orange-500 dark:shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/messages.png"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}
                        className="p-2"/>
                        <h1 className="py-2 text-lg font-bold text-orange-500">Career Counselling and Guidance</h1>
                        <p className="px-2 py-3 text-black dark:text-white text-justify">
                            1. Personalized guidance to help you make informed career decisions.<br/>
                            2. Identify your strengths, interests, and opportunities for growth.<br/>
                            3. Receive advice on potential career paths and skill development.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services