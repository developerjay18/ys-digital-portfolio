import React from 'react';
import {
    BurgerMenu,
  Container,
  Footer,
  Header2,
  PPolicy,
  ScrollToTop,
} from '../../components';

function PP() {
  return (
    <Container>
      <ScrollToTop />
      <Header2 />
      <BurgerMenu/>
      <PPolicy />
      <Footer />
    </Container>
  );
}

export default PP;
