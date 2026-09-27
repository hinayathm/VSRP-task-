import React from 'react'
import featuredProjects1Image from '../assets/FeaturedProjects1.png'
import featuredProjects2Image from '../assets/FeaturedProjects2.png'

export default function FeaturedProjects({ onOpenContact }) {
  const projects = [
    {
      id: 1,
      title: 'Custom Extrusion Solution',
      desc: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
      tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
      image: featuredProjects1Image
    },
    {
      id: 2,
      title: 'Custom Extrusion Solution',
      desc: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
      tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
      image: featuredProjects2Image
    },
    {
      id: 3,
      title: 'Custom Extrusion Solution',
      desc: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
      tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
      image: featuredProjects1Image
    }
  ]

  return (
    <section id="projects" className="py-5 py-lg-6 bg-white" 
    style={{ backgroundColor: '#fffffd', height: '900px' }}
    >
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <div>
            <h2 className="display-5  text-dark mb-0 precision-heading featured-projects-heading"
            style={{ fontWeight: '700', fontSize: '50px',letterSpacing: '-0.03em',lineHeight:'-1.2',marginBottom:'-10px'}}>
            
              Wherever Precision Is <br /> Needed, 
              <span className="text-orange">VSRP Delivers.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenContact}
              className="btn btn-pill-gray d-inline-flex align-items-center gap-3 px-4 py-2"
            >
              <span className="fw-bold tracking-wider text-uppercase small text-dark">View All Projects</span>
              <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <i className="bi bi-arrow-right fs-6"></i>
              </span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4 project-scroll-row" style={{ overflowX: 'auto', marginTop: '80px' }}>
          {projects.map((proj) => (
            <div key={proj.id} className="col-lg-4 col-md-6 project-scroll-item">
              <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm project-card">
                {/* Image & Overlay */}
                <div className="position-relative overflow-hidden" style={{ height: '360px',width:'100%' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-100 h-100 object-fit-cover project-img transition-all"
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-black bg-opacity-75 text-white small px-3 py-2 border-bottom border-light border-opacity-50">
                      VIEW PROJECT <i className="bi bi-arrow-right ms-1"></i>
                    </span>
                  </div>

                  {/* Badges on bottom of image */}
                  <div className="position-absolute bottom-0 start-0 m-3 d-flex flex-wrap gap-1">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="badge bg-dark bg-opacity-75 text-white-50 px-2 py-1 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.8px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h4 fw-bold text-dark mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-secondary small mb-3 lh-base">
                      {proj.desc}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
