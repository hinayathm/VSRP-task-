import React from 'react'
import contactCtaImage from '../assets/ContactCta.png'

export default function ContactCta({ onOpenContact }) {
  return (
    <section
      className="position-relative py-6 py-lg-7 text-white overflow-hidden contact-cta-section"
      style={{ backgroundImage: `url(${contactCtaImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '580px' }}
    >
      <div className="contact-cta-overlay"></div>

      <div className="container position-relative z-2 py-4">
        <div className="row g-5 align-items-center">
          {/* Left Title */}
          <div className="col-lg-6">
            <h2 className="display-4 fw-black text-white mb-0 lh-tight"
            style={{ fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600', lineHeight: '1.2', letterSpacing: '-0.02em' }}
            >
              VSRP are <br /> furthering quality <br /> in <span className="text-orange">our industries.</span>
            </h2>
          </div>

          {/* Right Description & Button */}
          <div className="col-lg-6 ps-lg-5"
          style={{ paddingTop: '100px', width: '450px',marginLeft:'120px' }}
          >
            <p className=" lead fs-6  lh-base" style={{ maxWidth: '520px' ,fontSize:'15px',color:"white"}}>
              Across private, commercial and civil projects, our rubber products are custom-engineered to be reliable and cost-effective. We support the specific needs of specialised providers, plugging the gaps in their projects so they can continue to deliver at the highest level.
            </p>

            <button
              onClick={onOpenContact}
              className="btn btn-pill-orange text-white d-inline-flex align-items-center gap-3 px-4 py-2"
            >
              <span className="fw-bold tracking-wider text-uppercase small">Contact Us</span>
              <span className="bg-white text-orange rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <i className="bi bi-arrow-right fs-6"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
