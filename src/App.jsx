import Cabecalho from "./components/Cabecalho"
//import Section from "./components/Section"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
//import { useState } from "react";

export default function App(){

  return (
    <>
      <div>

        <Cabecalho/>

      
        <Outlet/>

       

        <Footer/>

      </div>

    </>
  );
}