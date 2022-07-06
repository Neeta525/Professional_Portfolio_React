import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const app = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element = { <Home/> } />
            <Route path='/about-me' element = { <About/> } />
            <Route path='/my-work' element = { <Work/> } />
            <Route path='/contact' element = { <Contact/> } />
        </Routes>
        </BrowserRouter>
    )
}
export default app