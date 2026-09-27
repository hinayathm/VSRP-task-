import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutStats from './components/AboutStats'
import CapabilitiesIntro from './components/CapabilitiesIntro'
import ProductBanner from './components/ProductBanner'
import WhyVsrp from './components/WhyVsrp'
import Industries from './components/Industries'
import Process from './components/Process'
import FeaturedProjects from './components/FeaturedProjects'
import Faq from './components/Faq'
import Insights from './components/Insights'
import ContactCta from './components/ContactCta'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false)

  const handleOpenContact = () => setShowContactModal(true)
  const handleCloseContact = () => setShowContactModal(false)

  return (
    <div className="bg-dark-custom min-vh-100 position-relative text-white">
      {/* 1. Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      <main>
        {/* 2. Hero Section (Hero-1.png) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. About & Stats (About and Stats-2.png) */}
        <AboutStats onOpenContact={handleOpenContact} />

        {/* 4. Capabilities Intro (Capabilities Intro-3.png) */}
        <CapabilitiesIntro />

        {/* 5. Product Banner (Product Banner-4.png) */}
        <ProductBanner onOpenContact={handleOpenContact} />

        {/* 6. Why VSRP (Why VSRP-5.png) */}
        <WhyVsrp />

        {/* 7. Industries Showcase (Industries-6.png) */}
        <Industries onOpenContact={handleOpenContact} />

        {/* 8. Process & CAD Blueprint (Process-7.png) */}
        <Process />

        {/* 9. Featured Projects (Featured Projects-8.png) */}
        <FeaturedProjects onOpenContact={handleOpenContact} />

        {/* 10. FAQ Accordion (FAQ_8.png) */}
        <Faq onOpenContact={handleOpenContact} />

        {/* 11. Industry Insights (Insights-9.png) */}
        <Insights onOpenContact={handleOpenContact} />

        {/* 12. Contact Call to Action (Contact CTA.png) */}
        <ContactCta onOpenContact={handleOpenContact} />
      </main>

      {/* 13. Footer (Footer.png) */}
      <Footer onOpenContact={handleOpenContact} />

      <ContactModal show={showContactModal} onClose={handleCloseContact} />
    </div>
  )
}
