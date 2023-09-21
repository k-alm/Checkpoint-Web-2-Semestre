import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { GrFormEdit as Editar } from "react-icons/gr";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import style from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {
    document.title = "Produtos";

    useEffect(() => {
        console.log("Este useEffect renderiza sempre! " + counter);
    });

    const [counter, setCounter] = useState(0);

    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

    useEffect(() => {
        console.log("Este useEffect renderiza apenas uma vez!");
        setListaProdutosLocal(ListaProdutos);
    }, []);

    const [counter2, setCounter2] = useState(0)

    useEffect(() => {
        console.log("Este useEffect renderiza sempre que o objeto/variável ou elemento que está sendo monitorado no array de dependências sofra alguma atualização.");
    }, [counter2]);



    return (
        <div>
            <h1>LISTA DE PRODUTOS</h1>
            <div>
                <button onClick={() => setCounter(counter + 1)}>COUNTER - {counter}</button>
            </div>
            <div>
                <button onClick={() => setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
            </div>
            <table className={style.tblEstilo}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>EDITAR / EXCLUIR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProdutosLocal.map((item, indice) => (
                            <tr key={indice} className={style.tblLine}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.desc}</td>
                                <td>{item.valor}</td>
                                <td> <Link to={`/editar/produtos/${item.id}`}><Editar /></Link> | <Link to={`/excluir/produtos/${item.id}`}><Excluir /></Link> </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>PRODUTOS LINDOS</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}