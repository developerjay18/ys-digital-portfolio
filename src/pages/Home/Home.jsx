import React from 'react';
import {
  Header,
  Container,
  HeroSection,
  MovingSlider,
  BookSection,
  Overview,
  DetailOverview,
  HireSection,
  PointsSection,
  StatsSection,
  ProcessSection,
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
      <PointsSection />
      <StatsSection />
      <ProcessSection />
    </Container>
  );
}

export default Home;
