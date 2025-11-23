import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { ArticleCategory } from '../types';
import { ArrowLeft, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<ArticleCategory | 'ALL'>('ALL');

  const filteredArticles = filter === 'ALL' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === filter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 text-purple-600 rounded-full mb-4 shadow-lg shadow-purple-200 dark:shadow-none">
            <BookOpen size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-slate-100 mb-4">دانستنی‌های سرطان</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            مجموعه‌ای از مقالات معتبر علمی با هدف آگاهی‌بخشی در زمینه‌های پیشگیری، تشخیص و روش‌های نوین درمان سرطان.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1 rounded-xl shadow-sm inline-flex dark:bg-slate-800/50 dark:border-slate-700">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                filter === 'ALL' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10'
              }`}
            >
              همه مقالات
            </button>
            <button
              onClick={() => setFilter(ArticleCategory.PREVENTION)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                filter === ArticleCategory.PREVENTION 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10'
              }`}
            >
              پیشگیری
            </button>
            <button
              onClick={() => setFilter(ArticleCategory.TREATMENT)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                filter === ArticleCategory.TREATMENT 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10'
              }`}
            >
              درمان
            </button>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div key={article.id} className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm">
                    {article.category === ArticleCategory.PREVENTION ? 'پیشگیری' : 'درمان'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight">{article.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex justify-between items-center mt-auto">
                  <span className="text-xs text-slate-400">{article.date}</span>
                  <button className="text-purple-600 dark:text-purple-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    خواندن کامل <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;