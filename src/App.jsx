import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddData from './pages/AddData'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import EditData from './pages/EditData'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='add-data' element={<AddData />} />
          <Route path='detail' element={<Detail />} />
          <Route path="/edit/:id" element={<EditData />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App