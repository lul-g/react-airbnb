import React from 'react'
import img from './assets/img';
import img2 from './assets/img2';


export default function Card(props) {
  const {coverImg, openSpots, stats , title, location, price} = props.datum
  const {rating, reviewCount} = stats
  console.log(props.datum)
  let tag = ''
  if(openSpots === 0) {
    tag = 'soldout'
  }
  else if(location === 'Online') {
    tag = location
  }
  else {
    tag =''
  }
    return (
      <div className="card">
        <img src={coverImg} alt="" />
        {tag && <span className='tag'>{tag}</span>}
        <ul className='rating flex'>
          <li><i className="fa-solid fa-star"></i></li>
          <li>{rating}</li>
          <li className="num">({reviewCount})</li>
          <li className="location"> <span>{location}</span> </li>
        </ul>
        <div className='description'>{title}</div>
        <div className='price'>From {price} / <span className="light">person</span></div>
      </div>
    )
}

