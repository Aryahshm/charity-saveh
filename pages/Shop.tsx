import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import WreathForm from '../components/WreathForm';
import { ShoppingBag, Flower } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOrderSubmit = (formData: any) => {
    console.log('Order Submitted:', formData);
    alert('سفارش شما با موفقیت ثبت شد. همکاران ما به زودی با شما تماس خواهند گرفت.');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
            <Flower size={32} />
          </div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-4">فروشگاه خیریه</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto bg-white/40 dark:bg-slate-800/50 backdrop-blur p-4 rounded-2xl">
            با سفارش تاج گل‌های خیریه (اجاره‌ای) به جای گل‌های طبیعی که عمر کوتاهی دارند، علاوه بر تسلی خاطر بازماندگان، در نجات جان بیماران سهیم باشید.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="glass-card p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col group border border-white/60 dark:border-slate-700/60">
              <div className="relative h-72 rounded-[1.5rem] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800 shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
                  {product.category === 'WREATH' ? 'تاج گل' : 'صندوق'}
                </div>
              </div>
              
              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 mb-1">قیمت / اهدا</span>
                    <span className="text-lg font-black text-secondary dark:text-secondary-light">
                      {product.price === 0 ? 'رایگان' : `${product.price.toLocaleString()} تومان`}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-slate-900 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/25"
                  >
                    {product.category === 'WREATH' ? <Flower size={18} /> : <ShoppingBag size={18} />}
                    سفارش
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
             <div className="my-8 w-full max-w-lg">
                <WreathForm 
                  product={selectedProduct} 
                  onCancel={() => setSelectedProduct(null)} 
                  onSubmit={handleOrderSubmit} 
                />
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;