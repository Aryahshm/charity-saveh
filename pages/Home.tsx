import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Pill, ShoppingBag, Users, Activity } from 'lucide-react';
import { ARTICLES, BOARD_MEMBERS } from '../constants';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-10">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Background is set globally via CSS, we add specific styling here for the content */}
        
        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/40 dark:bg-slate-800/50 backdrop-blur border border-white/50 dark:border-slate-700 text-primary-dark dark:text-primary-light text-sm font-bold mb-6 shadow-sm animate-fade-in-up">
              همراه شما در سخت‌ترین لحظات
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 dark:text-white drop-shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              امید، قوی‌تر از <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">سرطان</span> است
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-8 max-w-xl mx-auto lg:mx-0 bg-white/30 dark:bg-slate-900/30 p-4 rounded-2xl backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              خیریه امام حسین (ع) شهرستان ساوه، با حمایت‌های شما، نور امید را در دل بیماران و خانواده‌های آنان روشن نگه می‌دارد. بیایید با هم معجزه کنیم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Link 
                to="/donate" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3 group"
              >
                <Heart fill="currentColor" className="group-hover:scale-110 transition-transform" />
                کمک آنلاین
              </Link>
              <Link 
                to="/shop" 
                className="glass-card hover:bg-white/80 dark:hover:bg-slate-800 text-slate-800 dark:text-white text-lg font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3"
              >
                سفارش تاج گل
              </Link>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/30 dark:border-slate-700/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-9dcb6f8d0819?auto=format&fit=crop&q=80&w=1000" 
                alt="Hope and Care" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-8 text-white">
                <p className="text-2xl font-bold mb-1">حمایت از ۲۵۰+</p>
                <p className="text-sm opacity-80">بیمار تحت پوشش در ساوه</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">خدمات اصلی ما</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="glass-card p-8 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <Pill size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">کمک هزینه دارویی</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              تهیه داروهای کمیاب و گران‌قیمت شیمی‌درمانی از طریق داروخانه‌های طرف قرارداد برای بیماران تحت پوشش.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="glass-card p-8 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="w-20 h-20 bg-pink-100 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <ShoppingBag size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">بسته‌های معیشتی</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              توزیع ماهانه سبد کالا و ارزاق ضروری بین خانواده‌های بیماران کم‌بضاعت جهت حفظ کرامت انسانی.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="glass-card p-8 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <Activity size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">تجهیزات پزشکی</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              امانت‌دهی رایگان تجهیزات پزشکی نظیر کپسول اکسیژن، تخت بیمارستانی و ویلچر برای استفاده در منزل.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Board Members Section */}
      <section className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-xl mb-4">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-4">اعضای هیئت مدیره</h2>
            <p className="text-slate-600 dark:text-slate-400">خادمان شما در خیریه امام حسین (ع)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BOARD_MEMBERS.map((member) => (
              <div key={member.id} className="glass-card rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-md mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{member.name}</h3>
                <span className="text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-2">دانستنی‌های سلامت</h2>
            <p className="text-slate-500 dark:text-slate-400">مطالب آموزشی درباره سرطان و پیشگیری</p>
          </div>
          <Link to="/blog" className="text-primary font-bold hover:text-primary-dark dark:hover:text-primary-light flex items-center gap-1">
            مشاهده همه <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.slice(0, 3).map(article => (
            <article key={article.id} className="glass-card rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                <span className="absolute bottom-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white border border-white/30">
                  {article.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 line-clamp-1 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link to="/blog" className="text-sm font-bold text-secondary hover:text-secondary-dark dark:text-secondary-light inline-flex items-center gap-1">
                  ادامه مطلب <ArrowLeft size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;