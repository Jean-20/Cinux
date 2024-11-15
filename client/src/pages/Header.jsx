import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de usuario
import { faLaptop } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de laptop

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg flex items-center justify-between px-8 py-4 z-50">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/" className="hover:text-cyan-400 transition duration-200">Cinux</Link>
      </h1>

      <nav className="nav font-semibold text-lg text-white flex-grow">
        <ul className="flex items-center justify-center space-x-6">
          <li className="relative group">
            <Link to="/home" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Home</Link>
          </li>
          <li className="relative group">
            <Link to="/home/peliculas" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Películas</Link>
          </li>
          <li className="relative group">
            <Link to="/home/cines" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Sedes</Link>
          </li>
          <li className="relative group">
            <Link to="/home/dulceria" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Dulcería</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-2"> {/* Reducido el espacio entre los íconos */}
        <Link to="/login" className="text-white hover:bg-cyan-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-3 lg:px-4 py-2 lg:py-2.5 flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/contactanos" className="text-white hover:bg-cyan-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-3 lg:px-4 py-2 lg:py-2.5 flex items-center">
          <FontAwesomeIcon icon={faLaptop} />
        </Link>
      </div>
    </header>
  );
};

export default Header;