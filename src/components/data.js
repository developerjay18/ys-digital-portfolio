import * as Image from '.././assets/certificate-logos/index';
import { Astro, Befikr, A, Cosm, Clinic } from '../assets';

const navLinks = [
  {
    name: 'home',
    slug: '/',
  },
  {
    name: 'case study',
    slug: '/case-study',
  },
  {
    name: 'services',
    slug: '/services',
  },
  {
    name: 'about',
    slug: '/about',
  },
  {
    name: 'contact',
    slug: '/contact',
  },
];

const logos = [
  { slug: Image.Amazon },
  { slug: Image.ADSM },
  { slug: Image.Google },
  { slug: Image.GS },
  { slug: Image.HS },
  { slug: Image.HubSpot },
  { slug: Image.Insta },
  { slug: Image.Meta },
  { slug: Image.SR },
  { slug: Image.SD },
  { slug: Image.Udemy },
  { slug: Image.YT },
];

const caseStudies = [
  {
    imgUrl: Astro,
    title: 'High-ticket Prospects',
    description:
      'For the past 25 years, he has been offering his services; however, he has never ventured onto online platforms to promote them. Additionally, he lacks a presence on Facebook. But now...',
    stat1: {
      number: '5500+',
      value: 'Inquiries',
    },
    stat2: {
      number: '₹4Lakh+',
      value: 'Revenue',
    },
    stat3: {
      number: '150+',
      value: 'Daily Inquiries',
    },
  },
  {
    imgUrl: Cosm,
    title: 'Increase In Footfall',
    description: `They gave their marketing job to a big agency, but that agency didn't bother to know their customers. So, the client lost money for months. Finally, they asked me for help. And now...`,
    stat1: {
      number: '100+',
      value: 'Footfall',
    },
    stat2: {
      number: '₹2.5 Lakh+',
      value: 'Revenue',
    },
    stat3: {
      number: '15+ High-ticket',
      value: 'Treatment',
    },
  },
  {
    imgUrl: Befikr,
    title: 'High- Quality Leads',
    description: `This is a new web design agency, and theyhave no online presence. They don't even have their own website ready, but they're trying to get clients through WhatsApp. So far, the outcome is...`,
    stat1: {
      number: '500+',
      value: 'Leads',
    },
    stat2: {
      number: '₹4.5Lakh+',
      value: 'Revenue',
    },
    stat3: {
      number: '60+',
      value: 'Client Closes',
    },
  },
  {
    imgUrl: Clinic,
    title: 'Increase In Appointments',
    description: `A clinic in Ahmedabad is starting to get noticed on social media. They want people to book appointments and are offering a threemonth treatment plan. The results so far are...`,
    stat1: {
      number: '100+',
      value: 'Inquiries',
    },
    stat2: {
      number: '₹48,000+',
      value: 'Revenue',
    },
    stat3: {
      number: '20+ client',
      value: 'Converted',
    },
  },
  {
    imgUrl: A,
    title: 'Product Sold out',
    description: `This company sells things like home decor, gifts, and stationery. Despite having only 250 followers on Instagram and no Facebook page, they quickly gained a ton of interest in their products and started receiving orders within just one week`,
    stat1: {
      number: '250+',
      value: 'Inquiries',
    },
    stat2: {
      number: '₹56,000+',
      value: 'Revenue',
    },
    stat3: {
      number: '150+',
      value: 'Product Sold',
    },
  },
];

export { navLinks, logos, caseStudies };
