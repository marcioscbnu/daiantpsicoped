import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    // Simulate sending message or forwarding to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const whatsappNumber = "5547996779542";
  const whatsappMessage = encodeURIComponent("Olá, Daiany! Vim através do site e gostaria de saber mais sobre os atendimentos psicopedagógicos.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/65 via-rose-50/40 to-teal-50/55 text-slate-800 font-sans antialiased selection:bg-teal-200">
      
      {}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-md border-b border-rose-100 py-16 px-6 sm:px-10 text-center shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-r from-teal-200/30 to-rose-200/30 blur-3xl -z-10 rounded-full"></div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100/80 text-teal-800 text-xs sm:text-sm font-medium tracking-wide uppercase shadow-sm">
            Daiany Psicopedagogia
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Contato
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-light max-w-xl mx-auto">
            Vamos conversar sobre como posso lhe ajudar?
          </p>
        </div>
      </header>

      {}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Canais de Atendimento</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Escolha a melhor forma de falar comigo. Estou à disposição para tirar dúvidas sobre avaliações, intervenções e orientações.
                </p>
              </div>

              <div className="space-y-5">
                {/* WhatsApp Card */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/80 transition-all duration-300 border border-emerald-100 group shadow-sm hover:shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">WhatsApp</h3>
                    <p className="text-emerald-700 text-sm font-medium">(47) 99677-9542</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a 
                  href="https://instagram.com/daiany_psico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-rose-50/70 hover:bg-rose-100/80 transition-all duration-300 border border-rose-100 group shadow-sm hover:shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Instagram</h3>
                    <p className="text-rose-700 text-sm font-medium">@daiany_psico</p>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p>Atendimento especializado em psicopedagogia clínica e institucional.</p>
                <p>Entre em contato para agendar uma avaliação.</p>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Envie uma Mensagem</h2>
              <p className="text-slate-600 text-sm mb-8">
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </p>

              {status.text && (
                <div className={`mb-6 p-4 rounded-2xl text-sm font-medium ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                  {status.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                      Seu Nome <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Maria Silva"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                      Telefone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: (47) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Mensagem <span className="text-rose-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre o que você precisa ou qual dúvida gostaria de tirar..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 c-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>

      {}
      <footer className="mt-20 py-8 text-center text-xs text-slate-500 border-t border-slate-100 bg-white/40">
        <p>© {new Date().getFullYear()} Daiany Psicopedagogia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}