import { Star, Quote } from 'lucide-react';
import ahmad from './ahmad.jpg';
import bayu from './bayu.jpg';
import rudi from './rudi.jpg';
import dewi from './dewi.jpg';
import luna from './luna.jpg';
import sinta from './sinta.jpg';

const testimonials = [
  {
    name: 'Ahmad Rayanda.',
    role: 'Klien',
    image: ahmad,
    text: 'Sangat profesional dalam memandu live streaming event kami. Interaksi dengan penonton sangat baik dan hasilnya melebihi ekspektasi!',
    rating: 5,
  },
  {
    name: 'Dewi Kusuma.',
    role: 'Klien',
    image: dewi,
    text: 'Gacorrr goldlane terbaik pokoknya!',
    rating: 5,
  },
  {
    name: 'Rudi Purnama.',
    role: 'Klien',
    image: rudi,
    text: 'GG emang player efootball terbaik sih.',
    rating: 5,
  },
  {
    name: 'Sinta Meliani.',
    role: 'Klien',
    image: sinta,
    text: 'Pendampingan mabar eFootball sangat membantu. Skill saya meningkat signifikan setelah sparing.',
    rating: 5,
  },
  {
    name: 'Bayu Agung.',
    role: 'Klien',
    image: bayu,
    text: 'Udah jago, ga pelit ngasih ilmu, emang top streamer satu ini.',
    rating: 5,
  },
  {
    name: 'Lina Talia.',
    role: 'Klien',
    image: luna,
    text: 'Pembawaan streaming nya enak dan seru soalnya kocak orang nya wkwkw.',
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-black to-brand-darker" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">Testimoni</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Apa Kata <span className="text-brand-neon neon-text">Klien Saya</span>?
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Pengalaman dari klien yang telah menggunakan layanan saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`scroll-reveal scroll-reveal-delay-${(idx % 3) + 1} testimonial-card card-gradient p-6 rounded-xl border border-white/5`}
            >
              <Quote size={24} className="text-brand-neon/30 mb-4" />
              <p className="text-brand-gray text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
               <img
  src={t.image}
  alt={t.name}
  className="w-10 h-10 rounded-full object-cover border-2 border-brand-neon"
/>

               
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-brand-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
