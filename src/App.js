import Main from './components/Main'
import Footer from './components/Footer'
import Login from './page/Login'
import Signup from './page/Signup'
import {Switch, Route} from 'react-router-dom' // 
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
