import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import logo from '../assets/logomarca.jpg';

export default function Home() {
  return (
    <div className="space-y-16 py-10">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-daiany-sage/10 text-daiany-sage px-4 py-1.5 rounded-full text-sm font-semibold">
            <Sparkles size={16} /> Atendimento Clínico e Educacional
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-daiany-dark leading-tight">
            Potencializando Saberes, Construindo Futuros
          </h1>
          <p className="text-lg text-daiany-dark/80">
            Acompanhamento psicopedagógico humanizado e especializado para auxiliar crianças a partir do quinto ano, adolescentes, adultos e idosos a superarem dificuldades de aprendizagem, resgatando a autoestima e o prazer em aprender."
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contato" className="bg-daiany-rose text-white px-7 py-3.5 rounded-full font-medium flex items-center gap-2 hover:opacity-95 shadow-lg transition">
              Agendar Avaliação <ArrowRight size={18} />
            </Link>
            <Link to="/servicos" className="border-2 border-daiany-sage text-daiany-dark px-7 py-3 rounded-full font-medium hover:bg-daiany-sage/10 transition">
              Conhecer Serviços
            </Link>
          </div>
        </div>

        {/* Círculo com a Logomarca Real (substituindo o card genérico) */}
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-daiany-sage/30 to-daiany-rose/30 flex items-center justify-center p-3 shadow-xl border-4 border-white">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner p-4">
              <img 
                src={logo} 
                alt="Logo Daiany Psicopedagogia" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}