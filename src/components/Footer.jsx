export default function Footer() {
  return (
    <footer className="bg-daiany-dark text-daiany-bg py-10 border-t border-daiany-sage/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="font-serif text-xl text-daiany-rose">Daiany Psicopedagogia</h3>
        <p className="text-sm opacity-80 italic">"Potencializando Saberes, Construindo Futuros"</p>
        <p className="text-xs opacity-65 pt-4 border-t border-white/10">
          © {new Date().getFullYear()} Daiany Psicopedagogia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}