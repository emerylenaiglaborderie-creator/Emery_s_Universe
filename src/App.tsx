import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Projets from './pages/Projets'
import Cv from './pages/Cv'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter basename="/Emery_s_Universe/">
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
