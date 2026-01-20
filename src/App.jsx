import { Routes, Route, Navigate } from 'react-router-dom'
import CreatorLanding from './pages/CreatorLanding'
import AdvertiserLanding from './pages/AdvertiserLanding'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreatorLanding />} />
      <Route path="/biz" element={<AdvertiserLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
