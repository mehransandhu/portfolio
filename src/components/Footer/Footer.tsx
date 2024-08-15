import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import facebookIcon from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="" className="logo">
        <span>Mehran Sandhu</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
      <a
          href="https://maps.app.goo.gl/TYEh26ZkLYs5fWMA6"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Sandhu Tiles" />
        </a>
        <a
          href="https://www.facebook.com/mani.jutt.395454?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B923127760881&text=Hello+Mehran"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/mehransandhu881"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
