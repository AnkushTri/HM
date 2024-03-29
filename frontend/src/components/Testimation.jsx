import React, { useState,useEffect } from "react";
import styled from "styled-components";

const Testimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 const profile = [
   {
     img: "profile_img/ajitesh.jpeg",
     disc: "Hoping Minds programs transform students through hands-on learning, personalized attention, and market-aligned curriculum. Highly recommend as a pathway to success.",
     name: "Ajitesh Abhishek",
     star: "* * * * ",
   },
   {
     img: "profile_img/Lakshay.jpg",
     disc: " Right from the recruitment and interview process,we were able to see a different level of professionalism in Hm's candidates.It is great to see freshers demonstrating corperate manually.",
     name: "Lakshay S",
     star: "* * * * *",
   },
   {
     img: "profile_img/SidharthKakar.jpg",
     disc: "Their program cultivated skilled and motivated coders who now excel in their roles, driving impressive performance.They have been able to quickly adopt to their roles and outshine.",
     name: "Sidharth Kakar",
     star: "* * * *",
   },
   {
     img: "profile_img/TuhinaJain.jpg",
     disc: "HM's students come with a certain level of exposure and practical experience that distinguishes them from the rest.we are able to save critical time as they start delivering early.",
     name: "Tuniha Jain",
     star: "* * * * *",
   },
 ];

  const handleNextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.length);
  };
   useEffect(() => {
     const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.length);
     }, 2000); 
     return () => clearInterval(interval);
   }, [profile.length]);

  return (
    <Wrapper>
      <div className="testimation_content">
        <h2><span><hr /></span>TESTIMONIAL</h2>
        <h1>What They Say ?</h1>
        <p className="para1">
          HopingMinds has earned the trust of over 100 corporations, more than
          50 universities, and over 10,000 students based on positive
          experiences and successful outcomes.
        </p>
        <p className="para2">
          Our community continues to grow, thanks to the proven results and
          confidence shared by our partners and learners
        </p>
      </div>

      <div className="testimation_profile">
        <img src={profile[currentIndex].img} alt="img" />

        <div className="logo" onClick={handleNextProfile}>
          <img src="logos/rightarrow.svg" alt="Right arrow" />
        </div>

        <div className="testimation_profile_dis">
          <p>{profile[currentIndex].disc}</p>
          <div className="profile_name_like">
            <h3>{profile[currentIndex].name}</h3>
            <span>{profile[currentIndex].star}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 5rem 5%;
  margin-bottom: 3rem;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
  .testimation_content {
    width: 60%;
    text-align: justify;
    h2 {
      color: #666;
    }

    h1 {
      color: rgb(51, 239, 160);
    }
    p {
      color: #666;
      font-size: 1.2rem;
      line-height: 1.2;
    }
    @media (max-width: 768px) {
      width: 90%;
      padding: 0 1rem;
      margin: 0 auto;
    }
  }
  .testimation_profile {
    width: 40%;
    position: relative;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      width: 90%;
      padding: 0 1rem;
      margin-bottom: 5rem;
    }
    img {
      width: 90%;
      height: 20rem;
      border-radius: 20px;
      @media (max-width: 768px) {
        width: 90%;
        height: 30vh;
        margin: 0 auto;
      }
    }
    .logo {
      cursor: pointer;
      img {
        position: absolute;
        top: 40%;
        right: 2%;
        width: 30px;
        height: 30px;
        background-color: white;
        padding: 1rem;
        border-radius: 50%;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
      }
    }
    .testimation_profile_dis {
      width: 70%;
      position: absolute;
      top: 70%;
      right: 0%;
      background-color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 20px;
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
      .profile_name_like {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -1rem;
      }
      p {
        line-height: 1.3;
      }
      span {
        color: gold;
        font-size: 1.5rem;
      }
    }
  }
`;

export default Testimation;
