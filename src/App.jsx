import Cabecalho from "./components/Cabecalho/Cabecalho"
import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape";
import styles from "./App.module.css"

export default function App(){

  return (
    <>
      <div className={styles.container} >
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
      </div>
    </>
  );
}