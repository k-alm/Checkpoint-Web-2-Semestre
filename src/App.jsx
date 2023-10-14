import Cabecalho from "./components/Cabecalho/Cabecalho"
import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";

export default function App(){

  return (
    <>
      <div className='container'>
        <Cabecalho/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}