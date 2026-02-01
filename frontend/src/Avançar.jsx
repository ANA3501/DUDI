import { useState, useEffect } from 'react'
import img4 from './assets/img4.jpeg'

export default function Avançar({ onVoltar }) {
  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })

  useEffect(() => {
    const calcularTempo = () => {
      const inicio = new Date('2024-09-21T00:00:00')
      const agora = new Date()
      const diferenca = agora - inicio

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

      setTempo({ dias, horas, minutos, segundos })
    }

    calcularTempo()
    const intervalo = setInterval(calcularTempo, 1000)

    return () => clearInterval(intervalo)
  }, [])

  const heartStyle = `
    @keyframes float {
      0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
      }
    }
  `

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 3 + Math.random() * 4,
    animationDelay: Math.random() * 5,
    fontSize: 20 + Math.random() * 20
  }))

  return (
    <div style={{backgroundColor: '#FFD1DC', position: 'relative', overflow: 'hidden'}} className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <style>{heartStyle}</style>
      
      {hearts.map(heart => (
        <div
          key={heart.id}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.fontSize}px`,
            animation: `float ${heart.animationDuration}s ease-in infinite`,
            animationDelay: `${heart.animationDelay}s`,
            pointerEvents: 'none'
          }}
        >
          ❤️
        </div>
      ))}
      
      <button 
        className="btn btn-danger position-fixed top-0 start-0 m-3 rounded-circle" 
        onClick={onVoltar}
        style={{zIndex: 1000, width: '55px', height: '55px', padding: 0, fontSize: '28px', fontWeight: 'bold'}}
      >
        ←
      </button>
      <div className="container" style={{position: 'relative', zIndex: 10}}>
        <div className="bg-white rounded-5 shadow-lg p-5 text-center" style={{position: 'relative'}}>
          <div 
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              backgroundColor: 'white',
              padding: '10px',
              paddingBottom: '40px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              transform: 'rotate(8deg)',
              width: '150px',
              zIndex: 20
            }}
          >
            <div style={{backgroundColor: '#e9ecef', height: '120px', marginBottom: '10px', overflow: 'hidden'}}>
              <img src={img4} alt="Nós" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <p style={{margin: 0, fontSize: '12px', fontWeight: 'bold', textAlign: 'center'}}>&lt;3</p>
          </div>
          
          <h1 className="text-danger mb-4">Já me aturas há... </h1>
          
          <div className="row g-4 mt-4">
            <div className="col-6 col-md-3">
              <div className="p-4 bg-danger-subtle rounded-4">
                <h2 className="display-4 fw-bold text-danger mb-0">{tempo.dias}</h2>
                <p className="text-secondary mb-0">Dias</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-danger-subtle rounded-4">
                <h2 className="display-4 fw-bold text-danger mb-0">{tempo.horas}</h2>
                <p className="text-secondary mb-0">Horas</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-danger-subtle rounded-4">
                <h2 className="display-4 fw-bold text-danger mb-0">{tempo.minutos}</h2>
                <p className="text-secondary mb-0">Minutos</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-danger-subtle rounded-4">
                <h2 className="display-4 fw-bold text-danger mb-0">{tempo.segundos}</h2>
                <p className="text-secondary mb-0">Segundos</p>
              </div>
            </div>
          </div>

          <p className="fs-4 text-dark mt-5">Desde 21 de Setembro de 2024</p>
        </div>
      </div>
    </div>
  )
}
