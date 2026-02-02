import { useState } from 'react'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import Avançar from './Avançar.jsx'
import backIcon from './assets/11541959.png'

export default function Sim({ onVoltar }) {
  const [showAvancar, setShowAvancar] = useState(false)

  if (showAvancar) {
    return <Avançar onVoltar={() => setShowAvancar(false)} />
  }
  const polaroidStyle = {
    backgroundColor: 'white',
    padding: '15px',
    paddingBottom: '60px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transform: 'rotate(-2deg)',
    transition: 'transform 0.3s ease'
  }

  const polaroidStyle2 = {
    backgroundColor: 'white',
    padding: '15px',
    paddingBottom: '60px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transform: 'rotate(3deg)',
    transition: 'transform 0.3s ease'
  }

  const polaroidStyle3 = {
    backgroundColor: 'white',
    padding: '15px',
    paddingBottom: '60px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transform: 'rotate(-3deg)',
    transition: 'transform 0.3s ease'
  }

  return (
    <div style={{backgroundColor: '#FFD1DC'}} className="min-vh-100 py-5">
      {onVoltar && (
        <button 
          className="btn position-fixed top-0 start-0 m-3 rounded-circle" 
          onClick={onVoltar}
          style={{zIndex: 1000, width: '55px', height: '55px', padding: 0, border: 'none', backgroundColor: 'transparent'}}
        >
          <img src={backIcon} alt="Voltar" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </button>
      )}
      <div className="container">
        <h1 className="text-center text-danger mb-5">❤️ Amo-te muito ❤️</h1>
        
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div style={polaroidStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}>
              <div style={{backgroundColor: '#e9ecef', height: '350px', overflow: 'hidden'}} className="mb-3">
                <img src={img1} alt="Momento 1" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <p className="text-center mb-0 fw-bold">TE</p>
            </div>
          </div>

          <div className="col-md-4">
            <div style={polaroidStyle2} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(3deg)'}>
              <div style={{backgroundColor: '#e9ecef', height: '350px', overflow: 'hidden'}} className="mb-3">
                <img src={img2} alt="Momento 2" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <p className="text-center mb-0 fw-bold">AMO</p>
            </div>
          </div>

          <div className="col-md-4">
            <div style={polaroidStyle3} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-3deg)'}>
              <div style={{backgroundColor: '#e9ecef', height: '350px', overflow: 'hidden'}} className="mb-3">
                <img src={img3} alt="Momento 3" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <p className="text-center mb-0 fw-bold">&lt;3</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="fs-4 text-dark">Tenho muita sorte em te ter na minha vida, sou mais feliz contigo todos os dias &lt;3  </p>
          <button className="btn btn-danger btn-lg mt-4" onClick={() => setShowAvancar(true)}>
            Avançar →
          </button>
        </div>
      </div>
    </div>
  )
}
