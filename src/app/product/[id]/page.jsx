"use client";

import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import ProductList from "../../components/productList/Productlist";
import ProductOverview from "../../components/productOverview/Productoverview";
import RecentlyViewed from "../../components/recentlyViewed/RecentlyViewed";
import React from "react";

const Product = () => {
  return (
    <>
      <PageWrapper>
        <ProductOverview />
        <ProductList />
        <RecentlyViewed />
      </PageWrapper>
    </>
  );
};

export default Product;
