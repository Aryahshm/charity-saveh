import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart, Phone, MapPin, Clock, Instagram, CreditCard } from 'lucide-react';
import { NAV_LINKS, CHARITY_DETAILS, CARD_NUMBERS } from '../constants';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Header - Glass Effect */}
      <header className="glass-nav sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2.5 rounded-2xl text-white shadow-lg shadow-primary/30">
                <Heart size={26} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-l from-secondary-dark to-primary-dark dark:from-secondary-light dark:to-primary">
                  {CHARITY_DETAILS.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">
                  {CHARITY_DETAILS.fullName}
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-bold transition-all py-2 px-4 rounded-xl ${
                        isActive 
                        ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary-dark dark:text-primary-light dark:bg-white/10' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>

              <ThemeToggle />

              <NavLink 
                to="/donate" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all transform hover:scale-105"
              >
                کمک آنلاین
              </NavLink>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                className="p-2 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden glass-card border-t-0 border-x-0 rounded-b-2xl absolute w-full z-50 px-4 py-6 shadow-xl">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-xl transition-colors font-bold text-center ${
                      isActive 
                      ? 'bg-primary/10 text-primary-dark dark:text-primary-light dark:bg-white/10' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 mt-20 -mb-1 z-10 relative">
        <svg className="relative block w-[calc(100%+1.3px)] h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgba(15, 23, 42, 0.75)" className="opacity-50"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="rgba(15, 23, 42, 0.75)" className="opacity-100"></path>
        </svg>
      </div>

      {/* Footer */}
      <footer className="glass-card-dark text-white pt-10 pb-8 mx-0 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 p-2 rounded-xl">
                  <Heart size={24} className="text-primary" fill="currentColor" />
                </div>
                <h3 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {CHARITY_DETAILS.name}
                </h3>
              </div>
              <p className="text-slate-300 leading-7 text-sm mb-6">
                {CHARITY_DETAILS.fullName}. با یاری شما، درد و رنج بیماری را برای هم‌نوعانمان کاهش می‌دهیم.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-full text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary-light border-b border-white/10 pb-2 inline-block">تماس با ما</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>{CHARITY_DETAILS.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <span dir="ltr">{CHARITY_DETAILS.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>{CHARITY_DETAILS.hours}</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary-light border-b border-white/10 pb-2 inline-block">دسترسی سریع</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><NavLink to="/donate" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>همیاری آنلاین</NavLink></li>
                <li><NavLink to="/shop" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>سفارش تاج گل</NavLink></li>
                <li><NavLink to="/blog" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>مقالات آموزشی</NavLink></li>
              </ul>
            </div>

            {/* Card Numbers */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary-light border-b border-white/10 pb-2 inline-block">شماره حساب‌ها</h3>
              <div className="space-y-3">
                {CARD_NUMBERS.map((card, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-1 text-xs text-slate-400">
                      <span>{card.bankName}</span>
                      <CreditCard size={14} />
                    </div>
                    <div className="text-center font-mono text-lg tracking-widest text-white dir-ltr">
                      {card.cardNumber}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © ۱۴۰۳ تمامی حقوق برای {CHARITY_DETAILS.name} محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;