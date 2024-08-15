import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you want to ask anything about our products? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mehransandhu888@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mehransandhu888@gmail.com">mehransandhu888@gmail.com</a>
        </div>
        <div>
        <a href="tel:+923127760881"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+923127760881">(+92) 3127760881</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}