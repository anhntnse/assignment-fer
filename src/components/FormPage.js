import React from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar';
import InputSide from './InputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 70%;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 70vh;
  margin-top: 60px; /* Adjust margin to maintain position after removing the heading */
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;