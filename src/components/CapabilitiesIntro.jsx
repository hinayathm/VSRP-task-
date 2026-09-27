import React from 'react'
import videoSource from '../assets/productbanner.mp4'

export default function CapabilitiesIntro() {
  return (
    <section className="py-5 py-lg-6 bg-white text-center position-relative overflow-hidden">
      <div className="container py-4">
        <h2 className="display-4 fw-black text-dark mb-3">
          What Can We Help You <span className="text-orange">Build?</span>
        </h2>
        <p className="text-secondary lead fs-6 mx-auto mb-5" style={{ maxWidth: '640px' }}>
          We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
        </p>

        {/* Video masked inside the VSRP mark */}
        <div className="capabilities-video-wrapper my-5 py-4"
        style={{ width: '80%', height: '400px', overflow: 'hidden', position: 'relative', border: 'none', backgroundColor: '#ffffff' }}
        >
          <div className="capabilities-video-mask">
            <video autoPlay muted loop playsInline aria-label="VSRP rubber manufacturing video">
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
          <div className="capabilities-gloss-overlay" aria-hidden="true" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-4 pt-3">
          <a href="#products" className="text-decoration-none text-muted d-inline-flex align-items-center gap-2 hover-orange">
            <span className="rounded-circle border border-secondary border-opacity-50 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="bi bi-chevron-down fs-6"></i>
            </span>
            <span className="small text-uppercase tracking-widest fw-semibold" style={{ fontSize: '11px' }}>
              Scroll Down
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
