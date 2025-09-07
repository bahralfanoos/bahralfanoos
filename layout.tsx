
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BFT Technical Services | Professional Construction & Maintenance in UAE",
  description: "Bahr Al Fanoos Technical Services - Expert carpentry, aluminum work, glass installation, HVAC, plumbing, and construction services in UAE. Professional technical solutions with quality craftsmanship.",
  keywords: "technical services UAE, carpentry Dubai, aluminum work, glass installation, HVAC services, plumbing Dubai, construction services, maintenance UAE, Bahr Al Fanoos",
  authors: [{ name: "BFT Technical Services" }],
  creator: "BFT Technical Services",
  publisher: "BFT Technical Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bft-services.com",
    siteName: "BFT Technical Services",
    title: "BFT Technical Services | Professional Construction & Maintenance",
    description: "Expert technical services including carpentry, aluminum work, glass installation, HVAC, and construction solutions in UAE.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BFT Technical Services - Professional Construction Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BFT Technical Services | Professional Construction & Maintenance",
    description: "Expert technical services including carpentry, aluminum work, glass installation, HVAC, and construction solutions in UAE.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bft-services.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://bft-services.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#018589" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bahr Al Fanoos Technical Services",
              "alternateName": "BFT Technical Services",
              "description": "Professional technical services including carpentry, aluminum work, glass installation, HVAC, plumbing, and construction solutions in UAE.",
              "url": "https://bft-services.com",
              "telephone": "+971559508165",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "Dubai"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-16:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "City",
                "name": "Dubai, Abu Dhabi, Sharjah"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpentry Services",
                      "description": "Custom carpentry and woodwork solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Aluminum Work",
                      "description": "Professional aluminum fabrication and installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Glass Installation",
                      "description": "Tempered glass doors and partition installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "HVAC Services",
                      "description": "Air conditioning and ventilation systems"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
