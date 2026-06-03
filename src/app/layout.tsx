import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Karachi Club GYM - Your Ultimate Fitness Destination',
  description: 'Join Karachi Club GYM for state-of-the-art facilities, personalized training, diverse group classes, and a supportive fitness community. Achieve your health and fitness goals with us.',
  keywords: ["gym Karachi, fitness club, personal training, group classes, workout, health, wellness, exercise, Karachi Club, strength, cardio"],
  openGraph: {
    "title": "Karachi Club GYM - Your Ultimate Fitness Destination",
    "description": "Join Karachi Club GYM for state-of-the-art facilities, personalized training, diverse group classes, and a supportive fitness community. Achieve your health and fitness goals with us.",
    "url": "https://www.karachiclubgym.com",
    "siteName": "Karachi Club GYM",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/still-life-foam-roller_23-2151817414.jpg",
        "alt": "Diverse group working out in modern gym"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Karachi Club GYM - Your Ultimate Fitness Destination",
    "description": "Join Karachi Club GYM for state-of-the-art facilities, personalized training, diverse group classes, and a supportive fitness community. Achieve your health and fitness goals with us.",
    "images": [
      "http://img.b2bpic.net/free-photo/still-life-foam-roller_23-2151817414.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
