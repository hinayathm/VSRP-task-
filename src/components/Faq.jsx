import React, { useState } from 'react'

export default function Faq({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0) // first is open by default as in mockup

  const faqs = [
    {
      q: 'What type of rubber should I use?',
      a: 'At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call.'
    },
    {
      q: 'What is the hardness scale for rubber?',
      a: 'Rubber hardness is typically measured on the Shore A durometer scale, ranging from 20A (soft like a rubber band) to 90A (hard like a bowling ball or solid tire tread). We engineer compounds to match your exact durometer and flexibility requirements.'
    },
    {
      q: 'What are minimum order quantities?',
      a: 'We cater to agile custom prototyping runs as well as high-volume production batches in the tens of thousands. Contact us with your volume forecast and we will advise on tooling amortization and unit economics.'
    },
    {
      q: 'How can I get a quote?',
      a: 'Simply share your technical drawing (CAD/PDF/STEP), or send us a physical sample or specification. Our engineering team typically provides a comprehensive quote within 24 to 48 hours.'
    },
    {
      q: 'Which materials types do VSRP offer?',
      a: 'We work across all commercial and industrial elastomers including EPDM, Nitrile (NBR), Neoprene (CR), Silicone (VMQ), Viton / Fluoroelastomer (FKM), Natural Rubber (NR), SBR, and FDA food-grade certified compounds.'
    },
    {
      q: 'Can VSRP source products & materials?',
      a: 'Yes. In addition to in-house custom Australian fabrication and extrusion, we maintain an established network of certified raw material suppliers to procure specialized polymers and high-grade additives.'
    }
  ]

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section className="py-5 py-lg-6  position-relative overflow-hidden" style={{ backgroundColor: '#f1f5f9' ,height:'730px'}}>
      {/* Decorative accent geometry */}
      <div className="position-absolute start-0 bottom-0 opacity-25 pe-none d-none d-lg-block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M0 300L120 180L160 220L80 300H0Z" fill="#F05023"/>
          <path d="M70 300L190 180L230 220L150 300H70Z" fill="#e2e8f0"/>
        </svg>
      </div>

      <div className="container py-4 position-relative z-2" style={{marginTop:'50px'}}>
        <div className="row g-5">
          {/* Left Column: Heading and Ask Button */}
          <div className="col-lg-5">
            <h2 className="display-4 fw-black text-dark mb-3"
            style={{ fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif' ,fontWeight:'600',lineHeight:'1.2',letterSpacing:'-0.02em' }}
            >
              Frequently Asked <br />
              <span className="text-orange">Questions</span>
            </h2>
            <p className=" lead fs-6 mb-4" style={{ maxWidth: '420px' ,color:"black",marginTop:'20px'}}>
              We've heard it all. Here's everything you need to know before working with us.
            </p>

            <button
              onClick={onOpenContact}
              className="btn btn-pill-orange text-white d-inline-flex align-items-center gap-3 px-4 py-2 "
              style={{ marginTop: '40px', backgroundColor: '#F05023' }}
            >
              <span className="fw-bold tracking-wider text-uppercase small">Ask A Question</span>
              <span className="bg-white text-orange rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                <i className="bi bi-arrow-right fs-6"></i>
              </span>
            </button>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="col-lg-7">
            <div className="faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx
                return (
                  <div
                    key={idx}
                    className="border-bottom py-3 transition-all"
                    style={{ borderColor: '#f1f5f9' }}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="btn w-100 p-0 text-start d-flex align-items-center justify-content-between border-0 shadow-none"
                    >
                      <span className="h5 fw-bold text-dark mb-0 pe-3 lh-sm">
                        {faq.q}
                      </span>
                      <span
                        className="rounded-circle border border-orange text-orange d-flex align-items-center justify-content-center flex-shrink-0 transition-transform"
                        style={{
                          width: '32px',
                          height: '32px',
                          transform: isOpen ? 'rotate(180deg)' : 'none'
                        }}
                      >
                        <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'} fs-5`}></i>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 pe-4 text-secondary small lh-base animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
