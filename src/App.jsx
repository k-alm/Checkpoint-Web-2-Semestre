import Cabecalho from "./components/Cabecalho/Cabecalho"
import { Outlet } from "react-router-dom";
import styles from "./App.module.css"
import Footer from "./components/Footer/Footer";

export default function App(){

  return (
    <>
      <div className={styles.container} >
        <Cabecalho/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}