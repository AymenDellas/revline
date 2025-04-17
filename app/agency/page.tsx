import React from "react";
import Aboutus from "../components/Aboutus";
import Process from "../components/Process";

export const metadata = {
  title: 'About Our Agency',
  description: 'Learn about Revline\'s approach to web development and the team behind your next successful project.',
  keywords: ['web development', 'agency', 'conversion-focused', 'landing pages'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Revline - Modern Web Development Agency',
    description: 'We build responsive landing pages and business sites with modern UI, sharp code, and smooth UX.',
    url: 'https://revline-nine.vercel.app',
    siteName: 'Revline',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Revline Web Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revline - Modern Web Development Agency',
    description: 'We build responsive landing pages and business sites with modern UI, sharp code, and smooth UX.',
    images: ['/twitter-image.png'],
  },
};

const page = () => {
  return (
    <section>
      <Aboutus />
      <Process />
    </section>
  );
};

export default page;
