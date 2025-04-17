import {
  CodeXml,
  ShoppingCart,
  Gauge,
  LifeBuoy,
  Palette,
  TabletSmartphone,
  Handshake,
  Code,
  Search,
  Code2,
  Database,
  Rocket,
  Globe,
} from "lucide-react";
import { image } from "motion/react-client";

export const services = [
  {
    title: "Web Development",
    description:
      "We build scalable, high-performance websites tailored to your business needs.",
    icon: CodeXml,
    cta: "Let's Build Your Website",
    link: "/contact",
    color: "bg-blue-50 text-blue-600",
    span: "bg-blue-100",
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom online stores with seamless checkout and payment integration.",
    icon: ShoppingCart,
    cta: "Launch Your Store",
    link: "/contact",
    color: "bg-green-50 text-green-600",
    span: "bg-green-100",
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize speed, SEO, and security for the best user experience.",
    icon: Gauge,
    cta: "Boost Performance",
    link: "/contact",
    color: "bg-amber-50 text-amber-600",
    span: "bg-amber-100",
  },
  {
    title: "Web Maintenance & Support",
    description:
      "Keep your site updated, secure, and running smoothly with our support.",
    icon: LifeBuoy,
    cta: "Get Ongoing Support",
    link: "/contact",
    color: "bg-red-50 text-red-600",
    span: "bg-red-100",
  },
];

export const whyChooseUs = [
  {
    icon: Palette,
    title: "Stunning Design",
    description:
      "Our designs are not just visually appealing—they're optimized for engagement, usability, and conversion.",
    color: "bg-blue-50 text-blue-600",
    span: "bg-blue-600",
  },
  {
    icon: TabletSmartphone,
    title: "Fully Responsive",
    description:
      "Our websites look and perform flawlessly across all devices—desktops, tablets, and smartphones.",
    color: "bg-green-50 text-green-600",
    span: "bg-green-600",
  },
  {
    icon: Handshake,
    title: "Dedicated Support & Maintenance",
    description:
      "We don’t just build—we provide ongoing support to keep your website running smoothly.",
    color: "bg-amber-50 text-amber-600",
    span: "bg-amber-600",
  },
];
export const features = [
  {
    title: "Custom Web Development",
    description:
      "We build bespoke websites and applications tailored to your unique business requirements.",
    icon: Code,
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-600",
  },
  {
    title: "Strategic SEO Solutions",
    description:
      "Data-driven optimization that boosts your search rankings and drives targeted organic traffic.",
    icon: Search,
    color: "from-green-400 to-green-600",
    textColor: "text-green-600",
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast websites that provide exceptional user experiences and higher conversion rates.",
    icon: Gauge,
    color: "from-amber-400 to-amber-600",
    textColor: "text-amber-600",
  },
];
export const processSteps = [
  {
    number: 1,
    title: "Identify Your Goals",
    description:
      "Start by outlining what you want to achieve with your website. Is it to generate leads, sell products, showcase a portfolio, or provide information? Clear objectives help shape the right strategy.",
  },
  {
    number: 2,
    title: "Define Your Requirements",
    description:
      "Think about the core features your website should have. Do you need e-commerce functionality, booking systems, user authentication, or custom integrations? List the essential elements your project requires.",
  },
  {
    number: 3,
    title: "Choose a Design Style",
    description:
      "Your website’s look and feel should reflect your brand identity. Share any inspirations, color schemes, or existing branding materials that will guide the design process.",
  },
  {
    number: 4,
    title: "Prepare Your Content",
    description:
      "High-quality content makes a huge difference. Gather text, images, videos, or any other assets you want on your website.",
  },
  {
    number: 5,
    title: "Set a Budget & Timeline",
    description:
      "Determine how much you’re willing to invest in your website and when you need it to be completed. This will help us recommend the right solutions for your project.",
  },
  {
    number: 6,
    title: "Contact Us & Get Started",
    description:
      "Once you have a rough idea of your project, reach out to us! We’ll discuss the details, offer expert recommendations, and kickstart the development process.",
  },
];
export const faq = [
  {
    que: "How long does it take to build a website?",
    answer:
      "Timeline varies depending on project complexity. Typically, a basic website takes 2-4 weeks, while complex web applications may take 8-12 weeks or more.",
  },
  {
    que: "Do you offer website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our standard approach includes 3 free revisions for any changes or updates. Additional revisions beyond this are billed at our hourly rate to ensure your website continues to evolve with your business needs.",
  },
  {
    que: "What's your payment structure?",
    answer:
      "We typically require a 30% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone payments.",
  },
  {
    que: "Do you provide hosting services?",
    answer:
      "Yes, we offer reliable hosting solutions optimized for performance, security, and scalability to match your specific needs.",
  },
];
export const whyWorkWithUs = [
  "Experienced team with proven track record",
  "Transparent pricing and timelines",
  "Dedicated project manager for every client",
  "Post-launch support and maintenance",
];
export const projectShowcases = [
  {
    id: 1,
    title: "StayFinder - Hotel Booking Platform",
    category: "Booking",
    description:
      "A simple and efficient hotel booking platform that allows users to search and filter hotels based on price, rating, location, and hotel name.",
    technologies: "Next.js, TailwindCSS, Supabase",
    features: [
      "Hotel search with filters (price, rating, location, and name)",
      "Clean and responsive UI",
      "Optimized for performance",
    ],
    color: "bg-revline-200",
    image: "/shots/stayfinder_shot.png",
    link: "https://stayfinder-five.vercel.app/",
  },
  {
    id: 2,
    title: "Furnish - E-Commerce Furniture Store",
    category: "E-commerce",
    description:
      "A sleek e-commerce platform designed for furniture businesses, featuring a clean product catalog and an intuitive shopping experience.",
    technologies: "React.js, TailwindCSS, Supabase, custom cart system",
    features: [
      "Product browsing and filtering",
      "Responsive and modern design",
      "Efficient data fetching with Supabase",
    ],

    color: "bg-revline-300",
    image: "/shots/furnish_shot.png",
    link: "https://furnish-two.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Admin Dashboard",
    category: "Web App",
    description:
      "A powerful admin dashboard for managing e-commerce operations, offering insights into sales, orders, and product performance.",
    technologies: "Next.js, TailwindCSS, Supabase, Recharts",
    features: [
      "Sales analytics and data visualization",
      "Order and inventory management",
      "Interactive and intuitive dashboard",
    ],
    image: "/shots/ecad_shot.png",
    color: "bg-revline-400",
    link: "https://ecad-beta.vercel.app/",
  },
  {
    id: 4,
    title: "SmileCare - Dental Clinic Website",
    category: "Website",
    description:
      "A professional website for dental clinics, providing a modern online presence with appointment booking and essential clinic details.",
    technologies: "React.js, TailwindCSS",
    features: [
      "Online appointment booking",
      "Responsive and user-friendly design",
      "SEO-optimized for better visibility",
    ],
    image: "/shots/smilecare_shot.png",
    color: "bg-revline-200",
    link: "https://smilecare-nine.vercel.app/",
  },
];
