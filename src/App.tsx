import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import { ShoppingCardProvider } from './context/ShoppingCardContext';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <ShoppingCardProvider>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </ShoppingCardProvider>
    );
}

export default App;
