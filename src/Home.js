import React from "react";
import "./Home.css";
import { data1, data2, data3 } from "./Data/Data";
import Product from "./Product";
import Image from "./image/1.jpg";

function Home() {
  
  return (
    <div className="home">
      <div className="home_container">
        <img
          alt="home pic"
          className="home_image" src={Image}
        
        />
        <div className="home_row">
          {data1.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
        <div className="home_row">
          {data2.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
        <div className="home_row">
          {data3.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
