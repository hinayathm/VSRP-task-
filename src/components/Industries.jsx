import React, { useState } from 'react'
import industriesColorImage from '../assets/Industries-color.png'
import industriesBlackImage from '../assets/Industrie-black.png'

export default function Industries({ onOpenContact }) {
  const industries = [
    {
      id: 'civil',
      name: 'Civil & Construction',
      shortName: 'Civil',
      prev: 'Road Transport',
      next: 'Mining',
      icon: 'bi-buildings-fill',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80',
      desc: 'High-durability bridge bearings, expansion joints, and architectural weather seals designed to withstand extreme thermal and mechanical loads.'
    },
    {
      id: 'mining',
      name: 'Mining',
      shortName: 'Mining',
      prev: 'Agriculture & Irrigation',
      next: 'Defence',
      icon: 'bi-truck-flatbed',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'agri',
      name: 'Agriculture & Irrigation',
      shortName: 'Agriculture',
      prev: 'Civil',
      next: 'Mining',
      icon: 'bi-droplet-half',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      desc: 'UV-stabilized channel seals, pipe gaskets, and specialized harvesting rubber components that endure intense sun and harsh fertilizers.'
    },
    {
      id: 'building',
      name: 'Building & Architecture',
      shortName: 'Building',
      prev: 'Mining',
      next: 'Transport & Infrastructure',
      icon: 'bi-building-gear',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      desc: 'Precision EPDM glazing gaskets, acoustic isolation pads, and facade sealing profiles engineered for Australian building codes.'
    },
    {
      id: 'transport',
      name: 'Transport & Infrastructure',
      shortName: 'Transport & Infrastructure',
      prev: 'Building',
      next: 'Civil',
      icon: 'bi-train-front',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      desc: 'Rail dampening pads, automotive door extrusions, and heavy vehicle suspension bushings engineered for rigorous cyclical stress.'
    }
  ]

  const [activeIdx, setActiveIdx] = useState(1) // default Mining as in mockup
  const current = industries[activeIdx]

  return (
    <section id="industries" className="py-5 " style={{ backgroundColor: '#fffffd',height:'950px' }}>
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-black text-dark mb-3" style={{ fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif' ,fontWeight:'600',lineHeight:'1.2',letterSpacing:'-0.02em'
          
}}>
            Rubber Solutions Built For <span className="text-orange">Industry.</span>
          </h2>
          <p className=" lead fs-6 mx-auto mb-0" style={{ maxWidth: '680px',color:"black" }}>
            From infrastructure and mining to agriculture and transport, we help businesses solve complex challenges with engineered rubber solutions.
          </p>
        </div>

        {/* Interactive Industry Showcase Container */}
        <div className="row g-0 overflow-hidden shadow-lg border border-secondary border-opacity-10 " style={{ height: '600px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* Left: Dark Industry Selection */}
          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column  text-white indutries-photos" style={{ Height: '460px', width: '48%', backgroundColor: '#1c1d1f' ,alignItems:'center',textAlign:'center', }}>
            <div>
              <span className="small text-uppercase tracking-widest  fw-bold" style={{ fontSize: '13px' ,letterSpacing:'1px',marginTop:'-20px',fontcolor:'#f1f1f1' }}>
                Our Industries
              </span>

              {/* Cycling active title display */}
              <div className="py-5 my-2" style={{ width: '48%' }}>
                <div
                  className={`text-secondary opacity-40 small text-capitalize mb-2 ${current.prev === 'Agriculture & Irrigation' ? 'text-nowrap' : ''}`}
                  style={{
                    letterSpacing: '1px',
                    fontSize: current.prev === 'Agriculture & Irrigation' ? '18px' : undefined,
                    fontWeight: current.prev === 'Agriculture & Irrigation' ? '800' : undefined,
                    paddingBottom: current.prev === 'Agriculture & Irrigation' ? '50px' : undefined
                  }}
                >
                  {current.prev}
                </div>
                <h3 className="display-3 fw-black text-white text-capitalize my-2"
                  style={{ fontSize: '70px', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                  {current.shortName}
                </h3>
                <div className="text-secondary opacity-40 small text-capitalize mt-2" style={{ letterSpacing: '1px', fontSize: current.next === 'Defence' ? '20px' : undefined, fontWeight: current.next === 'Defence' ? '800' : undefined, paddingTop: current.next === 'Defence' ? '50px' : undefined, marginLeft: current.next === 'Defence' ? '60px' : undefined }}>
                  {current.next}
                </div>
                {current.desc && (
                  <p className="text-secondary small mt-4 pe-lg-4" style={{ maxWidth: '400px', lineHeight: '1.7' }}>
                    {current.desc}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Horizontal Switcher */}
            <div className="pt-4 border-top border-secondary border-opacity-25"style={{ justifyContent: 'center',marginTop:'50px' }} >
              <div className="d-flex flex-wrap gap-3 gap-md-4 align-items-center" >
                {industries.map((ind, idx) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`btn p-0 border-0 fw-bold small text-nowrap transition-all ${
                      activeIdx === idx ? 'text-orange border-bottom border-2 border-orange pb-1' : 'text-white-50 hover-white'
                    }`}
                    style={{ fontSize: '13px' }}
                  >
                    {ind.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Industry Imagery and CTA */}
          <div className="col-lg-6 position-relative industry-image-swap">
            <img
              src={industriesColorImage}
              alt="Color collage of VSRP industry applications"
              className="industry-image-color"
            />
            <img
              src={industriesBlackImage}
              alt="Monochrome collage of VSRP industry applications"
              aria-hidden="true"
              className="industry-image-black"
              style={{ minHeight: '380px' }}
            />
            {/* Top Left Floating Icon Badge */}
            <div className="position-absolute top-0 start-0 m-4">
              <div className="rounded-circle bg-white text-dark shadow d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                <i className={`bi ${current.icon} fs-5 text-dark`}></i>
              </div>
            </div>

            {/* Bottom Right CTA Button */}
            <div className="position-absolute bottom-0 end-0 m-4">
              <button
                onClick={onOpenContact}
                className="btn btn-pill-glass text-white d-inline-flex align-items-center gap-3 px-4 py-2 shadow-lg"
              >
                <span className="fw-bold tracking-wider text-uppercase small">See Our Capabilities</span>
                <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                  <i className="bi bi-arrow-right fs-6"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
