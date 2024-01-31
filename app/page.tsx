"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Homepage from "@/components/Homepage";
import About from "@/components/about";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Internship from "@/components/internship";
export default function Home() {
  return (
    <>
        <Navbar />
        <Homepage />
        <About />
        <Internship />
        <Services />
        <Contact />
        <Footer />
    </>
  );
}
