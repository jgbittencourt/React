import { useNavigate } from 'react-router-dom';
import './cursoReact.css'

export function Tela1(){
    const navi = useNavigate();
    return(
        <>
        <body>
        <h1 id="titulo">Curso React</h1>

            <button id='btnvoltar' onClick={()=>{navi('/')}} >Voltar</button>
            </body>
        </>
    );
}