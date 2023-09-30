import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { HouseDetail } from './component/HouseDetail/HouseDetail.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      {
        <div style={{ width: '100%', height: '20vh', backgroundColor: '#002451', marginBottom: '20px', display: 'flex', justifyContent: 'center', color: 'white', alignItems: 'center', fontSize: '30px' }}>
          DirectLender.com
        </div>
      }
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/detail' element={<HouseDetail />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
