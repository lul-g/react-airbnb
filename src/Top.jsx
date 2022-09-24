import React from 'react'
import img from './assets/img';

export default function Top() {
    return (
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
        </div>
    )
}