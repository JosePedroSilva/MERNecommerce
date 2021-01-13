import React from "react";
import { Col, Row } from "react-bootstrap";
// Images file
import products from "../products";
// COMPONENTS
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
