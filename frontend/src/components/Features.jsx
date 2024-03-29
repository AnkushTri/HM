import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Features = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dataArray = [
    {
      image: "images/img1.png",
      title: "Class Management tools for Educations",
      content:
        "class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignment in real-time for students to complete and submit",
    },
    {
      image: "images/img2.png",
      title: "A user interface designed for the classroom",
      contentsLists: [
        {
          logo: "/logos/four-logg.png",
          content:
            "Teacher don't get lost in the grid view and have a dedicated podium space",
        },
        {
          logo: "/logos/studentslogo.png",
          content: "TA's and presenters can be moved to the front of the class",
        },
        {
          logo: "/logos/chatlogo.png",
          content:
            "Teachers can easily see all students and class data at one time",
        },
      ],
    },
    {
      image: "images/img3.png",
      title: "Tools For Teachers And Learners",
      content:
        "class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teacher can review and grade test and quizzes in real-time.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
        setIsAnimating(false);
      }, 700); // Adjust this timing to match animation duration
    }, 4000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [dataArray.length]);

  return (
    <Container>
      <div className="header">
        <h1>
          Our <span>Features</span>
        </h1>
        <p>
          Unleash Your Potential: Explore Our Feature-Rich Toolbox for a
          Seamless, Engaging, and Rewarding Learning Journey Like Never Before!
        </p>
      </div>
      <Wrapper>
        <ImageWrapper isAnimating={isAnimating}>
          <img src={dataArray[index].image} alt="classmanage" />
        </ImageWrapper>
        <ContentWrapper>
          <ContentBox isAnimating={isAnimating}>
            {index === 0 ? (
              <Title>
                <FirstLine1>Class Management</FirstLine1> tools for Educations
              </Title>
            ) : index === 1 ? (
              <Title>
                A<FirstLine1>user interface</FirstLine1> designed for the
                classroom
              </Title>
            ) : (
              <Title>
                <FirstLine1>Tools</FirstLine1> For Teachers And Learners
              </Title>
            )}
            {index === 1 ? (
              <ContentList>
                {dataArray[index].contentsLists.map((item, i) => (
                  <ContentItem key={i}>
                    <ContentLogo src={item.logo} alt="logo" />
                    <ContentText>{item.content}</ContentText>
                  </ContentItem>
                ))}
              </ContentList>
            ) : (
              <Details>{dataArray[index].content}</Details>
            )}
          </ContentBox>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
  background-color: #ddefe4;
  .header {
    width: 80%;
    margin: 0 auto;
    h1 {
      font-size: 2.5rem;
      text-align: center;
    }
    h1 span {
      color: rgb(51, 239, 160);
    }
    p {
      font-size: 1.4rem;
      text-align: center;
      line-height: 1.4;
      color: rgb(36, 40, 77);
    }
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  

  padding: 2rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 90%;
    height: 50vh;
    transition: transform 0.5s ease-out;
    transform: ${({ isAnimating }) =>
      isAnimating ? "translateX(-100%)" : "translateX(0)"};
    @media (max-width: 768px) {
      width: 90%;
      height: 30vh;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -4rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  opacity: ${({ isAnimating }) => (isAnimating ? "0" : "1")};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: ${({ isAnimating }) =>
    isAnimating ? "translateX(100%)" : "translateX(0)"};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 2px;
  line-height: 3rem;
  font-weight: 900;
`;

const FirstLine1 = styled.span`
  color: rgb(51, 239, 160);
`;


const Details = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  color: rgb(36, 40, 77);
`;

const ContentList = styled.ul`
  list-style: none;
`;
const ContentItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: -1rem;
`;

const ContentLogo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const ContentText = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  color: rgb(36, 40, 77);
`;



export default Features;
