import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/projects' element={ <Projects /> } />
                    <Route path='/cantact' element={ <Contact /> } />
                </Routes>
                <div className='row'>
                    <div className='col-12' style={{ height: '5em' }} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
