import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Home/AuthContext'; // Asegúrate de que la ruta es correcta
import Home from './Home'; // Asegúrate de que la ruta es correcta
import Login from './pages/Login';
import Register from './pages/Register';



const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Aquí se envuelve el AuthProvider */}
        <Routes>
          {/* Rutas que NO usan Header y Footer */}
          <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
          <Route path="/register" element={<Register />} /> {/* Ruta de Register */}
          <Route path="/home/*" element={
              <Home/>
          }/>
        </Routes> 
      </AuthProvider>
    </Router>
  );
};

export default App;
