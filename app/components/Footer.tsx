import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t bg-white/70">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Ильнур Нурыев. Все права защищены.</div>
        <div className="mt-3 md:mt-0">Сделано с ❤️ и чистым кодом</div>
      </div>
    </footer>
  );
}
