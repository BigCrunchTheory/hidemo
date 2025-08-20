import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio({ innerRef, projects, sectionVariant }: { innerRef?: React.RefObject<HTMLElement | null>; projects: any[]; sectionVariant: any }) {
  return (
    <motion.section ref={innerRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionVariant} className="max-w-6xl mx-auto px-6 py-6 md:py-8">
      <h2 className="text-2xl font-semibold mb-6">Портфолио</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ y: -6 }} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-lg font-semibold">{p.title}</div>
            <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t: string) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border text-gray-600">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-600 hover:underline">Открыть</a>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-sm">Подробнее</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
