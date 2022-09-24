import { useState } from 'react'
import './App.css'
import Header from './Header'
import Top from './Top'
import Card from './Card'
import img2 from './assets/img2';
import Data from './data'



function App() {
  const [count, setCount] = useState(0)
  const card = Data.map(datum => {
    return <Card 
              key={datum.id}
              datum = {datum}   
        />
  })

  return (
    <section className="App">
      <Header />
      <Top />
      <div className="flex cards">
        {card}
      </div>
    </section>
  )
}

export default App
