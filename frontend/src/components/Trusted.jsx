import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Trusted = () => {
  const company_logo = [
    { logo: "company_logo/ajio.png" },
    { logo: "company_logo/cleartax.png" },
    { logo: "company_logo/dream11.png" },
    { logo: "company_logo/indmoney.png" },
    { logo: "company_logo/paytm.png" },
  ];

  const [shuffledLogos, setShuffledLogos] = useState(company_logo);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledArray = shuffleArray(company_logo);
      setShuffledLogos(shuffledArray);
    }, 2000); 
    return () => clearInterval(interval);
  }, [company_logo]);


  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <Wrapper>
      <h2>Trusted by 5,000+ Companies Worldwide</h2>
      <div className="company_logo">
        <div className="logo">
          {shuffledLogos.map((el, index) => (
            <img src={el.logo} alt="logo" key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;
  width: 90%;
  margin: 0 auto;

  h2 {
    color: #666;
    text-align: center;
  }

  .logo {
    display: flex;
    justify-content: space-between;
  }
`;

export default Trusted;
