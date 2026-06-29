import { MessageCircle, Instagram, Video, Facebook, MessageSquare, Mail, ExternalLink } from 'lucide-react';
import wa from './wa.jpg';
import ig from './ig.webp';
import tt from './tt.jpg';
import dc from './dc.jpg';
import email from './email.jpg';


const contacts = [
  {
    image: wa,
    label: 'WhatsApp',
    value: 'Chat WhatsApp',
    href: 'https://wa.me/6285878003555',
    color: 'hover:bg-green-500/10 hover:border-green-500/40',
  },
  {
    image: ig,
    label: 'Instagram',
    value: '@wiraddapa',
    href: 'https://instagram.com/wiraddapa',
    color: 'hover:bg-pink-500/10 hover:border-pink-500/40',
  },
  {
    image: tt,
    label: 'TikTok',
    value: '@wirapokpokcoy.',
    href: 'https://tiktok.com/@bangwir31',
    color: 'hover:bg-cyan-500/10 hover:border-cyan-500/40',
  },
 
  {
    image: dc,
    label: 'Discord',
    value: 'Wira Sok Spongken',
    href: 'https://discord.gg/CmMwA7e9',
    color: 'hover:bg-indigo-500/10 hover:border-indigo-500/40',
  },
  {
    image: email,
    label: 'Email',
    value: 'wirwiraa212@gmail.com',
    href: 'wirwiraa212@gmail.com',
    color: 'hover:bg-red-500/10 hover:border-red-500/40',
  },
 
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase mb-3 block">Kontak</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hubungi <span className="text-brand-neon neon-text">Saya</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            Jangan ragu untuk menghubungi saya melalui salah satu platform berikut. Fast response dan siap membantu!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact, idx) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-reveal scroll-reveal-delay-${(idx % 3) + 1} contact-btn flex items-center gap-4 p-5 rounded-xl bg-brand-surface/50 ${contact.color}`}
            >
             <div className="w-12 h-12 rounded-lg bg-brand-neon/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
  {contact.image ? (
    <img
      src={contact.image}
      alt={contact.label}
      className="w-8 h-8 object-contain"
    />
  ) : (
    <contact.icon size={22} className="text-brand-neon" />
  )}
</div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">{contact.label}</p>
                <p className="text-brand-muted text-xs truncate">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
