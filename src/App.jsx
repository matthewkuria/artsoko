import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <Nav />
      <Footer />
    </div>
  )
}

export default App
