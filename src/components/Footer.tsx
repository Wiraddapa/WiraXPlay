import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="absolute inset-0 bg-brand-darker" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-lg font-bold text-white">
            <span className="text-brand-neon">WiraX</span>Play
          </div>
          <p className="text-brand-muted text-sm max-w-lg">
            Let's Grow Together Through Great Communication & Gaming.
          </p>
          <div className="flex items-center gap-1 text-brand-muted text-xs">
            <span>&copy; {year} WiraXPlay. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center gap-1">
              Dibuat dengan <Heart size={12} className="text-brand-neon" /> oleh M. Wiraddapa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
