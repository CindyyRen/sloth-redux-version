import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
import { useSelector, useDispatch } from 'react-redux';
const HomePage = () => {
  const { featured_products } = useSelector((state) => state.products);
  console.log(featured_products);
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
