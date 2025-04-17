// app/components/JsonLd.tsx
export default function JsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Revline",
            "url": "https://revline-nine.vercel.app/",
            "logo": "https://revline-nine.vercel.app/revline.svg",
            "description": "We build responsive landing pages and business sites with modern UI, sharp code, and smooth UX.",
            "address": {
              "@type": "16000",
              "addressCountry": "Algeria"
            },
            "telephone": "+213676366092",
            "email": "revlineagency@gmail.com",
            "priceRange": "$$",
            "serviceArea": "Worldwide",
            "sameAs": [
              "https://twitter.com/revlineagency",
              "https://instagram.com/revlineagency"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00"
          })
        }}
      />
    )
  }