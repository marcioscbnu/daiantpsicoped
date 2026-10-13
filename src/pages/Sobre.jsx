import fotoDaiany from '../assets/daiany-perfil.jpg';

export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-serif font-bold text-daiany-dark">Sobre Mim</h1>
        <p className="text-daiany-dark/80 max-w-xl mx-auto">Conheça a profissional por trás do acolhimento e da transformação.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-daiany-sage/20">
        
        {/* Coluna da Foto */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-daiany-bg bg-white flex items-center justify-center">
            <img 
              src={fotoDaiany} 
              alt="Daiany Psicopedagoga" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Coluna do Texto Biográfico */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-daiany-rose">Olá! Sou a Daiany</h2>
          
          <p className="text-daiany-dark/80 leading-relaxed">
            Sou profissional apaixonada pela educação e pelo desenvolvimento humano. Como psicopedagoga, meu compromisso é olhar para cada indivíduo em sua singularidade, compreendendo como cada mente aprende, sente e se desenvolve ao longo de todas as fases da vida.
          </p>
          
          <p className="text-daiany-dark/80 leading-relaxed">
            Acredito firmemente que o aprendizado é um processo contínuo e acessível. Meu trabalho une escuta acolhedora, rigor técnico e parceria próxima com as famílias, escolas e acompanhantes terapêuticos.
          </p>

          <div className="pt-4 border-t border-daiany-sage/20 space-y-2">
            <h3 className="font-serif text-xl text-daiany-rose font-bold">Meu Propósito</h3>
            <p className="text-daiany-dark/80 leading-relaxed">
              Desatar nós no processo de aprendizagem, transformar a relação com os estudos e resgatar a autonomia, a confiança e o prazer em aprender de crianças (a partir do 5º ano), adolescentes, adultos e idosos.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}