import { useNavigate } from 'react-router-dom';
import './cursoJava.css';


export function Tela3(){
    const navi = useNavigate();
    return(
        <>
            <body>
    
    <h1 id="titulo"> Curso de JavaScript</h1>
    <br />
    
    <button onClick={()=>{navi('/')}} >Voltar</button>

    <script src="../../node_modules/axios/dist/axios.min.js"></script>
    <script src="./script.js"></script>
    
</body>
        </>
    );
}