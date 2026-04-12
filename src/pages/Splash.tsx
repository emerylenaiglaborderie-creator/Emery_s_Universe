import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="splash">
      <Header large />
      <button className="press-btn" onClick={() => navigate('/home')}>
        PRESS HERE
      </button>
    </div>
  )
}
