import React from 'react';
import {
  Header,
  Container,
  HeroSection,
  MovingSlider,
  BookSection,
  Overview,
  DetailOverview,
  HireSection
} from '../../components';
import { logos } from '../../components/data';

function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <MovingSlider imgLinks={logos} />
      <BookSection />
      <Overview />
      <DetailOverview />
      <HireSection />
    </Container>
  );
}

export default Home;
