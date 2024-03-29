import React from 'react'
import styled from 'styled-components'

const VideoContainer = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1>What is Hoping Minds</h1>
        <p>
          Welcome to HopingMinds, your gateway to a brighter future. As an
          esteemed partner of the National Skill Development Corporation (NSDC),
          we stand at the forefront of transformative education, dedicated to
          nurturing the next generation of leaders and innovators.
        </p>
      </div>
      <div className="video">
        <div className="video_contain">
          <video
            src="videos/Corporate1.mp4"
            preload="auto"
            controls
            loop
          ></video>
        </div>
        <div className="video_contain">
          <video
            src="videos/Corporate2.mp4"
            preload="auto"
            controls
            loop
          ></video>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  padding: 2rem 0;
  margin: 0 auto;
  .header {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    h1 {
      margin-top: -1rem;
      color: rgb(51, 239, 160);
      font-size: 2.7rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.4;
      color: #666;
    }
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  .video {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
      width: 90%;
      margin: 0 auto;
    }
  }
  .video_contain {
    width: 47%;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  video {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
`;
export default VideoContainer