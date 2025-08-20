
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';

export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);
  // contact section removed; users are asked to message via socials

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      title: 'Водомат — интерактивная карта',
      desc: 'Мобильное приложение с картой точек, фильтрацией и маршрутизацией.',
      tech: ['Flutter', 'FastAPI', 'SQLite'],
      link: 'https://docs.google.com/presentation/d/1OXL06KdCw0TQsntAgR37kgtpt8I6N3kj/edit?usp=drive_link&ouid=117847881852116105530&rtpof=true&sd=true'
    },
    {
      title: 'Административная панель',
      desc: 'Веб-приложение для администрирования данных',
      tech: ['FastAPI', 'Python', 'YandexAPI'],
      link: 'https://github.com/BigCrunchTheory/FastAPI-Server-for-Vodomat'
    }
  ];

  function scrollToRef(ref: React.RefObject<HTMLElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleNavigate(target: 'hero' | 'about' | 'portfolio' | 'contact') {
    switch (target) {
      case 'hero':
        scrollToRef(heroRef);
        break;
      case 'about':
        scrollToRef(aboutRef);
        break;
      case 'portfolio':
        scrollToRef(portfolioRef);
        break;
      // contact now external; handled by Header link/hero buttons
      default:
        break;
    }
  }

  function validate() {
    const e: any = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Неверный формат email';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
      alert('Сообщение отправлено — спасибо!');
    }, 800);
  }

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      <Header onNavigate={handleNavigate} />
      <main className="pt-24">
  <Hero innerRef={heroRef} onOpenPortfolio={() => scrollToRef(portfolioRef)} />
        <About innerRef={aboutRef} sectionVariant={sectionVariant} />
  <Portfolio innerRef={portfolioRef} projects={projects} sectionVariant={sectionVariant} />
      </main>

      <Footer />
    </div>
  );
}
