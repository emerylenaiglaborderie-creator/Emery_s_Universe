import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Particles from '../components/Particles'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="splash">
      <Particles />
      <Header large animateTitle />
      <button className="press-btn" onClick={() => navigate('/home')}>
        PRESS HERE
      </button>
    </div>
  )
}
