import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Notifications from '../Utils/Notifications'

import '../styles/App.css';

function App() {
  return (
    <>
    <Notifications>
      <Navbar />
      <Home />
    </Notifications>
    </>
  )
}

export default App;
