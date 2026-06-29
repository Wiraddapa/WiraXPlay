import { useState } from 'react';
import { Image, X, Video, Award, Calendar, Play } from 'lucide-react';
import sertifikatspeak from './publicarab.jpeg';
import sertifikatspeak2 from './publicmanahij.jpeg';
import sertifikatef from './efootball1.jpeg';
import sertifikatef2 from './efootballps.jpeg';
import sertifikatml from './mole.jpeg';
const galleryItems = [
  {
    id: 1,
    title: 'Sertifikat eFootball',
    image: sertifikatef,
    desc: 'Juara 1 turnamen eFootball Mobile se-kota  Banten',
  },
  {
    id: 2,
    title: 'Sertifikat eFootball',
    image: sertifikatef2,
    desc: 'Juara 1 turnamen eFootball PlayStation se-kecamatan Caringin',
  },
  {
    id: 3,
    title: 'Sertifikat Public Speaking',
    image: sertifikatspeak,
    desc: 'Sertifikat juara audisi Public Speaking atau Pidato Arabic Language antar sekolah se-kota Banten',
  },
  
  {
    id: 4,
    title: 'Turnamen Mobile Legend',
    image: sertifikatml,
    desc: 'Juara 1 turnamen Mobile Legend dalam lingkup sekolah',
  },

  {
    id: 5,
    title: 'Sertifikat Public Speaking',
    image: sertifikatspeak2,
    desc: 'Sertifikat juara audisi Public Speaking atau Pidato English Language antar sekolah se-kota Banten',
  },
  
  
];

const categories = [
  { id: 'all', label: 'Semua', icon: Image },
  
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">Galeri</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Achievement <span className="text-brand-neon neon-text">Saya</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Kumpulan Achievement dari sertifikat Turnamen, dan kegiatan lainnya.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 scroll-reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-neon text-brand-black'
                  : 'bg-brand-surface/50 text-brand-gray hover:text-white hover:border-brand-neon/30 border border-white/5'
              }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className={`scroll-reveal scroll-reveal-delay-${(idx % 4) + 1} gallery-item cursor-pointer rounded-xl overflow-hidden border border-white/5 bg-brand-surface/50`}
              onClick={() => setSelectedItem(item)}
            >
             
              <div className="aspect-[4/3] relative overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-brand-neon font-medium uppercase tracking-wider">
                    {categories.find((c) => c.id === item.category)?.label}
                  </span>
                  <h4 className="text-white font-semibold text-sm mt-1">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-brand-surface rounded-2xl border border-brand-neon/20 max-w-lg w-full p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-brand-gray hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-brand-neon/10 to-brand-surface rounded-xl flex items-center justify-center mb-4 border border-brand-neon/10">
             <img
  src={selectedItem.image}
  alt={selectedItem.title}
  className="w-full h-full object-cover rounded-xl"
/>
            </div>
            <p className="text-brand-gray text-sm">{selectedItem.desc}</p>
            <span className="inline-block mt-3 text-xs text-brand-neon font-medium uppercase tracking-wider">
              {categories.find((c) => c.id === selectedItem.category)?.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
