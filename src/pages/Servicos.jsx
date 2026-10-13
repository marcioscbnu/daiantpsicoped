import { MessageCircle, Search, Brain, Users, HeartHandshake } from 'lucide-react';

export default function Servicos() {
  const whatsappUrl = "https://wa.me/5547999570061?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Daiany%20Psicopedagogia.";

  const servicosLista = [
    {
      id: 1,
      titulo: "Avaliação Psicopedagógica",
      descricao: "Identificação precisa de dificuldades, distúrbios e bloqueios de aprendizagem por meio de instrumentos clínicos validados e escuta atenta.",
      icone: <Search className="w-10 h-10 text-emerald-700" />,
      bgCor: "bg-emerald-100",
      bordaCor: "border-emerald-200",
      acaoText: "Saiba Mais",
    },
    {
      id: 2,
      titulo: "Intervenção Psicopedagógica",
      descricao: "Atendimento personalizado e lúdico voltado para o desenvolvimento das funções cognitivas, autoestima acadêmica e estratégias de estudo.",
      icone: <Brain className="w-10 h-10 text-sky-700" />,
      bgCor: "bg-sky-100",
      bordaCor: "border-sky-200",
      acaoText: "Saiba Mais",
    },
    {
      id: 3,
      titulo: "Orientação Escolar",
      descricao: "Alinhamento estratégico e contínuo entre a família, o estudante e a instituição de ensino para garantir o suporte adequado em rede.",
      icone: <Users className="w-10 h-10 text-amber-700" />,
      bgCor: "bg-amber-100",
      bordaCor: "border-amber-200",
      acaoText: "Agende uma Consulta",
    },
    {
      id: 4,
      titulo: "Atendimento para Todas as Idades",
      descricao: "Programas especializados e acolhimento direcionado para crianças (a partir do 5º ano), adolescentes, adultos e idosos.",
      icone: <HeartHandshake className="w-10 h-10 text-rose-700" />,
      bgCor: "bg-rose-100",
      bordaCor: "border-rose-200",
      acaoText: "Conheça Nossos Programas",
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-sans">
      {/* Cabeçalho / Hero */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E3A8A]">
          Nossos Serviços
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Abordagem humanizada, personalizada e focada no desenvolvimento cognitivo, emocional e na superação de barreiras de aprendizagem para todas as idades (a partir do 5º ano, adolescentes, adultos e idosos).
        </p>
      </section>

      {/* Grid de Serviços */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicosLista.map((servico) => (
            <div 
              key={servico.id} 
              className={`bg-white rounded-2xl p-6 shadow-lg border ${servico.bordaCor} flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2`}
            >
              <div>
                {/* Ilustração / Ícone em Círculo com tom pastel */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${servico.bgCor} flex items-center justify-center shadow-inner`}>
                  {servico.icone}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#1E3A8A]">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">
                  {servico.descricao}
                </p>
              </div>

              <div className="text-center">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 px-4 bg-[#1E3A8A] hover:bg-[#152e6d] text-white font-medium rounded-xl text-sm transition-colors shadow-md"
                >
                  {servico.acaoText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé / CTA Final */}
      <section className="bg-[#F4EFEA] py-16 px-6 text-center border-t border-[#EAE2D9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1E3A8A]">
            Pronto para começar sua jornada de aprendizado? Entre em contato.
          </h2>
          <p className="text-gray-600 mb-8">
            Dê o primeiro passo para transformar desafios em conquistas. Estamos prontos para caminhar ao seu lado.
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-4 px-8 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-2xl shadow-lg transition-transform hover:scale-105 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Fale com a Daiany
          </a>
        </div>
      </section>
    </div>
  );
}