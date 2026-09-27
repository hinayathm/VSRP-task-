import React from 'react'
import productBannerVideo from '../assets/productbanner.mp4'

export default function ProductBanner({ onOpenContact }) {
  return (
    <section id="products" className="position-relative py-6 py-lg-7 text-white text-center overflow-hidden product-banner-section">
      <video className="product-banner-video" autoPlay loop muted playsInline aria-hidden="true">
        <source src={productBannerVideo} type="video/mp4" />
      </video>
      <div className="product-banner-overlay"></div>
      <div className="container position-relative z-2 py-5">
        <h2 className="display-3 fw-black text-white mb-4 lh-tight  product-banner-heading" >
          Whatever You Need in <br className="d-none d-md-block" />
          Rubber, We Can <span className="text-orange">Shape It.</span>
        </h2>

        <div className="mt-4 pt-2">
          <button
            onClick={onOpenContact}
            className="btn btn-pill-glass hero-contact-btn text-white d-inline-flex align-items-center gap-3 px-4 py-2"
          >
            <span className="hero-action-label fw-bold tracking-wider text-uppercase small">
              <span className="text-default">See Product Categories</span>
              <span className="text-hover">See Product Categories</span>
            </span>
            <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
              <span className="hero-action-icon" aria-hidden="true">
                <i className="bi bi-arrow-right icon-default"  style={{ marginTop:'-4px'}}></i>
                <i className="bi bi-arrow-right icon-hover"  style={{ marginTop:'-4px'}}></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
