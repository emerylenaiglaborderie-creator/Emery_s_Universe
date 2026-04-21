import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Projets from './pages/Projets'
import Cv from './pages/Cv'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <BrowserRouter basename="/Emery_s_Universe/">
      <CustomCursor />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
