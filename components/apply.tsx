"use client"
import { INTERNSHIP_DETAIL } from "@/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
const Apply = () => {
    // const router = useRouter();
    const searchparams = useSearchParams();
    const [internshipKey, setInternshipKey] = useState<string | undefined>(undefined);
  
    // Use useEffect to set the internshipKey once useRouter is available
    const key = searchparams.get('internshipKey');
    useEffect(() => {
      if (key) {
        setInternshipKey(key as string);
      }
    }, [key]);
  
    const selectedInternship = INTERNSHIP_DETAIL.find(
      (internship) => internship.key === internshipKey
    );
  
    if (!selectedInternship) {
      return <p>Internship not found!</p>;
    }
    return (
        <>
            {/* {selectedInternship.title} */}
            <section className="applypage p-2 h-auto w-full dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between">
              <form className="p-2 w-[100%] flex flex-col md:flex-row items-center justify-center gap-5">
                <div className="internshipdetail p-5 md:p-2 w-[100%] md:w-[45%] flex flex-col rounded-md shadow-md shadow-orange-500 dark:shadow-black">
                    <Image src={selectedInternship.image_url}
                        alt={selectedInternship.alt}
                        width={80}
                        height={80}
                        className="p-2"
                        />
                    <h1 className="text-2xl py-2 font-bold text-orange-500">{selectedInternship.title}</h1>
                    <p className="text-md text-black dark:text-white">
                      {selectedInternship.detail1}<br/>
                      {selectedInternship.detail2}<br/>
                      {selectedInternship.detail3}<br/>
                      {selectedInternship.detail4}<br/>
                      {selectedInternship.detail5}
                    </p>
                  </div>
                <div className="registrationform p-5 w-[100%] md:w-[45%] rounded-md shadow-md shadow-orange-500 dark:shadow-black">
                  <h1 className="text-2xl py-2 text-orange-500 font-bold">Code Crafters SIP Program Registration Form</h1>

                  <div className="form w-full p-2 flex flex-col gap-3">
                      <input type="text" name="fname" id="t1" placeholder="Full Name" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="email" name="email" id="t2" placeholder="Email" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="text" name="mobileno" id="t3" placeholder="Mobile Number" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="text" list="genderlist" name="gender" id="t4" placeholder="Gender" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>
                      <datalist id="genderlist">
                        <option value="Male"/>
                        <option value="Female"/>
                      </datalist>

                      <input type="text" name="internshipname" id="t5" placeholder="Internship Name" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" value={selectedInternship.internship} required/>

                      <input type="text" name="collegename" id="t6" placeholder="College Name" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="text" list="qualificationlist" name="qualification" id="t7" placeholder="Education Qualification" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>
                      <datalist id="qualificationlist">
                        <option value="Secondary Education"/>
                        <option value="Higher Secondary Education"/>
                        <option value="Bachelors (B.E/BTech/BSCIT)"/>
                        <option value="Masters (M.E/MTech/MSCIT)"/>
                        <option value="PHD"/>
                        <option value="Diploma"/>
                      </datalist>

                      <input type="text" list="category" name="specializecategory" id="t8" placeholder="Qualification Specialization" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>
                      <datalist id="category">
                        <option value="Commerce"/>
                        <option value="Science"/>
                        <option value="Computer Engineering / Computer Science"/>
                        <option value="Computer Science with AI ML"/>
                        <option value="Computer Science with Data Science"/>
                        <option value="Computer Science with Cybersecurity"/>
                        <option value="Information Technology"/>
                        <option value="Electronics and Telecommunication Engineering"/>
                      </datalist>

                      <input type="text" list="year" name="qualificationyear" id="t9" placeholder="Qualification Year" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>
                      <datalist id="year">
                        <option value="Second Year"/>
                        <option value="Third Year"/>
                        <option value="Final Year"/>
                      </datalist>

                      <input type="text" name="skill" id="t10" placeholder="Skill" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>
                      <label className="text-red-500 font-bold">Note* : Include Your Multiple Skill ( Comma Seperated )</label>

                      <input type="text" name="url1" id="t11" placeholder="Linkedin Profile URL" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="text" name="url2" id="t12" placeholder="Github Profile URL" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="text" name="url3" id="t13" placeholder="Portfolio/Resume URL" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <input type="password" name="password" id="t14" placeholder="Password" className="px-2 py-2 outline-none w-full border-b-2 border-orange-500 bg-transparent font-bold text-orange-500 placeholder-orange-500 dark:placeholder-white" required/>

                      <Button 
                        type="button"
                        title="Apply"
                        variant="m-2 px-2 py-2 w-[30%] rounded-md border-0 font-bold bg-orange-500 text-white hover:bg-transparent border-0 border-orange-500 hover:border-2 dark:hover:text-white hover:text-orange-500"/>
                  </div>
                </div>
              </form>
            </section>
        </>
    )
}
export default Apply