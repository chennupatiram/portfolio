import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: linear-gradient(90deg,green,yellow,blue);
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Heading = styled.h1`
fontSize: '50px',
color:'#fff',
margin: '20px',
padding: '10px',
border: '1px solid #ddd',
borderRadius: '5px',
background: 'linear-gradient(90deg,green,yellow,blue)',
  
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    
  }
`;

const Footer = styled.section`
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
  }

  .box h3 {
    color: #000;
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }

  .box a {
    color: #000;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    display: block;
  }

  .box a i {
    color: #000;
    padding-bottom: 0.5rem;
    transition: 0.2s linear;
  }

  .box a:hover {
    padding-bottom: 2rem;
  }

  .credit {
    text-align: center;
    padding-top: 3rem;
    margin-top: 3rem;
    border-top: 0.1rem solid white;
    font-size: 2rem;
    color: red;
  }

  .credit span {
    color: orange;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const Box = styled.div`
  flex: 1;
  h3 {
    color: #000;
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }

  a {
    color: #000;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    display: block;
  }

  a i {
    color: #000;
    padding-bottom: 0.5rem;
    transition: 0.2s linear;
  }

  a:hover {
    padding-bottom: 2rem;
  }
`;


const Credit = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 0.1rem solid white;
  font-size: 2rem;
  color: var(--light-bg);

  span {
    color: orange;
  }
`;


const Contact = () => {
  return (
    <Container>
      <Heading>
        Contact Me
      </Heading>
      <Desc>
        Feel free to reach out to me for any questions or opportunities!
      </Desc>
      <Footer id="contact">
        <BoxContainer>
          
          <Box>
            <h3>contacts info</h3>
            <a href="#">
            +91 8886788098
            </a>
            <a href="#">
            ramchennupati2504@gmail.com
            </a>
            <a href="#">
             andhra pradesh, bapatla district,
              martur mandal-523261
            </a>
          </Box>
          <Box>
            <h3>follow us</h3>
            <a href="#">
            telegram
            </a>
            <a href="#">
            linkedin
            </a>
            <a href="#">
            instagram
            </a>
          </Box>
        </BoxContainer>
        <Credit>
          credit by <span>Venkata Ram</span> | all rights reserved!
        </Credit>
      </Footer>
    </Container>
  );
};

export default Contact;