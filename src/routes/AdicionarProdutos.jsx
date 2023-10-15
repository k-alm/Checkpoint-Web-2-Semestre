import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function AdicionarProdutos() {
    document.title = "Adicionar Produtos";

    const navigate = useNavigate();

    const [produto, setProduto] = useState({
        id: "",
        nome: "",
        desc: "",
        valor: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Gerando um novo ID (por exemplo, encontrando o maior ID atual e adicionando 1)
        const ultimoId = ListaProdutos.length > 0 ? ListaProdutos[ListaProdutos.length - 1].id : 0;
        const novoId = ultimoId + 1;


        // Criando um novo objeto de produto com o novo ID
        const novoProduto = {
            id: novoId,
            nome: produto.nome,
            desc: produto.desc,
            valor: parseInt(produto.valor), // Convertendo o valor para um número usando o parseInt
        };

        // Adicione o novo produto à lista de produtos
        ListaProdutos.push(novoProduto);

        // Redirecione de volta para a página de produtos
        navigate("/produtos");
    };

    return (
        <div>
            <h1>Adicionar Produtos</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>NOVO PRODUTO</legend>
                        <div>
                            <label htmlFor="idNome">Nome do Produto:</label>
                            <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} required />
                        </div>

                        <div>
                            <label htmlFor="idDesc">Descrição do Produto:</label>
                            <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} required />
                        </div>

                        <div>
                            <label htmlFor="idValor">Valor do Produto:</label>
                            <input type="number" name="valor" id="idValor" value={produto.valor} onChange={handleChange} required />
                        </div>

                        <div>
                            <button>Adicionar</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    );
}
