import React, { useState } from 'react'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Send us a drawing, sample or specification. We listen to your application constraints, environmental exposures, and compliance criteria.'
    },
    {
      num: '02',
      title: "We'll Engineer The Solution",
      desc: 'Materials selection (EPDM, Nitrile, Silicone, Neoprene, Natural Rubber), tooling design, and manufacturing approach.'
    },
    {
      num: '03',
      title: "We'll Make It",
      desc: 'Precision extrusion, compression molding, vulcanization, and bonding conducted to tight ISO9001:2015 tolerances.'
    },
    {
      num: '04',
      title: "We'll Deliver It",
      desc: 'Rigorous batch testing, quality certification, on-time Australian delivery, and ongoing technical support.'
    }
  ]

  return (
    <section className="py-5 py-lg-6  position-relative" style={{ backgroundColor: '#dbdada' }}>
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-black text-dark mb-3 process-heading">
            From Concept to Delivery, <br className="d-none d-md-block" />
            We Make it <span className="text-orange">Happen</span>
          </h2>
          <p className="text-secondary lead fs-6 mx-auto mb-0" style={{ maxWidth: '650px' }}>
            A proven process built around collaboration, precision and a commitment to quality at every step.
          </p>
        </div>

        <div className="row g-5 align-items-center mt-2">
          {/* Left: 4-Step Vertical Timeline */}
          <div className="col-lg-6">
            <div className="process-timeline ps-2">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`d-flex gap-4 mb-4 pb-2 cursor-pointer transition-all  ${
                      isActive ? 'opacity-100' : 'opacity-70 hover-opacity-100'
                    }`}
                  >
                    {/* Number Circle & Connector */}
                    <div className="d-flex flex-column align-items-center ">
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center fw-bold fs-6 transition-all ${
                          isActive
                            ? 'border border-2 border-orange text-orange bg-white shadow-sm'
                            : 'border border-secondary border-opacity-50 text-secondary bg-light'
                        }`}
                        style={{ width: '48px', height: '48px', minWidth: '48px', borderColor: '#000000' }}
                      >
                        {step.num}
                      </div>
                      {idx !== steps.length - 1 && (
                        <div
                          className="my-2 border-start border-2 border-dotted"
                          style={{
                            height: '50px',
                            borderColor: '#000000'
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pt-2">
                      <h3 className={`h4 fw-bold mb-1 transition-all ${step.title === 'Tell Us What You Need' ? 'text-orange' : isActive ? 'text-dark' : 'text-secondary'}`}>
                        {step.title}
                      </h3>
                      <p className="text-secondary small mb-0 lh-base" style={{ maxWidth: '420px' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Isometric CAD / Blueprint Engineering Illustration */}
          <div className="col-lg-6">
            <div className="p-4 p-md-5 bg-light rounded-4 border border-secondary border-opacity-10 text-center position-relative shadow-sm">
              <svg width="100%" height="320" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* CAD Blueprint Grid */}
                <defs>
                  <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="500" height="320" fill="url(#cadGrid)" rx="16" />

                {/* Isometric Computer Screen */}
                <path d="M260 90L370 40L370 170L260 220Z" fill="#ffffff" stroke="#181a20" strokeWidth="2.5" />
                <path d="M275 102L355 65L355 160L275 195Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
                {/* Screen rubber profile */}
                <path d="M300 120C300 100 330 90 340 105C350 120 335 145 320 155C305 165 300 140 300 120Z" fill="none" stroke="#F05023" strokeWidth="3" />

                {/* Stand & Base */}
                <path d="M305 210L325 200L325 230L305 240Z" fill="#cbd5e1" stroke="#181a20" strokeWidth="1.5" />
                <ellipse cx="315" cy="238" rx="30" ry="10" fill="#94a3b8" />

                {/* Blueprint Drawing Mat */}
                <path d="M50 210L240 130L380 200L180 290Z" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
                {/* Dimension Lines */}
                <line x1="70" y1="210" x2="160" y2="255" stroke="#F05023" strokeWidth="1.2" strokeDasharray="3 3" />
                <text x="105" y="240" fill="#F05023" fontSize="10" fontFamily="sans-serif" fontWeight="bold">120 mm</text>

                {/* Rubber Extrusion Cross Section on Blueprint */}
                <path d="M120 195C120 175 160 160 180 185C195 205 170 230 150 240C130 250 120 220 120 195Z" fill="#181a20" stroke="#F05023" strokeWidth="1.5" />

                {/* Keyboard & Mouse Isometric */}
                <path d="M310 190L400 150L440 175L350 215Z" fill="#ffffff" stroke="#181a20" strokeWidth="1.8" />
                <ellipse cx="430" cy="195" rx="14" ry="18" fill="#f1f5f9" stroke="#181a20" strokeWidth="1.5" />

                {/* Vernier Caliper */}
                <path d="M320 250L400 215L410 225L330 260Z" fill="#cbd5e1" stroke="#334155" strokeWidth="1.5" />
                <circle cx="405" cy="220" r="10" fill="#ffffff" stroke="#F05023" strokeWidth="1.5" />
              </svg>
              <div className="badge bg-white text-dark border border-secondary border-opacity-25 px-3 py-2 position-absolute bottom-0 end-0 m-4 shadow-sm">
                <i className="bi bi-cpu me-1 text-orange"></i> CAD & Prototyping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
