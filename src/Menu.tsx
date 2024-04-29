import { useNavigate } from 'react-router-dom';
import './App.css'
import '../src/pages/styles/global.css'

export function Menu() {
const navi = useNavigate();
  return (
    <>
      <body>
    <h1 id="titulo1">Cursos de Programação</h1>   

      <button className='botao1' onClick={()=>{navi('/tela1')}} >Curso React</button>
      <button className='botao2' onClick={()=>{navi('/tela2');}}>Curso Python</button>
      <button className='botao3' onClick={()=>{navi('/tela3');}} >Curso Javascript</button>

      
    <script src="./node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="./node_modules/axios/dist/axios.min.js"></script>
      </body>
    </>
  )
}


