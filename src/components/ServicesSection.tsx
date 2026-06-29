import { Mic, Sparkles, Monitor, Sword, Shield, Gamepad2 } from 'lucide-react';
import mc from './mc.jpg';
import mod from './mod.jpg';
import fm from './fm.jpg';
import ml from './ml.jpg';
import hs from './host.jpg';

const services = [
  {
    image: hs,
    title: 'Host Live Streaming',
    description: 'Menjadi host live streaming game yang energik, interaktif, dan mampu membangun suasana yang menyenangkan bagi penonton.',
  },
  {
    image: mc,
    title: 'Public Speaker / MC',
    description: 'Memandu acara dengan profesional, komunikasi yang jelas, dan kemampuan mengelola suasana di berbagai event.',
  },
  {
    image: mod,
    title: 'Moderator Event Online',
    description: 'Mengelola dan memoderasi event online (terutama game) agar berjalan lancar, interaktif, dan sesuai dengan tujuan acara.',
  },
  {
    image: ml,
    title: 'Jasa Mabar Mobile Legends',
    description: 'Memberikan pengalaman bermain rank yang baik dan pastinya memberikan segudang ilmu.',
  },
 
  {
    image: fm,
    title: 'Jasa Joki/spar eFootball',
    description: 'Menaikkan ranking divisi eFootball dan memberikan pengalaman bertanding yang baik dengan gameplay yang berkualitas dan terpercaya.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">
            Layanan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Layanan yang <span className="text-brand-neon neon-text">Saya Tawarkan</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Solusi lengkap untuk kebutuhan live streaming, public speaking, dan gaming Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} service-card card-gradient p-8 rounded-xl`}
            >
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
