import { Container } from "./styles";
import MehranSandhu from "../../assets/MehranSandhu.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    // About
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hello, I'm Mehran Sandhu, a specialist in crafting durable and high-quality construction materials. My expertise spans tough tiles, sewerage pipes, and structural pillars, as well as innovative moulding wall designs. 
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          With a focus on durability and aesthetic appeal, I am committed to delivering products that meet both functional and design needs. My passion lies in transforming architectural visions into reality through precision and craftsmanship.</p>
        </ScrollAnimation>
          </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={MehranSandhu} alt="Mehran Sandhu" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
