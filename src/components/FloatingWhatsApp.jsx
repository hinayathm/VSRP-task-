import React from 'react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/61288349958"
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bottom-0 end-0 m-4 z-3 rounded-circle shadow-lg d-flex align-items-center justify-content-center text-white text-decoration-none transition-transform hover-scale"
      style={{
        width: '56px',
        height: '56px',
        backgroundColor: '#25D366',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp fs-3"></i>
    </a>
  )
}
