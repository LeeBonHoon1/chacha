import React, {useState} from 'react'
import style from '../css/Main.module.css'
import iphone from '../imgs/iphone.png'
import portfolio1 from '../imgs/portfolio-1.jpeg'
import portfolio2 from '../imgs/portfolio-2.jpeg'
import portfolio3 from '../imgs/portfolio-3.jpeg'
import portfolio4 from '../imgs/portfolio-4.jpeg'


const Main = (props) => { // props 받아옴

  
console.log(props)
  
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.iphoneText}>
          <h1>Landing Page for Apps</h1>
          <div>Lorem ipsum sit amet. consectetur adipisicing elit.</div>
          <div>Voluptatum, rem, distinctio! Dolores doloremque.</div>
          <button className={style.iphoneBtn}>Show More</button>
        </div>
        <img src={iphone} className={style.iphone}/>
      </div>
    </div>
  )
}

export default Main