import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const apikey = process.env.REACT_APP_API_KEY

  const [progress,setProgress] = useState(0)
  
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="general" country="in" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="business" country="in" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  pageSize={8} category="entertainment" country="in" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="health" country="in" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="science" country="in" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="sports" country="in" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} pageSize={8} category="technology" country="in" />} />
       </Routes>
        
      </div>
    )
  
}

export default App
