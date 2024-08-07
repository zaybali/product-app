"use client";

import { useState } from "react";
import AllProducts from "./allproducts";
import Categories from "./categories";
import MyInfo from "./myinfo";
import { ProductItemType } from "./product-type";
import './styles.css';


const products: ProductItemType[] = [
  {
    id: 1,
    name: 'Iphone 15 Promax',
    price: 2500,
    category: "Phones"
  },
  {
    id: 2,
    name: 'Airpod',
    price: 25,
    category: "Gadgets"
  },
  {
    id: 3,
    name: 'Eid Special Kurta',
    price: 30,
    category: "Clothes"
  },
  {
    id: 4,
    name: 'Tesla Cybertruck',
    price: 65000,
    category: "Cars"
  },
  {
    id: 5,
    name: 'Macbook',
    price: 2500,
    category: "Computers"
  }
];

export default function Home() {
  const [categList, setCategList] = useState([
    "Sort Price","All", "Phones", "Gadgets", "Clothes", "Cars", "Computers"
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);


  return (
    <div className="container">
      <MyInfo />
      <Categories
        categories={categList}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <AllProducts
        productList={filteredProducts}
      />
    </div>
  );
}
