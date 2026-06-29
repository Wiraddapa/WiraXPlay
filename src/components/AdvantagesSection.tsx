import { MessageCircle, Heart, Clock, Zap, Video, Smile } from 'lucide-react';

const advantages = [
  { icon: MessageCircle, label: 'Komunikatif' },
  { icon: Heart, label: 'Ramah & Profesional' },
  { icon: Clock, label: 'Tepat Waktu' },
  { icon: Zap, label: 'Fast Response' },
  { icon: Video, label: 'Berpengalaman Live Streaming Game' },
  { icon: Smile, label: 'Berorientasi pada Kepuasan Klien' },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-darker to-brand-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">Keunggulan</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mengapa Memilih <span className="text-brand-neon neon-text">Saya</span>?
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Komitmen untuk memberikan pelayanan terbaik dengan kualitas profesional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {advantages.map((item, idx) => (
            <div
              key={item.label}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} advantage-item flex items-center gap-4 p-5 rounded-xl bg-brand-surface/50 border border-white/5 hover:border-brand-neon/20 transition-all duration-300`}
            >
              <div className="advantage-dot w-3 h-3 rounded-full bg-brand-muted transition-all duration-300 flex-shrink-0" />
              <item.icon size={20} className="text-brand-neon flex-shrink-0" />
              <span className="text-white font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
