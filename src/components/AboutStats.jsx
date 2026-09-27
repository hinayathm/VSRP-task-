import React from 'react'
import aboutBackground from '../assets/aa.png'

export default function AboutStats({ onOpenContact }) {
  const stats = [
    { value: '20+', label: 'Years of experience' },
    { value: '122K+', label: 'Ventilation tube joins' },
    { value: '5M+', label: 'Rubber seals supplied' },
    { value: '450K+', label: 'Traffic light seals' },
  ]

  return (
    <section
      id="about"
      className="py-5 py-lg-6 bg-light text-dark position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height:'600px',
      }}
    >
      {/* Decorative accent geometry */}
      <div className="position-absolute end-0 bottom-0 opacity-25 pe-none d-none d-lg-block">
        <svg width="900" height="450" viewBox="0 0 400 350" fill="none">
          <path d="M120 350L250 150H320L190 350H120Z" fill="#F05023"/>
          <path d="M220 350L350 150H420L290 350H220Z" fill="#E2E8F0"/>
        </svg>
      </div>

      <div className="container py-4 position-relative z-2">
        <div className="row g-5 align-items-center">
          {/* Left Column: Heading and Stats */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-dark mb-4 lh-tight vsrp-heading precision-heading" style={{ fontWeight: 'bold', fontSize: '50px',letterSpacing: '-0.03em',lineHeight:'-1.2' }}>
              Wherever Precision Is Needed, <span className="text-orange vsrp-heading-highlight">VSRP Delivers.</span>
            </h2>

            <div className="row g-4 pt-3 border-top border-secondary border-opacity-10 mt-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="col-6">
                  <div className="stat-card">
                    <div className="display-5 fw-black text-dark tracking-tight mb-1 stat-number-font">
                      {stat.value.replace('+', '')}
                      <span className="text-orange">+</span>
                    </div>
                    <div className="text-muted small fw-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission and About CTA */}
          <div className="col-lg-6 contact-cta-wrapper">
            <h3 className="h2 fw-bold text-dark mb-3 lh-sm">
              We're engineers, manufacturers and problem-solvers.
            </h3>

            <p className="text-secondary lead fs-6 mb-3 lh-base">
              Whether you need a custom seal, a specialised extrusion, a bonded rubber component or a completely new product, we'll work with you to find the right solution.
            </p>

            <p className="text-secondary lead fs-6 mb-4 pb-2 lh-base">
              We've been doing it for more than two decades, helping businesses across Australia keep projects moving.
            </p>

            <button
              onClick={onOpenContact}
              className="btn btn-pill-gray hero-contact-btn d-inline-flex align-items-center gap-3 px-4 py-2"
              style={{ marginTop: '20px' }}
            >
              <span className="hero-action-label fw-bold tracking-wider text-uppercase small text-dark">
                <span className="text-default">About VSRP</span>
                <span className="text-hover">About VSRP</span>
              </span>
              <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <span className="hero-action-icon" aria-hidden="true">
                  <i className="bi bi-arrow-right icon-default" style={{ marginTop:'-4px'}}></i>
                  <i className="bi bi-arrow-right icon-hover" style={{ marginTop:'-4px'}}></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
