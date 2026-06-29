import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Bagaimana cara memesan jasa?',
    answer: 'Anda bisa memesan jasa melalui tombol WhatsApp atau Instagram di bagian kontak. Sampaikan kebutuhan Anda, dan saya akan merespons secepatnya untuk membahas detail dan jadwal.',
  },
  {
    question: 'Berapa harga layanan yang ditawarkan?',
    answer: 'Harga bervariasi tergantung jenis layanan dan jumlah game. Hubungi saya untuk mendapatkan penawaran harga yang sesuai dengan kebutuhan Anda. Saya menawarkan harga yang kompetitif dan fleksibel.',
  },
 
  {
    question: 'Pembayaran dilakukan melalui apa?',
    answer: 'Saya menerima pembayaran melalui transfer bank, e-wallet (DANA, OVO, GoPay, ShopeePay), dan metode pembayaran digital lainnya.',
  },
 
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-black to-brand-darker" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pertanyaan yang <span className="text-brand-neon neon-text">Sering Diajukan</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Jawaban untuk pertanyaan umum seputar layanan yang saya tawarkan.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`scroll-reveal scroll-reveal-delay-${(idx % 3) + 1} card-gradient rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-neon/10`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-neon flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">{faq.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-brand-neon flex-shrink-0 ml-3 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`faq-answer ${openIndex === idx ? 'open' : ''}`}>
                <div className="px-5 pb-5 pl-12">
                  <p className="text-brand-gray text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
