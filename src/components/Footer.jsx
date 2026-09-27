import React from 'react'

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-dark-custom text-white pt-5 pb-4 position-relative border-top border-secondary border-opacity-10"
    style={{ backgroundColor: '#181a20', borderColor: '#000000',height:'600px' }}
    >
      <div className="container py-4">
        <div className="row g-5">
          {/* Col 1: Brand & Certification */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg width="118" height="114" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14L15 2L19 7L11 17L4 14Z" fill="#F05023"/>
                <path d="M12 18L21 8L25 13L18 22L12 18Z" fill="#F05023"/>
                <path d="M21 21L36 4L42 10L24 36L15 25L21 21Z" fill="#F05023"/>
              </svg>
              <div className="d-flex flex-column">
                <span className="fw-black tracking-tighter lh-1 text-white" style={{fontSize:'50px',fontFamily:''}}>VSRP</span>
                <span className="text-secondary fw-semibold uppercase" style={{ fontSize: '9px', letterSpacing: '1.5px' }}>
                  Engineered Rubber
                </span>
              </div>
            </div>

            <p className="text-secondary small mb-4 lh-base" style={{ maxWidth: '320px' }}>
              For over 20 years, VSRP has delivered engineered rubber solutions built around the unique requirements of Australian businesses.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2 mb-4">
              {[
                { icon: 'bi-instagram', href: '#' },
                { icon: 'bi-facebook', href: '#' },
                { icon: 'bi-linkedin', href: '#' },
                { icon: 'bi-twitter-x', href: '#' }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="rounded-2 border border-secondary border-opacity-50 text-white d-flex align-items-center justify-content-center text-decoration-none hover-orange"
                  style={{ width: '38px', height: '38px', backgroundColor: '#181a20' }}
                >
                  <i className={`bi ${s.icon} fs-6`}></i>
                </a>
              ))}
            </div>

            {/* ISO Certification Badge */}
            <div className="d-flex align-items-center gap-2 pt-2">
              <div className="border border-danger border-opacity-50 rounded p-1 bg-white" style={{ width: '36px' }}>
                <div className="bg-danger text-white text-center fw-bold" style={{ fontSize: '7px', lineHeight: '1.1' }}>
                  ISO 9001
                </div>
                <div className="text-danger text-center fw-bold" style={{ fontSize: '6px' }}>
                  QUALITY
                </div>
              </div>
              <span className="text-secondary small fw-medium" style={{ fontSize: '12px' }}>
                ISO9001:2015 Accredited
              </span>
            </div>
          </div>

          {/* Col 2: Company & Contact */}
          <div className="col-lg-4 col-md-6"
          style={{ marginleft:'100px' }}
          >
            <div className="mb-4">
              <h6 className="text-orange text-uppercase fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                Company
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
                <li><a href="#about" className="text-white-50 text-decoration-none hover-white">About</a></li>
                <li><a href="#projects" className="text-white-50 text-decoration-none hover-white">Case Studies</a></li>
                <li><a href="#insights" className="text-white-50 text-decoration-none hover-white">Blogs</a></li>
                <li><button onClick={onOpenContact} className="btn btn-link p-0 text-white-50 text-decoration-none hover-white small">Contact</button></li>
              </ul>
            </div>

            <div className="pt-3 border-top border-secondary border-opacity-25">
              <h6 className="text-orange text-uppercase fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                Contact
              </h6>
              <p className="text-white fw-bold mb-1 fs-6">
                1800 787 777, +61 (2) 8834 9958
              </p>
              <p className="text-white-50 small mb-0">
                enquiries@vsrp.com.au
              </p>
            </div>
          </div>

          {/* Col 3: Industries & Location */}
          <div className="col-lg-4 col-md-12">
            <div className="mb-4">
              <h6 className="text-orange text-uppercase fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                Industries
              </h6>
              <ul className="list-unstyled row g-2 small text-secondary">
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Agriculture & Irrigation</a></li>
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Plumbing</a></li>
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Civil Engineering</a></li>
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Mining</a></li>
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Defence</a></li>
                <li className="col-6"><a href="#industries" className="text-white-50 text-decoration-none hover-white">Road Transport</a></li>
              </ul>
            </div>

            <div className="pt-3 border-top border-secondary border-opacity-25">
              <h6 className="text-orange text-uppercase fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                Location
              </h6>
              <p className="text-white-50 small mb-0">
                Unit 3, 10 Banksia Place, <br />
                South Windsor NSW 2756 Australia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-5 pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-secondary text-uppercase fw-semibold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
          <div>
            COPYRIGHT &copy; {new Date().getFullYear()} VSRP
          </div>
          <div>
            SITE BY ACODEZ
          </div>
          <div className="d-flex gap-3">
            <a href="#privacy" className="text-secondary text-decoration-none hover-white">Privacy Policy</a>
            <span>|</span>
            <span className="text-secondary">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
