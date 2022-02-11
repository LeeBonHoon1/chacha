import Main from './components/Main'
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [userInfo, setUserInfo] = useState('유저의 정보')
  const [loginPass, setLoginPass] = useState('가입 완료된 유저')

  return (
    <div className="App">
      <Main loginPass={loginPass} userInfo={userInfo}/>
    </div>
  );
}

export default App;
