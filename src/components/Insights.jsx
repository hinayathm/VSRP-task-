import React, { useState } from 'react'
import insights3Image from '../assets/ Insights3 (1).png'
import insights2Image from '../assets/ Insights3 (2).png'
import insights3ThirdImage from '../assets/ Insights3 (3).png'

export default function Insights({ onOpenContact }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const articles = [
    {
      id: 1,
      title: 'Understanding Rubber Compounds: Choosing The Right Material...',
      
      date: 'Sep 2026',
      image: insights3Image,
    },
    {
      id: 2,
      title: 'Optimizing Extrusion Tooling For High-Volume Industrial Runs...',
     
      date: 'Aug 2026',
      image: insights2Image,
    },
    {
      id: 3,
      title: 'Elastomeric Weather Seals: Preventing UV Degradation In Australia...',
     
      date: 'Jul 2026',
      image: insights3ThirdImage,
    }
  ]

  return (
    <section id="insights" className="py-5 py-lg-6 " style={{ backgroundColor: '#eaeae6', height: '900px' }}>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5" style={{ marginTop: '40px' }}>
          <div>
            <h2 className="display-4 fw-black text-dark mb-2" style={{ fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Industry <span className="text-orange">Insights</span>
            </h2>
            <p className=" lead fs-6 mb-0" style={{ maxWidth: '580px',color:"black" }}>
              Practical advice, material expertise and engineering <br /> knowledge to help you make informed decisions
            </p>
          </div>

          <div>
            <button
              onClick={onOpenContact}
              className="btn btn-pill-gray d-inline-flex align-items-center gap-3 px-4 py-2"
            >
              <span className="fw-bold tracking-wider text-uppercase small text-dark">View All Insights</span>
              <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <i className="bi bi-arrow-right fs-6"></i>
              </span>
            </button>
          </div>
        </div>

        {/* 3 Insight Cards */}
        <div className="row g-4 " style={{ height: '400px', paddingBottom: '10px' }}>
          {articles.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 bg-white overflow-hidden shadow-sm insight-card">
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover insight-img"
                  />
                </div>

                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-light text-secondary border px-2 py-1 mb-2 fw-semibold" style={{ fontSize: '11px' }}>
                      {item.category}
                    </span>
                    <h3 className="h5 fw-bold text-dark mb-3 lh-sm">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenContact}
                      className="btn btn-link p-0 text-orange fw-bold small text-decoration-none border-bottom border-orange border-opacity-50 pb-1 d-inline-flex align-items-center gap-2"
                    >
                      <span className="text-uppercase" style={{ letterSpacing: '0.8px' }}>View Detail</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-5">
          <div className="d-inline-flex align-items-center gap-3 bg-secondary bg-opacity-25 px-3 py-2 rounded-pill shadow-sm">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn btn-sm btn-link text-dark p-0 text-decoration-none"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <span className="small fw-bold px-2 text-dark">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn btn-sm btn-link text-dark p-0 text-decoration-none"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
