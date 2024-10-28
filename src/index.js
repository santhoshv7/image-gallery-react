import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import black from "./assets/black-car.png"
import blue from "./assets/blue-car.png"
import red from "./assets/red-car.png"
import white from "./assets/white-car.png"
import yellow from "./assets/yellow-car.png"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Heading(){
  return(<div className = "heading">
    <h1>Image Gallery</h1>
  </div>)
}

function Gallery(props){
  return(<div className="image-card">
    <img src={props.image} alt= "car_name"></img>
    <p>{props.car_name}</p>
  </div>)
}

const details = [
  {image: black,
    name: "Aston Martin"
  },
  {
    image: red,
    name: "Lamborgini"
  },
  {
    image: yellow,
    name: "Ferrari"
  },
  {
    image: white,
    name: "Benz"
  },
  {
    image: yellow,
    name: "Audi"
  },
  {
    image: black,
    name: "Volvo"
  },
  {
    image: blue,
    name: "Jaguar"
  },
  {
    image: red,
    name: "Volkswagen"
  },

]




root.render(
  <>
  <Heading/>
  <div className="container">
    {details.map((item) =>(
      <Gallery image = {item.image} car_name = {item.name} ></Gallery>))}
    

  </div>

  </>
);

