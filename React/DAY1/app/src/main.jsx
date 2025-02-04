import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/demo.jsx'
// import Parent from './props/Parent.jsx'
import State from './state/State.jsx'
// import UserDetailsClass from './component/UserClass.jsx'
// import UserDetailsFunctional from './component/UserFunction.jsx'
// import UserDetails from './props/User.jsx'
// import Userp from './props/UserDetalis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc/> 
    <Demo/> */}
    {/* <Parent/> */}
    {/* <UserDetailsClass/>
    <UserDetailsFunctional/>
    <Userp/>
    <UserDetails/> */}
    <State/>
  </StrictMode>,
)
