import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { CHARITY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-4">تماس با {CHARITY_DETAILS.name}</h1>
          <p className="text-slate-600 dark:text-slate-400">پاسخگوی سوالات و نظرات ارزشمند شما هستیم</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info Card */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-[2.5rem] shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">اطلاعات تماس</h2>
              <div className="space-y-8">
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">آدرس دفتر مرکزی</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {CHARITY_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">شماره‌های تماس</h3>
                    <p dir="ltr" className="text-slate-600 dark:text-slate-400 text-right text-lg font-mono">{CHARITY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">ساعات کاری</h3>
                    <p className="text-slate-600 dark:text-slate-400">{CHARITY_DETAILS.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-2xl text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">اینستاگرام</h3>
                    <p dir="ltr" className="text-slate-600 dark:text-slate-400 text-right">{CHARITY_DETAILS.instagram}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="h-64 rounded-[2.5rem] overflow-hidden relative shadow-lg border-4 border-white/50 dark:border-slate-700">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-400">
                <span className="flex flex-col items-center gap-2">
                  <MapPin size={40} />
                  <span className="font-bold">نقشه گوگل (ساوه - خیابان ثلاث)</span>
                </span>
              </div>
              {/* Real iframe would go here */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 rounded-[2.5rem] shadow-xl h-fit border-t-4 border-primary">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">ارسال پیام مستقیم</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-300 mb-2">نام و نام خانوادگی</label>
                <input type="text" className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-300 mb-2">شماره تماس</label>
                <input type="text" className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-300 mb-2">موضوع</label>
                <select className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-all dark:text-white">
                  <option>سوال درباره کمک‌ها</option>
                  <option>پیشنهاد و انتقاد</option>
                  <option>داوطلب شدن</option>
                  <option>سایر موارد</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-300 mb-2">متن پیام</label>
                <textarea rows={4} className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-all dark:text-white"></textarea>
              </div>
              <button className="w-full py-4 bg-slate-900 dark:bg-slate-800 text-white font-bold rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all shadow-lg hover:shadow-primary/20">
                ارسال پیام
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;