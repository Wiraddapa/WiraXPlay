import { Sword, Trophy, Target, Shield, ShoppingCart } from 'lucide-react';
import logoef from './logoef.jpg';
import logoml from './logoml.jpg';

const games = [
  {
    name: 'Mobile Legends',
    image: logoml,
    color: 'from-yellow-500/20 to-orange-500/20',
    description: 'Jasa mabar Mobile Legends. Menaikkan rank Anda dengan cepat dan aman menggunakan gameplay yang berkualitas dan gacor pastinya.',
    features: ['5k/game'],
  },
  {
    name: 'eFootball',
    image: logoef,
    color: 'from-blue-500/20 to-cyan-500/20',
    description: 'Jasa spar/mabar eFootball untuk meningkatkan skill dan gameplay Anda. Bermain dengan strategi dan teknik yang optimal.',
    features: ['5k/game'],
  },
];

export default function GamesSection() {
  return (
    <section id="games" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-brand-darker" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">Game Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Layanan <span className="text-brand-neon neon-text">Game</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Pilih layanan mabar untuk game favorit Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game, idx) => (
            <div
              key={game.name}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} card-gradient rounded-2xl border border-white/5 overflow-hidden hover:border-brand-neon/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]`}
            >
              <div className={`bg-gradient-to-br ${game.color} p-8 flex items-center justify-center`}>
<div className="w-24 h-24 rounded-3xl overflow-hidden border border-brand-neon/20">
    <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover" />
</div>
                </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{game.name}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">{game.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {game.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-brand-gray">
                      <Target size={12} className="text-brand-neon" />
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary text-brand-black font-semibold px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2 w-full"
                >
                  <ShoppingCart size={18} />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
