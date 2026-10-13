import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logomarca.jpg';
import { linkWhatsApp } from '../utils/whatsapp.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-daiany-rose font-bold" : "text-daiany-dark hover:text-daiany-rose";

  return (
    <header className="sticky top-0 z-50 bg-daiany-bg/90 backdrop-blur-md shadow-sm border-b border-daiany-sage/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo no topo esquerdo (substituindo o texto) */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Daiany Psicopedagogia" className="h-12 w-auto object-contain rounded-full shadow-sm" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={isActive('/')}>Início</Link>
          <Link to="/sobre" className={isActive('/sobre')}>Sobre Mim</Link>
          <Link to="/servicos" className={isActive('/servicos')}>Serviços</Link>
          <Link to="/contato" className={isActive('/contato')}>Contato</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <a 
            href={linkWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-daiany-sage text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-daiany-dark transition shadow-md"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        {/* Botão Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-daiany-dark">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-daiany-bg border-b border-daiany-sage/20 px-4 pt-2 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Início</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Sobre Mim</Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Serviços</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="block py-2 font-medium">Contato</Link>
          <a 
            href={linkWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-daiany-sage text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}