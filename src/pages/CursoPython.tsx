import { useNavigate } from 'react-router-dom';
import './cursoPython.css';

export function Tela2(){
    const navi = useNavigate();
    return(
        <>
        <body>

<h1 id="titulo">Curso Python</h1>

<button onClick={()=>{navi('/')}} >Voltar</button>

<script src="../../node_modules/axios/dist/axios.min.js"></script>
<script src="./script.js"></script>

            </body>
        </>
    );
}