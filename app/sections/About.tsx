import React from 'react';
import { motion } from 'framer-motion';

export default function About({ innerRef, sectionVariant }: { innerRef?: React.RefObject<HTMLElement | null>; sectionVariant: any }) {
  return (
    <motion.section ref={innerRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionVariant} className="max-w-6xl mx-auto px-6 py-6 md:py-8">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold">О себе</h2>
        <div className="mt-4 md:flex md:gap-8">
          <div className="md:w-1/3">
            <p className="text-gray-600">Я Junior Fullstack Developer, увлекаюсь созданием удобных интерфейсов и быстрых бэков. В свободное время — фотография и музыка.</p>
          </div>
          <div className="md:flex-1 mt-6 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'React', value: 85 },
                { name: 'JavaScript', value: 80 },
                { name: 'Python', value: 70 },
                { name: 'Android', value: 65 }
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                    <div style={{ width: `${s.value}%` }} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
