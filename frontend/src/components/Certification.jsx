import React from 'react'
import styled from 'styled-components';

const Certification = () => {
  return (
    <Wrapper>
      <div className="cerification_img">
        <img src="images/certificate.jpg" alt="certificate" />
      </div>
      <div className="certification_content">
        <h1 className="title">
          <span>Certification</span> By The N.S.D.C
        </h1>
        <p className='details'>
          NSDC Certification is a prestigious recognition for students who have
          completed accredited skill-based training programs. It validates their
          expertise, demonstrating their dedication to practical skills. This
          certification provides a competitive edge in the job market,
          showcasing proficiency and adherence to industry standards. NSDC
          certifications are widely accepted, unlocking rewarding career
          opportunities and personal growth.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem 5%;
  background-color: #ddefe4;
  display: flex;
  gap:4rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .cerification_img {
    flex: 1;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
    img {
      width: 100%;
      margin: 2rem auto;
    }
  }
  .certification_content {
    flex: 1;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
    .title {
      font-size: 2.7rem;
      line-height: 1.2;
      font-weight: bolder;
    }
    h1 span {
      color: rgb(51, 239, 160);
    }
    .details {
      text-align: justify;
      font-size: 1.2rem;
      line-height: 1.4;
      color: #1f1e1e;
      opacity: 0.9;
    }
  }
`;
export default Certification