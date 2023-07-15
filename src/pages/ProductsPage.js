import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Filters, ProductList, Sort, PageHero } from '../components';

import { loadProducts } from '../actions';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(loadProducts(products));
  }, [products, dispatch]);

  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
