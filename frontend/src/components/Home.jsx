import React from 'react'
import HeroSection from './HeroSection'
import Trusted from './Trusted'
import VideoContainer from './VideoContainer'
import Features from './Features'
import Placement from './Placement'
import Certification from './Certification'
import Testimation from './Testimation'
import PopUp from './PopUp'
import Compo from './Compo'

const Home = () => {
  return (
    <>
    <Compo/>
    {/* <PopUp/> */}
    <HeroSection/>
    <Trusted/>
    <VideoContainer/>
      <Features />
      <Placement/>
      <Certification/>
      <Testimation/>
    </>
  );
}

export default Home