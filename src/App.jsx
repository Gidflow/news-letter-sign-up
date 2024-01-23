import { useState } from 'react'


import './App.css'
import Card from './component/Card'
import SUccess from './component/successCard/SUccess'

function App() {
  
      const [show, setShow] = useState(false);
      const [email, setEmail] = useState("");
  return (
    <div className="App">
  <Card show={show} setShow={setShow} setEmail={setEmail} email={email}/>
    {
       show && <SUccess email={email} show={show} setShow={setShow}/>
    }
  
    </div>
  )
}

export default App
