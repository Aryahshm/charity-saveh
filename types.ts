export enum ProductCategory {
  WREATH = 'WREATH',
  BOX = 'BOX'
}

export interface Product {
  id: number;
  title: string;
  price: number; // 0 if free/donation box
  image: string;
  category: ProductCategory;
  description: string;
}

export enum ArticleCategory {
  PREVENTION = 'PREVENTION',
  TREATMENT = 'TREATMENT'
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: ArticleCategory;
  date: string;
}

export interface DonationTier {
  amount: number;
  label: string;
}

export interface BoardMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface CardInfo {
  bankName: string;
  cardNumber: string;
  ownerName: string;
}