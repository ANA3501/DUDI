import { useState } from 'react'
import Sim from './Sim.jsx'
import img5 from './assets/img5.jpeg'

export default function Dudi() {
  const [showSim, setShowSim] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const moveButton = () => {
    const buttonWidth = 120
    const buttonHeight = 50
    const marginBottom = 150
    const maxX = (window.innerWidth - buttonWidth) / 2
    const maxY = (window.innerHeight - buttonHeight - marginBottom) / 2
    const randomX = Math.floor(Math.random() * maxX * 2 - maxX)
    const randomY = Math.floor(Math.random() * maxY - maxY * 0.5)
    setPosition({ x: randomX, y: randomY })
  }

  if (showSim) {
    return <Sim onVoltar={() => setShowSim(false)} />
  }

  return (
    <div style={{backgroundColor: '#FFD1DC', overflow: 'hidden'}} className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container-md" style={{position: 'relative'}}>
        <div className="bg-white rounded-5 shadow-lg p-5">
          <div className="text-center mb-4">
            <img src={img5} alt="Foto" style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover'}} />
          </div>
          <h1 className="text-center mb-4 text-dark">Dudi Badudi</h1>
          <p className="text-center text-secondary mb-4 fs-3">Queres ser o meu Valentim?</p>
          <div className="text-center d-flex gap-3 justify-content-center">
            <button className="btn btn-danger btn-lg" onClick={() => setShowSim(true)}>
              Sim amor da minha vida
            </button>
            <button 
              className="btn btn-secondary btn-lg" 
              onMouseEnter={moveButton}
              style={{
                position: 'relative',
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
