import { User, MessageCircle, Camera, Users, Trophy, Headphones } from 'lucide-react';
// Ganti URL ini dengan foto profil Anda sendiri jika diinginkan
import profileImg from './WhatsApp_Image_2026-06-29_at_16.32.49.jpeg';
import interaksi from  './interaksi.jpg';
import kamera from  './kamera.jpg';
import gaming from  './gaming.jpg';
import live from  './live.jpg';
import pbrand from  './pbrand.jpg';


const highlights = [
  {
    image: interaksi,
    title: 'Komunikasi Efektif',
    desc: 'Mampu berkomunikasi dengan baik dan membangun koneksi yang kuat dengan audiens.',
  },
  {
    image: kamera,
    title: 'Percaya Diri di Depan Kamera',
    desc: 'Terbiasa tampil di depan kamera dengan percaya diri dan penuh energi.',
  },
  {
    image: interaksi,
    title: 'Interaksi dengan Audiens',
    desc: 'Ahli membangun interaksi yang menarik dan membuat audiens merasa dihargai.',
  },
  {
    image: gaming,
    title: 'Pengalaman Gaming',
    desc: 'Berpengalaman bermain Mobile Legends dan eFootball dengan skill mumpuni.',
  },
  {
    image: live,
    title: 'Host Live Streaming',
    desc: 'Terbiasa menjadi host dan live streaming game.',
  },
  {
    image: pbrand,
    title: 'Personal Branding',
    desc: 'Membangun personal brand yang profesional dan terpercaya di dunia digital.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">
            Tentang Saya
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
             <span className="text-brand-neon neon-text">M. Wiraddapa</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Seorang profesional yang berdedikasi tinggi dalam bidang komunikasi, live streaming, dan gaming.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 scroll-reveal">
          <div className="w-full max-w-sm lg:w-2/5 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-neon/40 to-brand-neon/10 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-brand-neon/20 bg-brand-surface">
                <img
                  src={profileImg}
                  alt="WiraXPlay"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
                    <span className="text-white font-semibold text-sm">M. Wiraddapa</span>
                  </div>
                  <p className="text-brand-gray text-xs mt-1">Public Speaker, Live Stream Host & Mobile Gamer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p className="text-base md:text-lg">
                Saya adalah seorang profesional yang passionate dalam bidang komunikasi, live streaming, dan gaming.
                Dengan pengalaman yang saya punya, saya mampu membawa
                energi positif dan interaksi yang menarik kepada audiens, serta memiliki skill gaming yang baik.
              </p>
              <p className="text-base md:text-lg">
                Dalam dunia gaming, saya memiliki pengalaman mendalam bermain Mobile Legends dan eFootball.
                Saya tidak hanya bermain, tetapi juga memahami strategi, meta, dan dinamika kompetitif
                yang diperlukan untuk membantu klien mencapai tujuan mereka.
              </p>
              <p className="text-base md:text-lg">
                Setiap proyek yang saya kerjakan dilakukan dengan komitmen tinggi, ketepatan waktu,
                dan orientasi pada kepuasan klien. Mari berkolaborasi dan wujudkan visi Anda bersama!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} card-gradient p-6 rounded-xl border border-white/5 hover:border-brand-neon/20 transition-all duration-300 group`}
            >
             <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 border border-brand-neon/20">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
