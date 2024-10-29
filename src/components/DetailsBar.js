import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const Container = styled.div`
    display: flex;
    justify-content: flex-start; 
    width: 50%;
`;

const DetailsBarWrapper = styled.div`
    background-color: #993399; /* Changed background color to red */
    border-radius: 7px;
    padding: 90px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: auto;
    padding-bottom: 135px;
    
    @media (max-width: 768px) {
        padding-bottom: 80px;
        grid-row: 2;
        width: 100%; /* Full width on mobile */
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextOne = styled.p`
    text-align: center;
    color: #EEEEEE; /* Changed text color to gray */
    font-size: 20px;
    font-weight: bold;
`;

const TextTwo = styled.p`
    text-align: center;
    color: #EEEEEE; /* Changed text color to gray */
    font-size: 16px;
    line-height: 18px;
`;

const ContactsWrapper = styled.a`
    display: flex;
    align-items: center; /* Align icons and text */
    width: 200px;
    height: 40px; /* Adjusted height for better visibility */
    margin-top: 50px;
    cursor: pointer;
    text-decoration: none;
`;

const ContactText = styled.div`
    color: #EEEEEE; /* Changed text color to gray */
    font-size: 15px;
    margin-left: 10px;
`;

const SocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 50px; /* Adjusted height for social icons */
    margin-top: 20px;
    cursor: pointer;
`;

const SocialIconWrapper = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    &:hover {
        background-color: rgb(252, 113, 137);
    }
`;

const DetailsBar = () => {
  return (
    <Container>
      <DetailsBarWrapper>
        <TextWrapper>
          <TextOne>Contact Information</TextOne>
          <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
        </TextWrapper>
        <div>
          <ContactsWrapper href="tel:+233543201893">
            <Icon.Phone size={20} color="rgb(252, 113, 137)" />
            <ContactText>+233543201893</ContactText>
          </ContactsWrapper>
          <ContactsWrapper href="mailto:aljay3334@gmail.com">
            <Icon.Mail size={20} color="rgb(252, 113, 137)" />
            <ContactText>customer@exuclusive.com</ContactText>
          </ContactsWrapper>
          <ContactsWrapper href="mailto:aljay3334@gmail.com">
            <Icon.Mail size={20} color="rgb(252, 113, 137)" />
            <ContactText>support@exuclusive.com</ContactText>
          </ContactsWrapper>
        </div>

        <div>
          
        </div>

        <SocialsWrapper>
          <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
            <Icon.Facebook color="#fff" size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper href="https://www.instagram.com/_allenjones/">
            <Icon.Instagram color="#fff" size={20} />
          </SocialIconWrapper>
          <SocialIconWrapper href="https://www.linkedin.com/in/allen-jones-b799b7171/">
            <Icon.Linkedin color="#fff" size={20} />
          </SocialIconWrapper>
        </SocialsWrapper>
      </DetailsBarWrapper>
    </Container>
  );
};

export default DetailsBar;