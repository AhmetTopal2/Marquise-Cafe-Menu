import { useState } from 'react'
import './App.css'
import Header from './Header';
import Carousel from './Carousel';
import styled from 'styled-components';
import Card from "./Card";
import Section from './Section';
import Footer from './Footer';



function App() {



  return (
    <>
      <Header></Header>
      <Carousel></Carousel>

      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default App