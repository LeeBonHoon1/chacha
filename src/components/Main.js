import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import style from '../css/Main.module.css'
import iphone from '../imgs/iphone.png'
import Login from '../page/Login'
import Signup from '../page/Signup'
import portfolio1 from '../imgs/portfolio-1.jpeg'
import portfolio2 from '../imgs/portfolio-2.jpeg'
import portfolio3 from '../imgs/portfolio-3.jpeg'
import portfolio4 from '../imgs/portfolio-4.jpeg'


const Main = () => { // props 받아옴
  

  const [userInfo, setUserInfo] = useState('유저의 정보')
  const [loginPass, setLoginPass] = useState('가입 완료된 유저')


  const history = useHistory()


  
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.iphoneText}>
          <h1>Landing Page for Apps</h1>
          <div>Lorem ipsum sit amet. consectetur adipisicing elit.</div>
          <div>Voluptatum, rem, distinctio! Dolores doloremque.</div>
          <button className={style.iphoneBtn} onClick={() => {history.push('login')}}>Login!</button>
        </div>
        <img src={iphone} className={style.iphone}/>
        <Login userInfo={userInfo} loginPass={loginPass}/>
      </div>
    </div>
  )
}

export default Main