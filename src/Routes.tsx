import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Tela1 } from './pages/CursoReact';
import { Tela2 } from './pages/CursoPython';
import { Tela3 } from './pages/CursoJavaScript';



export function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />}/>
                <Route path='/tela1' element={<Tela1/>} />
                <Route path='/tela2' element={<Tela2 />} />
                <Route path='/tela3' element={<Tela3 />} />
            </Routes>
        </BrowserRouter>
    );
}