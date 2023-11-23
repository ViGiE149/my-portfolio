import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;

@media (max-width: 960px) {
    padding: 0px;
}

&:before {
  content: "";
  position: absolute;
  top:0;
  left: 0;
  z-index: -100;
  height: 13px;
  background-color:  #008080;
  border-width: 30px;
  border-style: solid;
 
  border-color: transparent transparent #008080 ; /* Match the top div's background color */
}

&:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -100;
  height: 13px;
  background-color:#4682B4;
  border-width: 30px;
  border-style: solid;
  border-top-left-radius: 50px 20px;
  border-color: transparent transparent #4682B4; /* Match the top div's background color */
}



`

const Wrapper = styled.div`
border-top-left-radius: 50px 20px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const PP = styled.p`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color:lightgray;
`
const A = styled.a`
text-decoration: none;
  color:#FFDB58;
`
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: white;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: lightgray;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color:#008080;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: white;
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  font-size: 18px;
  color: lightgray;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid gray;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  font-size: 18px;
  color:lightgray;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid lightgray;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: #FF6F61;
  background: #FF6F61;
  background: #FF6F61;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_iht2ej9', 'template_5a19fbh', form.current, 'sdec_-eHbbd95KUHJ')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        
    <PP>Phone: <A href="tel:0784951538">0784951538</A></PP>
    <PP>Email: <A href="mailto:vgwala149@email.com">vgwala149@gmail.com</A></PP>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me </ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact