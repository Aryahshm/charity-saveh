import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { Calendar, User, MapPin, PenTool, Phone } from 'lucide-react';

interface WreathFormProps {
  product: Product;
  onCancel: () => void;
  onSubmit: (data: any) => void;
}

const WreathForm: React.FC<WreathFormProps> = ({ product, onCancel, onSubmit }) => {
  const isWreath = product.category === ProductCategory.WREATH;
  
  // Common state
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  
  // Wreath specific state
  const [deceasedName, setDeceasedName] = useState('');
  const [ceremonyDate, setCeremonyDate] = useState('');
  const [plaqueMessage, setPlaqueMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      product: product.title,
      mobile,
      address,
      ...(isWreath && {
        deceasedName,
        ceremonyDate,
        plaqueMessage
      })
    };
    onSubmit(formData);
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-3xl shadow-2xl w-full max-h-[90vh] overflow-y-auto relative bg-white dark:bg-slate-900 border dark:border-slate-700">
      <div className="mb-6 text-center border-b border-slate-200/50 dark:border-slate-700/50 pb-4">
        <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
          سفارش {product.title}
        </h3>
        {isWreath && <p className="text-sm text-primary font-bold bg-primary/10 inline-block px-3 py-1 rounded-full">تمامی عواید صرف داروهای بیماران می‌شود</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Wreath Specific Fields */}
        {isWreath && (
          <>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <User size={16} className="text-secondary"/> نام مرحوم
              </label>
              <input
                type="text"
                required
                value={deceasedName}
                onChange={(e) => setDeceasedName(e.target.value)}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 focus:border-transparent transition-all dark:text-white"
                placeholder="مثال: مرحوم علی علوی"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <Calendar size={16} className="text-secondary"/> تاریخ و ساعت مراسم
              </label>
              <input
                type="text"
                required
                value={ceremonyDate}
                onChange={(e) => setCeremonyDate(e.target.value)}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 focus:border-transparent transition-all dark:text-white"
                placeholder="مثال: جمعه ۱۴ اردیبهشت ساعت ۱۰ صبح"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <PenTool size={16} className="text-secondary"/> متن روی پلاکارد
              </label>
              <textarea
                required
                value={plaqueMessage}
                onChange={(e) => setPlaqueMessage(e.target.value)}
                rows={2}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 focus:border-transparent transition-all dark:text-white"
                placeholder="مثال: عرض تسلیت از طرف خانواده ..."
              />
            </div>
          </>
        )}

        {/* Common Fields */}
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <Phone size={16} className="text-secondary"/> شماره تماس
          </label>
          <input
            type="tel"
            required
            dir="ltr"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 focus:border-transparent transition-all text-right dark:text-white"
            placeholder="0912..."
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <MapPin size={16} className="text-secondary"/> {isWreath ? 'آدرس مسجد / تالار' : 'آدرس دقیق جهت ارسال صندوق'}
          </label>
          <textarea
            required
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 focus:border-transparent transition-all dark:text-white"
            placeholder="آدرس دقیق..."
          />
        </div>

        <div className="pt-6 flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-colors"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="flex-[2] py-3 px-4 bg-gradient-to-l from-primary to-secondary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            {isWreath ? 'ثبت و پرداخت' : 'ثبت درخواست'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WreathForm;