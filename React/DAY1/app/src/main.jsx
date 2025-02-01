import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'
import Demo from './component/demo.jsx'
import Parent from './props/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc/> 
    <Demo/> */}
    <Parent/>
  </StrictMode>,
)
