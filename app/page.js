'use client'
import Navbar from "@/components/navbar";
import ReferCircles from "@/components/ReferCircles";
import Hero from "@/components/Hero";
import HeroNavbar from "@/components/HeroNavbar";
import ReferralBenefitis from "@/components/ReferralBenefitis";
import ReferFaq from "@/components/ReferFaq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ReferPopup from "@/components/ReferPopup";
import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
export default function Home() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <main className="min-h-screen overflow-x-hidden  bg-white">
      <Toaster />
      <Navbar />
      <HeroNavbar />
      <Hero openPopup={openPopup} />
      <ReferCircles />
      <ReferralBenefitis />
      <ReferFaq openPopup={openPopup} />
      <Contact />
      <Footer />
      <ReferPopup isOpen={isPopupOpen} onClose={closePopup} />

    </main>
  );
}
