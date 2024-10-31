import { useState } from 'react'

import './App.css'
import Navbar from './components/navabr/Navbar'
import Main from './components/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' container1 '>
   <Navbar/>
   <Main/>
   </div>
  )
}

export default App
