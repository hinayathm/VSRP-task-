import React from 'react'

export default function WhyVsrp() {
  const features = [
    {
      icon: 'bi-lightbulb-fill',
      title: 'We Engineer Solutions.',
      desc: 'Custom products designed around your exact requirements.',
      borderColor: '#7523f0'
    },
    {
      icon: 'bi-people-fill',
      title: 'We Know Rubber.',
      desc: 'Material expertise backed by 20+ years of industry experience.',
      borderColor: '#fafafa'
    },
    {
      icon: 'bi-patch-check-fill',
      title: 'We Deliver Confidence.',
      desc: 'Quality, traceability and reliability at every stage.',
      borderColor: '#e2e8f0'
    }
  ]

  return (
    <section
      className="py-5 "
      style={{ backgroundColor: '#f1f1f1',height:'700px' }}
    >
      <div className="container py-4"
            

      >
        <div className="row g-4 align-items-end mb-5">
          <div className="col-lg-6">
            <h2 className="    Whyvsrp-headline " >
              More Than A <br />
              <span className="text-orange">Rubber Company.</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="text-secondary lead fs-6 mb-0 lh-base">
              We're engineers, problem-solvers and manufacturing partners, helping businesses turn unique requirements into reliable, high-performance rubber solutions.
            </p>
          </div>
        </div>

        <div className="row why-vsrp-box">
          {features.map((feat, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="card h-100 border-0 bg-white shadow-sm  p-4 p-lg-5 transition-hover">
                <div className="d-inline-flex align-items-center justify-content-center bg-orange text-white rounded-circle mb-4" style={{ width: '56px', height: '56px' }}>
                  <i className={`bi ${feat.icon} fs-4`}></i>
                </div>

                <div className="border-bottom pb-3 mb-4" style={{ borderColor: feat.borderColor, borderWidth: feat.borderColor === '#F05023' ? '2px' : '1px' }}></div>

                <h3 className="h4 fw-bold text-dark mb-3">
                  {feat.title}
                </h3>
                <p className="text-secondary mb-0 lh-base">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
