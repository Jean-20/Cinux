import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Home/AuthContext'; // Asegúrate de que la ruta es correcta
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Contactanos from './pages/Contactanos';
import Login from './pages/Login';
import Register from './pages/Register';
import Cines from './Components/Principal/Sedes';
import Peliculas from './Components/Principal/Peliculas';
import Dulceria from './Components/Principal/Dulceria';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider> {/* Aquí se envuelve el AuthProvider */}
      <Router>
        <Routes>
          {/* Rutas que NO usan Header y Footer */}
          <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
          <Route path="/register" element={<Register />} /> {/* Ruta de Register */}

          {/* Rutas que SÍ usan Header y Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/cines" element={<Cines />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/dulceria" element={<Dulceria />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Layout con Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <Footer />
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;
