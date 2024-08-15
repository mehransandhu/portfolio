import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import facebookIcon from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import InstagramIcon from '../../assets/instagram.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Mehran Sandhu</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Owner of Sandhu Tiles Narowal</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Proudly serving the community since 2010</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
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
          <img src={InstagramIcon} alt="Instagram" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}