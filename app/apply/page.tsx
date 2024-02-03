"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Apply from "@/components/apply"
import { Suspense } from 'react'
export default function Page() {
    return (
      <>
        <Navbar />
        <Suspense>
          <Apply />
        </Suspense>
        <Footer />
      </>
    )
  }