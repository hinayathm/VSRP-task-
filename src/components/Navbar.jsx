import React from 'react'

export default function Navbar({ onOpenContact }) {
  return (
    <nav
      className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3 bg-transparent py-3 py-lg-4"
      style={{ marginTop:'-30px' }}
    >
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center text-white" href="#hero">
          <div className="d-flex align-items-center gap-2">
            <svg width="82" height="75" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14L15 2L19 7L11 17L4 14Z" fill="#F05023"/>
              <path d="M12 18L21 8L25 13L18 22L12 18Z" fill="#F05023"/>
              <path d="M21 21L36 4L42 10L24 36L15 25L21 21Z" fill="#F05023"/>
            </svg>
            <div className="d-flex flex-column leading-none">
              <span className=" logovsrp">VSRP</span>
              <span className="text-white fw-semibold uppercase " style={{ fontSize: '8px' ,paddingBottom:'30px',marginTop:'-10px'}}> 
                Engineered Rubber
              </span>
            </div>
          </div>
        </a>

        {/* Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-uppercase fw-semibold  menu" style={{ fontSize: '13px', letterSpacing: '0.5px',paddingLeft:'350px' }}>
            <li className="nav-item">
              <a className="nav-link text-white px-1 " href="#about">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white px-1" href="#industries" role="button" data-bs-toggle="dropdown">
                Industries
              </a>
              <ul className="dropdown-menu dropdown-menu-dark border-secondary shadow">
                <li><a className="dropdown-item py-2" href="#industries">Mining & Resources</a></li>
                <li><a className="dropdown-item py-2" href="#industries">Agriculture & Irrigation</a></li>
                <li><a className="dropdown-item py-2" href="#industries">Civil & Construction</a></li>
                <li><a className="dropdown-item py-2" href="#industries">Defence</a></li>
                <li><a className="dropdown-item py-2" href="#industries">Transport & Infrastructure</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-1" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-1" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-1" href="#insights">Insights</a>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="d-flex align-items-center">
            <button
              onClick={onOpenContact}
              className="contact-pill-btn"
            >
              <span className="contact-pill-btn-label">
                <span className="text-default">CONTACT</span>
                <span className="text-hover">CONTACT</span>
              </span>
              <span className="contact-pill-btn-icon">
                <svg className="icon-default" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--theme-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="icon-hover" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--theme-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
