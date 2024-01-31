"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
const Footer = () => {
  return (
    <footer className="flex flex-col justify-between dark:bg-slate-800 dark:text-white relative z-30 shadow-lg shadow-blue-300">
      <div className="p-10 footer-head flex flex-col md:flex-row justify-between">
        <div className="footer_link1">
          <span className="px-2 py-4 border-b-2 border-orange-500 dark:border-white font-bold text-orange-500">Menu</span>
          <ul className="py-4 flex flex-col">
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">Home</Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">About</Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">Internship</Link>
            <Link href='/services' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">Services</Link>
            <Link href='/services' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">Announcement</Link>
            <Link href='/contact' className="px-2 py-4 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-bold">Contact Us</Link>
          </ul>
        </div>
        <div className="footer_link2">
          <span className="px-2 py-4 border-b-2 border-orange-500 dark:border-white font-bold text-orange-500">Our SIP</span>
          <ul className="py-4 flex flex-col">
            <Link href='/privacypolicy' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Web Development</Link>
            <Link href='/termscondition' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Python Development
            </Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Java Development</Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Data Science & Machine Learning</Link>
          </ul>
        </div>
        <div className="footer_link3">
          <span className="px-2 py-4 border-b-2 border-orange-500 dark:border-white font-bold text-orange-500">Our Community</span>
          <ul className="py-4 flex flex-col">
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">FAQ</Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Help Center</Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Privacy Policy
            </Link>
            <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-orange-500 font-bold">Terms & Conditions</Link>
          </ul>
        </div>
        <div className="footer_container1 flex flex-col justify-center">
          <span className="px-2 py-4 border-b-2 border-orange-500 dark:border-white font-bold text-orange-500">Subscribe to Newsletter</span>
          <form className="py-6" name="f1">
            <div className="newsletter-form flex flex-col rounded-full">
                <input type="email" name="emailid" placeholder="Email Address" className="font-bold w-full px-4 py-2 outline-none bg-transparent border-2 border-orange-500 dark:border-white placeholder:text-orange-500 dark:placeholder:text-white text-orange-500 dark:text-white rounded-full"/>
                <Button 
                  type="button"
                  title="Subscribe"
                  variant="mt-2 py-2 text-white dark:text-black font-bold border-0 rounded-full bg-orange-500 dark:bg-white"/>
            </div>
          </form>
          <div className="flex items-center justify-between h-auto w-auto">
            <Link href='https://www.linkedin.com/in/virendrakalwar/'>
              <div className="icon1 p-2 bg-white border-8 border-orange-500 rounded-full">
                <Image src="/linkedin.gif"
                alt="linkedin"
                width={60}
                height={60}/>
              </div>
            </Link>
            <Link href='https://www.instagram.com/codecipher_virendra/'>
              <div className="icon2 p-2 bg-white border-8 border-orange-500 rounded-full">
                <Image src="/instagram.gif"
                alt="instagram"
                width={60}
                height={60}/>
              </div>
            </Link>
            <Link href='https://wa.me/message/CGOH3Q2CTWMXE1'>
              <div className="icon p-2 bg-white border-8 border-orange-500 rounded-full">
                <Image src="/Whatsapp.gif"
                alt="whatsapp"
                width={60}
                height={60}/>
              </div>
            </Link>
          </div>
          <span className="mt-4 px-2 py-4 border-b-2 border-orange-500 dark:border-white font-bold text-orange-500">Contact Us</span>

          <div className="contact-details p-2">
              <span><b>Admin Officer</b> <br/> +91 8108652773</span><br/>
              <span><b>Email Officer</b> <br/> admin@codecrafters.infinityfreeapp.com</span>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col bg-orange-500">
        <p className="text-center text-white text-md font-bold">© 2024 | Code Crafters Community ® . All Rights Reserved</p>

        <p className="p-2 text-xl text-center font-bold text-white">In Collaboration With</p>

        <div className="flex flex-col md:flex-row items-center justify-center">
            <Image src="/msmelogo.png"
            alt="Code Crafters Logo"
            width={150}
            height={100} className="p-2"/>
        
            <Image src="/aictelogo.png"
            alt="Code Crafters Logo"
            width={120}
            height={120} className="p-2"/>

        </div>
      </div>
      
    </footer>
  )
}
export default Footer
