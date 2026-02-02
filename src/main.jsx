import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dudi from './Dudi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dudi />
  </StrictMode>,
)
