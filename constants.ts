import { Article, ArticleCategory, DonationTier, Product, ProductCategory, BoardMember, CardInfo } from './types';

export const CHARITY_DETAILS = {
  name: "خیریه امام حسین (ع)",
  fullName: "مرکز حمایت از بیماران مبتلا به سرطان شهرستان ساوه",
  address: "ساوه، خیابان ثلاث، ثلاث ۲۰",
  phone: "086-42234520",
  instagram: "@saveh.charity",
  hours: "شنبه تا چهارشنبه ۸ تا ۱۳ | پنج‌شنبه ۸ تا ۱۲"
};

export const CARD_NUMBERS: CardInfo[] = [
  {
    bankName: "بانک ملی",
    cardNumber: "۶۰۳۷-۹۹۱۸-۹۹۹۹-۰۰۰۱",
    ownerName: "خیریه امام حسین (ع)"
  },
  {
    bankName: "بانک ملت",
    cardNumber: "۶۱۰۴-۳۳۷۸-۸۸۸۸-۰۰۰۲",
    ownerName: "خیریه امام حسین (ع)"
  }
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: 1,
    name: "دکتر محمد رضایی",
    role: "رئیس هیئت مدیره",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "مهندس زهرا کریمی",
    role: "مدیر عامل",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "حاج علی اکبری",
    role: "خزانه‌دار",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "دکتر سارا نوری",
    role: "عضو هیئت مدیره",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
];

export const NAV_LINKS = [
  { path: '/', label: 'خانه' },
  { path: '/blog', label: 'بلاگ و آموزش' },
  { path: '/shop', label: 'سفارش تاج گل' },
  { path: '/donate', label: 'همیاری' },
  { path: '/contact', label: 'تماس با ما' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'علائم اولیه سرطان پستان که باید بشناسید',
    excerpt: 'تشخیص زودهنگام سرطان پستان می‌تواند جان شما را نجات دهد. با علائم خاموش این بیماری آشنا شوید.',
    content: 'سرطان پستان یکی از شایع‌ترین انواع سرطان در میان زنان است. آگاهی از علائم اولیه مانند تغییر در شکل یا اندازه پستان، لمس توده، یا تغییرات پوستی بسیار حیاتی است. معاینات منظم شخصی و غربالگری‌های پزشکی می‌تواند در مراحل اولیه بیماری را شناسایی کند.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.PREVENTION,
    date: '1403/02/01'
  },
  {
    id: 2,
    title: 'تغذیه در دوران شیمی‌درمانی: بایدها و نبایدها',
    excerpt: 'رژیم غذایی مناسب می‌تواند به بدن شما کمک کند تا با عوارض جانبی شیمی‌درمانی مقابله کند و انرژی خود را حفظ کند.',
    content: 'تغذیه نقش کلیدی در فرآیند درمان سرطان دارد. مصرف پروتئین کافی، مایعات فراوان و ویتامین‌ها به ترمیم بافت‌ها و تقویت سیستم ایمنی کمک می‌کند. در این مقاله به معرفی مواد غذایی مفید و غذاهایی که باید از آنها پرهیز کرد می‌پردازیم.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.TREATMENT,
    date: '1403/02/05'
  },
  {
    id: 3,
    title: 'حمایت روانی از خانواده بیمار مبتلا به سرطان',
    excerpt: 'سرطان نه تنها بیمار، بلکه تمام خانواده را تحت تأثیر قرار می‌دهد. راهکارهایی برای حفظ سلامت روان خانواده.',
    content: 'تشخیص سرطان می‌تواند برای اعضای خانواده شوک‌آور باشد. اضطراب، افسردگی و ترس از دست دادن عزیزان از احساسات رایج است. مشاوره روانشناسی، گروه‌های حمایتی و حفظ ارتباطات عاطفی می‌تواند به خانواده‌ها کمک کند تا از این دوران سخت عبور کنند.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.TREATMENT,
    date: '1403/02/10'
  },
  {
    id: 4,
    title: 'اهمیت غربالگری و چکاپ‌های دوره‌ای',
    excerpt: 'چرا نباید منتظر علائم بمانیم؟ اهمیت آزمایش‌های دوره‌ای در پیشگیری و درمان موفق.',
    content: 'بسیاری از سرطان‌ها در مراحل اولیه بدون علامت هستند. آزمایش‌های غربالگری مانند ماموگرافی، کولونوسکوپی و تست پاپ‌اسمیر می‌توانند تغییرات سلولی را قبل از تبدیل شدن به سرطان شناسایی کنند. برنامه منظم چکاپ خود را جدی بگیرید.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.PREVENTION,
    date: '1403/02/15'
  },
  {
    id: 5,
    title: 'گزارش عملکرد خیریه در سال گذشته',
    excerpt: 'شفافیت مالی و گزارش خدمات ارائه شده به بیماران تحت پوشش خیریه امام حسین (ع).',
    content: 'با یاری شما خیرین گرامی، در سال گذشته توانستیم هزینه داروی بیش از ۵۰۰ بیمار را تأمین کنیم، ۱۲۰۰ بسته معیشتی توزیع کنیم و تجهیزات پزشکی جدیدی را به ناوگان امانات خود اضافه کنیم. گزارش کامل مالی را در ادامه مشاهده کنید.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.PREVENTION, // Used loosely for general charity info
    date: '1403/02/20'
  },
  {
    id: 6,
    title: 'راهکارهای ساده برای پیشگیری از سرطان',
    excerpt: 'تغییرات کوچک در سبک زندگی که می‌تواند خطر ابتلا به سرطان را به میزان قابل توجهی کاهش دهد.',
    content: 'تحقیقات نشان می‌دهد که بیش از ۴۰ درصد سرطان‌ها قابل پیشگیری هستند. ترک سیگار، ورزش منظم، رژیم غذایی سالم، حفظ وزن متعادل و محافظت از پوست در برابر آفتاب از مهم‌ترین عوامل پیشگیری هستند.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    category: ArticleCategory.PREVENTION,
    date: '1403/02/25'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'تاج گل خیریه - طرح لاله',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1596064772735-e0db740a2eb5?auto=format&fit=crop&q=80&w=500',
    category: ProductCategory.WREATH,
    description: 'با سفارش این تاج گل، هزینه آن صرف داروی بیماران نیازمند می‌شود. همراه با استند و پلاکارد.'
  },
  {
    id: 2,
    title: 'تاج گل خیریه - طرح ارکیده',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1563241527-300527cfd9f6?auto=format&fit=crop&q=80&w=500',
    category: ProductCategory.WREATH,
    description: 'تاج گل باشکوه دو طبقه. عواید حاصل تماماً صرف هزینه‌های شیمی‌درمانی می‌شود.'
  },
  {
    id: 3,
    title: 'صندوق صدقات رومیزی',
    price: 0,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500',
    category: ProductCategory.BOX,
    description: 'صندوق صدقات کوچک و زیبا برای منزل یا محل کار شما.'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  { amount: 50000, label: '۵۰,۰۰۰ تومان' },
  { amount: 100000, label: '۱۰۰,۰۰۰ تومان' },
  { amount: 200000, label: '۲۰۰,۰۰۰ تومان' },
  { amount: 500000, label: '۵۰۰,۰۰۰ تومان' },
];