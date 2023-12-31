import React from 'react';
import {
  Container,
  Header2,
  TnC,
  Footer,
  ScrollToTop,
  BurgerMenu,
} from '../../components';

function TNC() {
  return (
    <Container>
      <ScrollToTop />
      <Header2 />
      <BurgerMenu />
      <TnC />
      <Footer />
    </Container>
  );
}

export default TNC;
