import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditarProdutos() {

    document.title = "Editar Produtos";

    //Recuperando o ID do produto selecionado com useParams()
    const { id } = useParams();

    //Utilizando o useNavigate para fazer um redirect
    const navigate = useNavigate()

    const [produto, setProduto] = useState({
        id: "",
        nome: "",
        desc: "",
        valor: ""
    });

    const handleChange = (event) => {

        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });

    }

    useEffect(() => {
        fetch(`http://localhost:5000/produtos/${id}`)
          .then((response) => response.json())
          .then((produto) => {
            // Atualizar o estado do componente com os detalhes do produto
            setProduto(produto);
          })
          .catch((error) => console.log(error));
      }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`http://localhost:5000/produtos/${id}`, {
          method:"PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome: produto.nome,
            desc: produto.desc,
            valor: produto.valor
          })
        })
        .then((response)=> response.json())
        .then((response)=> console.log(response))
        .then((produto) => {
            setProduto(produto);
            navigate("/produtos");
        })
        .catch(error=>console.log(error));
    }

    return (
        <div>
            <h1>EDITAR - PRODUTOS</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>PRODUTO SELECIONADO</legend>
                        <div>
                            <input type="hidden" name="id" value={produto.id} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="idNome">Nome do Produto:</label>
                            <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição do Produto:</label>
                            <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="idValor">Valor do Produto:</label>
                            <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange} />
                        </div>
                        <div>
                            <button>EDITAR</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}