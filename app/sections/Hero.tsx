import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({
  innerRef,
  onOpenPortfolio,
  onOpenContact,
}: {
  innerRef?: React.RefObject<HTMLElement | null>;
  onOpenPortfolio: () => void;
  onOpenContact?: () => void;
}) {
  return (
    <section ref={innerRef} className="max-w-6xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Привет — я Ильнур, фронтенд / мобильный разработчик</h1>
        <p className="mt-4 text-gray-600 max-w-xl">Я создаю лёгкие, быстрые и удобные интерфейсы. Люблю минимализм, аккуратный код и проекты, которые помогают людям.</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button onClick={onOpenPortfolio} className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transform transition">Посмотреть работы</button>
          <button onClick={() => { if (onOpenContact) onOpenContact(); else window.open('https://t.me/crunchworld', '_blank'); }} className="px-5 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">Связаться со мной</button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-500">
          <div className="inline-flex items-center gap-3">
            <span className="w-3 h-3 bg-green-400 rounded-full shadow-sm" />
            <span>Готов к проектам</span>
          </div>
          <div className="inline-flex items-center gap-3">
            <span className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
            <span>Ищу стажировки</span>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="w-full md:w-1/3">
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col h-full justify-between">
          <div className="w-full aspect-[1704/2560] bg-gray-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/me.jpg"
              alt="avatar"
              width={480}
              height={722}
              loading="lazy"
              className="h-full w-auto max-h-full rounded-xl object-contain shadow-md"
              style={{ aspectRatio: '1704/2560' }}
            />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <div className="text-lg font-semibold text-center">Ильнур Нурыев</div>
              <div className="text-sm text-gray-500 text-center">Frontend / Mobile Developer</div>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-xs text-gray-600">
              <div className="flex justify-between"><span className="font-medium">GitHub:</span> <span className="truncate"><a href="https://github.com/bigcrunchtheory" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/bigcrunchtheory</a></span></div>
              <div className="flex justify-between"><span className="font-medium">Email:</span> <span className="truncate">ilnur.nuryev@mail.ru</span></div>
              <div className="flex justify-between"><span className="font-medium">Telegram:</span> <span className="truncate"><a href="https://t.me/crunchworld" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">t.me/crunchworld</a></span></div>
              <div className="flex justify-between"><span className="font-medium">Город:</span> <span>Уфа</span></div>
              <div className="flex justify-between"><span className="font-medium">Языки:</span> <span>Русский, Английский, Татарский</span></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
