import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Projets from './pages/Projets'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
