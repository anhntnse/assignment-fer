import React from 'react';
import styled from 'styled-components';

const InputSideWrapper = styled.form`
  height: 90%;
  padding-bottom: 50px;
  position: relative;
  padding-right: 150px;
  width: 70%; /* Adjust this width to balance the space next to DetailsBar */
  
  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;

const InputWrapper = styled.div`
  border: 20px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 15px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const SubMitButton = styled.input`
    position: absolute;
    bottom: 20px;
    left: 600px; /* Changed from right to left */
    padding: 10px;
    background-color: rgb(8, 8, 63);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 25px 12px 24px;
    cursor: pointer;
`;

const InputSide = () => {
  return (
    <InputSideWrapper>
      <InputWrapper>
        <p>Name</p>
        <Input type="text" placeholder="Your Name" />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input type="email" placeholder="You email @gmai.com" />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input type="number" placeholder="Your phone" />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput placeholder="Write your message" />
      </InputWrapper>
      <SubMitButton type="submit" value="Send Message" />
    </InputSideWrapper>
  );
};

export default InputSide;