import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'




const App = () => {

  // create a function to change the theme when the toggle button is clicked

const [theme, setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
       <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
