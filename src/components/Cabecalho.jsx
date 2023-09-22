import { Link } from "react-router-dom";
import { AiFillHome as H } from "react-icons/ai";

export default function Cabecalho() {
    return (
        <>
            <header>
                <h1>Checkpoint 2º Semestre</h1>
                <ul>
                    <li>
                        <Link to="/">HOME - <H /></Link>
                    </li>
                    <li>
                        <Link to="/produtos">PRODUTOS</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}