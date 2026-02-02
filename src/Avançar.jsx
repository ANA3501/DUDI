import { useState, useEffect } from 'react'
import img4 from './assets/img4.jpeg'
import vd1 from './assets/vd1.mp4'
import backIcon from './assets/11541959.png'

export default function Avançar({ onVoltar }) {
  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const calcularTempo = () => {
      const inicio = new Date('2024-09-23T00:00:00')
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

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
        className="btn position-fixed top-0 start-0 m-3 rounded-circle" 
        onClick={onVoltar}
        style={{zIndex: 1000, width: '55px', height: '55px', padding: 0, border: 'none', backgroundColor: 'transparent'}}
      >
        <img src={backIcon} alt="Voltar" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
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
              width: screenSize.width < 540 || screenSize.height < 701 ? 'clamp(80px, 20vw, 150px)' : '150px',
              zIndex: 20,
              transition: 'width 0.3s ease'
            }}
          >
            <div style={{backgroundColor: '#e9ecef', height: screenSize.width < 540 || screenSize.height < 701 ? 'clamp(60px, 15vh, 120px)' : '120px', marginBottom: '10px', overflow: 'hidden', transition: 'height 0.3s ease'}}>
              <img src={img4} alt="Nós" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <p style={{margin: 0, fontSize: screenSize.width < 540 || screenSize.height < 701 ? '10px' : '12px', fontWeight: 'bold', textAlign: 'center', transition: 'font-size 0.3s ease'}}>&lt;3</p>
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

          <p className="fs-4 text-dark mt-5">Desde 23 de Setembro de 2024</p>
        </div>
        
        <div className="d-flex justify-content-center mt-5">
          <div className="row w-100" style={{maxWidth: '1000px'}}>
            <div className="col-md-6">
              <video width="100%" controls style={{borderRadius: '15px'}}>
                <source src={vd1} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            <div className="col-md-6 d-flex align-items-center ps-4">
              <p className="fs-5 text-dark">Espero por muitos mais dias ao lado e que me faças feliz em 
                todos eles meu amor, amo cada momento contigo fazes-me rir até ficar sem ar demasiadas vezes 
                ahahaha, até quando me chateias eu ainda te amo. Não imaginas a sorte que tenho por estar com um 
                rapaz tão incrível como tu e que me trata tão bem, mesmo quando estou de mau humor, tens a tua 
                paciência e eu dou-te imenso valor coração, obrigada por tudo Dudi, amo-te muito. &lt;3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
