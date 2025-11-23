import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    text: "شفافیت مالی در این خیریه برای من مهم‌ترین اصل است. وقتی می‌دانم کمکم دقیقاً صرف دارو می‌شود، با اطمینان بیشتری حمایت می‌کنم.",
    author: "آقای محمدی",
    role: "خیر نیکوکار",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    text: "پدرم در سخت‌ترین شرایط بیماری بود که با کمک هزینه دارویی شما توانستیم روند درمان را ادامه دهیم. شما فرشتگان زمینی هستید.",
    author: "مریم س.",
    role: "خانواده بیمار",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 3,
    text: "حس خوبی که از خدمت به بیماران در این مرکز می‌گیرم با هیچ چیز قابل مقایسه نیست. لبخند امید بیماران تمام خستگی را از تنم بیرون می‌کند.",
    author: "علی رضایی",
    role: "داوطلب خیریه",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-full mb-4">
          <Quote size={24} />
        </div>
        <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-4">صدای مهربانی</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-400 mt-4">داستان‌های امید و همدلی از زبان همراهان ما</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((item) => (
          <div 
            key={item.id} 
            className="glass-card p-8 rounded-3xl relative hover:scale-105 transition-transform duration-300 group"
          >
            <Quote className="absolute top-6 right-6 text-primary/10 dark:text-primary/20 transform -scale-x-100" size={60} />
            
            <div className="relative z-10">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-600 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">{item.author}</h4>
                  <span className="text-xs text-primary font-bold">{item.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;