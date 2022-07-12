import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/product">
        Products
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/category">
        Categories
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/ranking">
        Top products
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/cart">
        Basket
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/register">
        Register
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="/login">
        Login
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
