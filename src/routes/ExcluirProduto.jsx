import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ExcluirProduto() {
    document.title = "Excluir Produto";

    const { id } = useParams();
    const navigate = useNavigate()

    const [produto, setProduto] = useState({
        id: "",
        nome: "",
        desc: "",
        valor: ""
    });

    useEffect(() => {
        fetch(`http://localhost:5000/produtos/${id}`)
            .then((response) => response.json())
            .then((produto) => {
                // Atualizar o estado do componente com os detalhes do produto
                setProduto(produto);
            })
            .catch((error) => console.log(error));
    }, [id]);

    const handleExclude = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/produtos/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((produto) => {
                // Atualizar o estado do componente com a nova lista de produtos
                setProduto(produto);
                navigate("/produtos");
            })
            .catch(error => console.log(error));
    };

    return (

        <div className={classes.container}>
            <h1>Excluir Produto</h1>
            <div>
                <p>Nome : {produto.nome}</p>
                <p>Desc : {produto.desc}</p>
                <p>valor : {produto.valor}</p>
                <div>
                    <button onClick={handleExclude}>EXCLUIR</button>
                    <button onClick={() => navigate("/produtos")}>CANCELAR</button>
                </div>
            </div>
        </div>
    );
}