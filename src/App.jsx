import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import logo from './assets/svg/Vector.png'
import img from './assets/img';
import img2 from './assets/img2';


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <div className="header">
            <img src={logo} className="header-icon" />
      </div>
      <div className="main">
            <div className="top grid">
              <img src={img.a} alt="" />
              <img src={img.b} alt="" />
              <img src={img.c} alt="" />
              <img src={img.d} alt="" />
              <img src={img.e} alt="" />
              <img src={img.f} alt="" />
              <img src={img.g} alt="" />
              <img src={img.h} alt="" />
              <img src={img.i} alt="" />
            </div>
            <div className="mid">
              <h1>Online Experiences</h1>
              <p>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
            </div>
            <div className="btm flex">
              <div className="card">
                <img src={img2.a} alt="" />
                <span className='tag'>Sold out</span>
                <ul className='rating flex'>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li>5.0</li>
                  <li class="num">(6)</li>
                  <li className="location"> <span>USA</span> </li>
                </ul>
                <div className='description'>Life lessons with Katie Zaferes</div>
                <div className='price'>From $136 / <span className="light">person</span></div>
              </div>
              <div className="card">
                <img src={img2.c} alt="" />
                <span className='tag'>online</span>
                <ul className='rating flex'>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li>5.0</li>
                  <li class="num">(30)</li>
                  <li className="location"><span>USA</span> </li>
                </ul>
                <div className='description'>Learn wedding photography</div>
                <div className='price'>From $125 / <span className="light">person</span></div>
            </div>
            <div className="card">
                <img src={img2.b} alt="" />
                <ul className='rating flex'>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li>4.8</li>
                  <li class="num">(2)</li>
                  <li className="location"> <span>USA</span> </li>
                </ul>
                <div className='description'>Group Mountain Biking</div>
                <div className='price'>From $50 / <span className="light">person</span></div>
            </div>
            </div>
            
      </div>
    </section>
  )
}

export default App
