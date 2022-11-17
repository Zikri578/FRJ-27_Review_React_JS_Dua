import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import "./App.css"
import State2 from '../src/pages/State2.jsx'
import Card2 from '../src/pages/Card2.jsx'
import Layout2 from '../src/pages/Layout2.jsx'
import ConditionalRendering2 from '../src/pages/ConditionalRendering2.jsx'
import FetchingData2 from '../src/pages/FetchingData2.jsx'

export default function App() {
  return (

    <Routes className='App'>
      <Route path='/card2' element={<Card2 />} />
      <Route path='/layout2' element={<Layout2 />} />
      <Route path='/state2' element={<State2 />} />
      <Route path='/fetchingdata2' element={<FetchingData2 />} />
      <Route path='/conditionalrendering2' element={<ConditionalRendering2 />} />
    </Routes>

  )
}
