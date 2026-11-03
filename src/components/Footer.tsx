import { useLocation } from 'react-router-dom'

const EMAIL = 'emery.laborderie@gmail.com'

export default function Footer() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  return (
    <footer className="site-footer" id="contact">
      <hr className="divider" />
      <h2 className="footer-title">Contact</h2>
      <p className="footer-text">Une question, un projet ? Écris-moi.</p>
      <div className="footer-links">
        <a href={`mailto:${EMAIL}`} className="footer-link">{EMAIL}</a>
        <a href="https://github.com/emerylenaiglaborderie-creator" target="_blank" rel="noreferrer" className="footer-link">
          GitHub
        </a>
      </div>
    </footer>
  )
}
