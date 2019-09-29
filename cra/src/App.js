import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import zdog from 'zdog'

function App() {
  useEffect(() => {
    let spin = true
    const illo = new zdog.Illustration({
      element: '.main',
      zoom: 4,
      dragRotate: true,
      onDragStart: () => (spin = false),
    })

    // circle
    new zdog.Ellipse({
      addTo: illo,
      diameter: 20,
      translate: { z: 10 },
      stroke: 5,
      color: '#636',
    })

    // square
    new zdog.Rect({
      addTo: illo,
      width: 20,
      height: 20,
      translate: { z: -10 },
      stroke: 3,
      color: '#E62',
    })

    const animate = () => {
      if (spin) {
        illo.rotate.y += 0.03
      }
      illo.updateRenderGraph()

      requestAnimationFrame(animate)
    }

    animate()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <canvas className="main" width="240" height="240" />
      </header>
    </div>
  )
}

export default App
