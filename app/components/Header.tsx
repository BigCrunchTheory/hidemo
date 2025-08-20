import React from 'react';

type NavTarget = 'hero' | 'about' | 'portfolio';

export default function Header({ onNavigate }: { onNavigate: (t: NavTarget) => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">IN</div>
          <div className="text-lg font-semibold">Ильнур Н.</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => onNavigate('hero')} className="hover:underline">Главная</button>
          <button onClick={() => onNavigate('about')} className="hover:underline">О себе</button>
          <button onClick={() => onNavigate('portfolio')} className="hover:underline">Портфолио</button>
          <a href="https://t.me/crunchworld" target="_blank" rel="noopener noreferrer" className="hover:underline">Контакты</a>
        </nav>

        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100">Меню</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border">
              <button onClick={() => onNavigate('hero')} className="block w-full text-left px-4 py-2">Главная</button>
              <button onClick={() => onNavigate('about')} className="block w-full text-left px-4 py-2">О себе</button>
              <button onClick={() => onNavigate('portfolio')} className="block w-full text-left px-4 py-2">Портфолио</button>
              <a href="https://t.me/crunchworld" target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2">Контакты</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
