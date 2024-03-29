import React from "react";
import styled from "styled-components";

const Placement = () => {
  const dataArray = [
    {
      imag: "logos/im1.svg",
      title: "Enroll With Us",
      disc: "Take the first step towards a successful career. Join HopingMinds and be a part of a community that values growth, innovation, and success.",
    },
    {
      imag: "logos/im2.svg",
      title: "Get Training",
      disc: "Choose between online or offline classes and gain additional skills in technical subjects, aptitude, and personality development. Join us to unlock your full potential!",
    },
    {
      imag: "logos/im3.svg",
      title: "Get Placed & Pay",
      disc: "With HopingMinds, you get a job before you pay any fees. It's a simple, stress-free approach. No job means no charges",
    },
  ];

  return (
    <Wrapper>
      <Heading>
        <h1>Pay After Placement</h1>
        <p>
          Hoping Minds is democratizing education with a unique Pay After
          Placement (PAP) Model. PAP allows you to study the course of your
          choice at ₹0 upfront fee with our PAP Agreement.
        </p>
      </Heading>
      <CardsContainer>
        {dataArray.map((data, index) => (
          <Card key={index}>
            <img src={data.imag} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.disc}</p>
          </Card>
        ))}
      </CardsContainer>
      <Button>
        <button>Get Started</button>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #11de82;
  }

  p {
    width: 90%;
    margin: 0 auto;
    font-size: 1.2rem;
    color: #666;
  }
`;

const CardsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 25%;
  min-width: 200px;
  flex-basis: auto; /* default value */
  flex-grow: 1;
  box-shadow: 0px 4px 10px rgba(0, 128, 0, 0.3);

  img {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.3rem;
    color: #666;
  }

  p {
    color: #666;
    text-align: justify;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;
const Button = styled.div`
  margin: 3rem 0;
  button {
    padding: 0.5rem 2rem;
    border: none;
    margin: 0 auto;
    background-color: #11de82;
    color: white;
    border-radius: 30px;
    font-size: 1.2rem;
  }
`;

export default Placement;
