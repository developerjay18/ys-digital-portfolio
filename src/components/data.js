import * as Image from '.././assets/certificate-logos/index';
import { Astro, Befikr, A, Cosm, Clinic, S1, S2, S3 } from '../assets';
import * as Image2 from '../assets/companies';

const navLinks = [
  {
    name: 'home',
    slug: 'home',
  },
  {
    name: 'case study',
    slug: 'case-study',
  },
  {
    name: 'services',
    slug: 'services',
  },
  {
    name: 'about',
    slug: 'about',
  },
  {
    name: 'contact',
    slug: 'contact',
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

const companies = [
  { slug: Image2.One },
  { slug: Image2.Two },
  { slug: Image2.Three },
  { slug: Image2.Four },
  { slug: Image2.Five },
  { slug: Image2.Six },
  { slug: Image2.Seven },
  { slug: Image2.Eight },
  { slug: Image2.Nine },
  { slug: Image2.Ten },
  { slug: Image2.Eleven },
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
    bgColor: 'bg-black text-white',
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
    bgColor: 'bg-white text-black',
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
    bgColor: 'bg-black text-white',
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
    bgColor: 'bg-white text-black',
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
    bgColor: 'bg-black text-white',
  },
];

const socialLinks = [
  {
    iconName: 'fa-linkedin',
    url: 'https://www.linkedin.com/in/yashsharmadigital',
  },
  {
    iconName: 'fa-instagram',
    url: 'https://instagram.com/yashsharma.digital',
  },
  {
    iconName: 'fa-facebook',
    url: 'https://www.facebook.com/yashsharma.digital',
  },
  {
    iconName: 'fa-whatsapp',
    url: 'https://wa.me/919924894090',
  },
];

const processes = [
  {
    step: 'step 01',
    imgURl: S1,
    title: 'Setup Social Media',
    content: `Firstly, I will create and enhance your social media profiles, ensuring a consistent and reliable presence. I will also maintain regular posts for at least the initial 7 days to strengthen your social media pages. If your page already contains sufficient content, congratulations! You can proceed to the next step.
    `,
  },
  {
    step: 'step 02',
    imgURl: S2,
    title: 'Start Running Ad',
    content: `After that, I'll develop a powerful advertising plan customized for your business to run ads on Facebook and Instagram. We'll sit down together to determine your target audience and identify the kind of offer that will attract leads and boost sales. 
    `,
  },
  {
    step: 'step 03',
    imgURl: S3,
    title: 'Scale This System',
    content: `Following 15 days of advertising, we'll have valuable data to expand this system. At this point, we can raise the ad budget and significantly grow your business.
    `,
  },
];

export const calLink = 'https://calendly.com/yashsharmadigital/call'

export { navLinks, logos, caseStudies, socialLinks, companies, processes };
