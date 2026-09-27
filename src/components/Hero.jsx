import React from 'react'
import heroVideo from '../assets/ee.mp4'

export default function Hero({ onOpenContact, videoSrc = heroVideo }) {
  return (
    <section
      id="hero"
      className="position-relative d-flex flex-column justify-content-center align-items-center text-white overflow-hidden hero-section"
      style={{ height: '850px', minHeight: '850px' }}
    >
      {/* Background Video (if provided) */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Dark vignette overlay matching Hero-1.png for perfect text legibility */}
      <div className="hero-bg-overlay"></div>

      <div
        className="container position-relative z-2 py-5 my-auto  main-hero-content"
        style={{ width: '1200px', maxWidth: '100%',marginTop:'100px' }}
      >
        <div className="row align-items-center">
          <div className="col-lg-10 col-xl-9">
           

            {/* Main Headline */}
            <h1
              className="hero-headline bricolage-grotesque-heading display-2 fw-black text-white lh-1 mb-2"
              
            >
              Custom Rubber <br />
              <span style={{marginLeft:'220px' }}>Solutions</span><span className="badge-dot-sm-orange"></span>
            </h1>

            <h1 className="hero-headline bricolage-grotesque-heading display-2 fw-black text-white mb-2 lh-1 "
             style={{marginLeft:'600px',marginRight:'-800px',marginTop:'-10px',fontSize:'85px'}}>
              Engineered To <br />
              <span>Perfrom</span><span className="badge-dot-sm-orange"></span>
            </h1>

            <div className="row mt-4 pt-2 hero-subheadline-wrapper">
              <div className="col-md-8 col-lg-7 hero-subheadline ">

               <div style={{ maxWidth: '335px' }}>
                 <p className="text-white  mb-4 lh-base hero-p" style={{ fontSize: '15px', lineHeight: '2',marginTop:'-35px',marginLeft:'-80px' }}>
                  For more than 20 years, we've helped Australian businesses solve problems with engineered rubber solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need it.
                </p>
               </div>

                <div className=" align-items-center gap-4"
                style={{maxWidth:'1300px'}}
                >
                  <div>
                    <button
                    onClick={onOpenContact}
                    className="btn btn-pill-glass hero-contact-btn text-white d-inline-flex align-items-center  "
                    style={{  marginLeft:'250px' }}
                  >
                    <span className="hero-action-label fw-bold tracking-wider text-uppercase small">
                      <span className="text-default">Discuss Your Project</span>
                      <span className="text-hover">Discuss Your Project</span>
                    </span>
                    <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <span className="hero-action-icon" aria-hidden="true">
                        <i className="bi bi-arrow-right icon-default" style={{marginTop:'-4px'}} ></i>
                        <i className="bi bi-arrow-right icon-hover" style={{marginTop:'-4px'}}></i>
                      </span>
                    </span>
                  </button>
                  
                  </div>
                  <div>
                    
                  </div>
                 
                  

                
                </div>
              
              </div>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
      

      {/* Bottom See What We Do indicator */}
      <div className="position-absolute bottom-0 start-0 p-4 p-lg-5 z-2"
      
      style={{marginLeft:'1000px',marginBottom:'143px',}}>
        
        <a href="#about" className="hero-action-link text-white text-decoration-none fw-semibold tracking-wider text-uppercase small d-inline-flex align-items-center gap-2 border-bottom border-light border-opacity-50 pb-1"
                   
                  >
                    <span className="hero-action-label">
                      <span className="text-default">See What We Do</span>
                      <span className="text-hover">See What We Do</span>
                    </span>
                    <span className="hero-action-icon" aria-hidden="true">
                      <i className="bi bi-arrow-right icon-default"></i>
                      <i className="bi bi-arrow-right icon-hover"></i>
                    </span>
                  </a>
      </div>
      <div className="position-absolute bottom-0 start-0 p-4 p-lg-5 z-2">
        <a href="#about" className="text-decoration-none text-white-50 d-inline-flex align-items-center gap-2 hover-white">
          <span className="rounded-circle border border-secondary border-opacity-50 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
            <i className="bi bi-chevron-down fs-6"></i>
          </span>
          <span className="small text-uppercase tracking-widest fw-semibold" style={{ fontSize: '11px' }}>
            Scroll Down
          </span>
        </a>
      </div>
    </section>
  )
}
