import React, { useState } from 'react';
import { DONATION_TIERS, CARD_NUMBERS, CHARITY_DETAILS } from '../constants';
import { Heart, CreditCard, ShieldCheck, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import Spinner from '../components/Spinner';

interface Errors {
  mobile?: string;
  amount?: string;
}

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(100000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // New UI states
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
    if (errors.amount) setErrors({ ...errors, amount: undefined });
  };

  const handlePredefinedClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
    if (errors.amount) setErrors({ ...errors, amount: undefined });
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    
    // Validate Amount
    const currentAmount = amount === 'custom' ? parseInt(customAmount) : amount;
    if (!currentAmount || isNaN(Number(currentAmount)) || Number(currentAmount) < 1000) {
      newErrors.amount = 'لطفاً مبلغ معتبری وارد کنید (حداقل ۱۰۰۰ تومان)';
    }

    // Validate Mobile
    const mobileRegex = /^09\d{9}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
      newErrors.mobile = 'لطفاً شماره موبایل معتبر (۱۱ رقم با ۰۹) وارد کنید';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      // Reset form (optional)
      setFullName('');
      setMobile('');
      
      // Hide toast after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center relative">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
          <div className="glass-toast p-4 rounded-2xl flex items-center gap-4 text-green-800 dark:text-green-100 dark:bg-green-900/80">
            <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full text-green-600 dark:text-green-200">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="font-bold">عملیات موفق</h4>
              <p className="text-sm mt-1">اطلاعات با موفقیت ثبت شد. از مهر شما سپاسگزاریم.</p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-4">همیاری با فرشتگان زمینی</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            کمک‌های شما نوری است در دل تاریکی بیماری. می‌توانید به صورت آنلاین یا کارت به کارت کمک‌های خود را اهدا کنید.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Online Donation Form */}
          <div className="glass-card p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                <CreditCard size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">پرداخت آنلاین</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">مبلغ همیاری (تومان)</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {DONATION_TIERS.map((tier) => (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => handlePredefinedClick(tier.amount)}
                      className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${
                        amount === tier.amount
                          ? 'border-primary bg-primary/10 text-primary-dark dark:text-primary-light'
                          : 'border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary/50 hover:bg-white/50 dark:hover:bg-white/5'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="مبلغ دلخواه ..."
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full p-4 rounded-xl border-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur focus:bg-white dark:focus:bg-slate-900 transition-all outline-none text-slate-800 dark:text-white ${
                        errors.amount 
                          ? 'border-red-400 ring-1 ring-red-400' 
                          : amount === 'custom' 
                            ? 'border-primary ring-1 ring-primary' 
                            : 'border-slate-200/60 dark:border-slate-700 focus:border-primary/50'
                    }`}
                  />
                  <span className="absolute left-4 top-4 text-slate-400 text-sm font-bold pointer-events-none">تومان</span>
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.amount}
                  </p>
                )}
              </div>

              {/* User Info */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">نام کامل (اختیاری)</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200/60 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-all text-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">شماره همراه</label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      if (errors.mobile) setErrors({...errors, mobile: undefined});
                    }}
                    placeholder="0912..."
                    className={`w-full p-3 rounded-xl border bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-right text-slate-800 dark:text-white ${
                      errors.mobile ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200/60 dark:border-slate-700 focus:border-primary'
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform ${
                  isLoading 
                    ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500 dark:text-slate-400' 
                    : 'bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95'
                }`}
              >
                {isLoading ? (
                  <>
                    <Spinner size="sm" /> در حال پردازش...
                  </>
                ) : (
                  <>
                    <Heart size={20} fill="currentColor" className="text-pink-200" />
                    پرداخت امن زرین‌پال
                  </>
                )}
              </button>
              
              <div className="mt-4 flex justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck size={14}/> امنیت پرداخت</span>
                <span className="flex items-center gap-1"><ShieldCheck size={14}/> شفافیت مالی</span>
              </div>
            </form>
          </div>

          {/* Offline / Card to Card */}
          <div className="flex flex-col gap-6">
             <div className="glass-card-dark text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-40"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-40"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CreditCard className="text-primary-light" />
                    واریز کارت به کارت
                  </h2>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                    در صورت تمایل می‌توانید کمک‌های نقدی خود را مستقیماً به شماره حساب‌های خیریه واریز نمایید.
                  </p>

                  <div className="space-y-4">
                    {CARD_NUMBERS.map((card, index) => (
                      <div key={index} className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors group">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-sm text-slate-200">{card.bankName}</span>
                          <span className="text-xs text-slate-400">{card.ownerName}</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/20 rounded-xl p-3">
                          <span className="font-mono text-lg md:text-xl tracking-widest dir-ltr select-all">{card.cardNumber}</span>
                          <button 
                            onClick={() => copyToClipboard(card.cardNumber.replace(/-/g, ''), index)}
                            className="text-primary-light hover:text-white transition-colors p-1"
                            title="کپی شماره کارت"
                          >
                             {copiedIndex === index ? <CheckCircle2 size={20} className="text-green-400"/> : <Copy size={20} />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-primary/20 rounded-xl border border-primary/30 text-sm text-primary-light">
                    <p className="font-bold mb-1">توجه:</p>
                    <p className="opacity-90 text-xs leading-relaxed">
                      لطفاً پس از واریز کارت به کارت، تصویر فیش واریزی را به دایرکت اینستاگرام {CHARITY_DETAILS.instagram} ارسال نمایید.
                    </p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;