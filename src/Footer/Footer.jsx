/* eslint-disable no-irregular-whitespace */
const Footer = () => {
  return (
    <footer className="bg-black text-[#F7FFF7] px-6 md:px-12 py-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-[#faa307] pb-8">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🏋</span>
           <a href="#"> <h2 className="text-2xl font-bold">FIITLIFE</h2> </a>
          </div>
          <p className="text-[#faa307]">Transformez votre santé</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="font-bold mb-3">Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 rounded-lg px-4 py-2 text-[#2D3047]"
            />
            <button className="bg-[#faa307] text-[#2D3047] px-6 py-2 rounded-lg hover:bg-[#f8a847] transition">
              OK
            </button>
          </div>
        </div>
      </div>

      {/* Liens principaux */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
        <div>
          <h4 className="text-[#faa307] font-bold mb-4">PROGRAMMES</h4>
          <ul className="space-y-2">
            {[
              { name: 'Programmes', path: '/programmes' },
              { name: 'Workout', path: '/workout' },
              { name: 'Nutrition', path: '/Nutrition' }
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.path} 
                  className="hover:text-[#faa307] transition cursor-pointer block"
                >
                  ▸ {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#faa307] font-bold mb-4">ENTREPRISE</h4>
          <ul className="space-y-2">
            {[
              { name: 'À propos', path: '/about' },
              { name: 'Carrières', path: '/about' },
              { name: 'Shop', path: '/shop' }
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.path} 
                  className="hover:text-[#faa307] transition cursor-pointer block"
                >
                  ▸ {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#faa307] font-bold mb-4">RESSOURCES</h4>
          <ul className="space-y-2">
            {[
              { name: 'FAQ', path: '/contact' },
              { name: 'Blog', path: '/contact' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.path} 
                  className="hover:text-[#faa307] transition cursor-pointer block"
                >
                  ▸ {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section basse */}
      <div className="text-center pt-6 ">
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4  border-t border-[#faa307]">
          <div className="mt-4">
            <a href="/mentions-legales" className="hover:text-[#faa307] transition">Mentions légales</a>
            <span>•</span>
            <a href="/cgu" className="hover:text-[#faa307] transition">CGU</a>
            <span>•</span>
            <a href="/cookies" className="hover:text-[#faa307] transition">Politique cookies</a>
          </div>
        </div>

        <p className="text-sm text-[#faa307]">
          © 2025 @ZAMI & @AZOUMAG - FiitLife
        </p>
      </div>
    </footer>
  );
};

export default Footer;
