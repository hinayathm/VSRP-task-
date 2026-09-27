import React, { useState } from 'react'

export default function ContactModal({ show, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'Mining',
    message: ''
  })

  if (!show) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2200)
  }

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)', zIndex: 1060 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border border-secondary border-opacity-25 rounded-4 shadow-lg overflow-hidden">
          <div className="modal-header border-secondary border-opacity-25 p-4 bg-black bg-opacity-40">
            <div className="d-flex align-items-center gap-2">
              <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-envelope-paper-fill fs-6"></i>
              </span>
              <div>
                <h5 className="modal-title fw-bold text-white mb-0">Discuss Your Custom Rubber Project</h5>
                <small className="text-secondary">Engineering Consultation & Request For Quote</small>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4 p-md-5">
            {submitted ? (
              <div className="text-center py-5">
                <div className="rounded-circle bg-success bg-opacity-25 text-success d-inline-flex align-items-center justify-content-center p-3 mb-3" style={{ width: '70px', height: '70px' }}>
                  <i className="bi bi-check-circle-fill fs-1"></i>
                </div>
                <h4 className="fw-bold text-white mb-2">Inquiry Submitted Successfully</h4>
                <p className="text-secondary small mb-0">
                  Our engineering team will review your specifications and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-bold text-uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2"
                      placeholder="e.g. David Wilson"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-bold text-uppercase">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2"
                      placeholder="d.wilson@company.com.au"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-bold text-uppercase">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-control bg-black text-white border-secondary border-opacity-50 py-2"
                      placeholder="+61 400 000 000"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-secondary small fw-bold text-uppercase">Industry Focus</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="form-select bg-black text-white border-secondary border-opacity-50 py-2"
                    >
                      <option value="Mining">Mining & Resources</option>
                      <option value="Civil">Civil & Construction</option>
                      <option value="Agriculture">Agriculture & Irrigation</option>
                      <option value="Defence">Defence</option>
                      <option value="Transport">Transport & Infrastructure</option>
                      <option value="Other">Other Custom Application</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small fw-bold text-uppercase">Project & Material Specifications</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control bg-black text-white border-secondary border-opacity-50"
                      placeholder="Please describe your component dimensions, rubber type (e.g. EPDM, Viton, Nitrile), operating temperature, pressure, or estimated volumes..."
                    ></textarea>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <button type="button" className="btn btn-outline-secondary px-4 rounded-pill" onClick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-pill-orange text-white px-4">
                    <span>Submit Inquiry</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
