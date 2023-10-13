import { Link } from "react-router-dom";

export default function Error404(){
    document.title = "Erro 404";
    
    return(
        <>
        
        <div>
            <h1>Página não encontrada - 404</h1>
            {/* <Link to="/">Voltar para a página inicial.</Link> */}
            <p>Voltar para o in~icio - <Link to="/">Voltar</Link></p>
        </div>
        
        </>
    )
}