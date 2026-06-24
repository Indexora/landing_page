
import "./globals.css";
import "../styles/logo-marquee.css"
import Image from "next/image";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { NavbarBase } from "@/components/navigation/NavbarBase";
import { navItems, cta } from "@/config/navbar";
import { FooterBase } from "@/components/navigation/FooterBase";
import { footerSectionConfig } from "@/config/footer";
import TargetCursor from "@/components/ui/TargetCursor";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "Indexora.one",
  description:
    "Config-driven SaaS UI components for Next.js built with Tailwind, shadcn/ui, and Framer Motion.",
  icons: {
    icon: "/logo/Favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    suppressHydrationWarning 
    className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} antialiased`}>
      <body>
        <ThemeProvider>
          <NavbarBase
            logo={
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/logo.svg"
                  alt="Indexora.one"
                  width={120}
                  height={120}
                  className="w-auto transition-all duration-500 h-16 group-data-[scrolled=true]/nav:h-10 md:h-20 md:group-data-[scrolled=true]/nav:h-12"
                  priority
                />
                {/* Optional text next to logo */}
                {/*<span className="text-base font-bold">Indexora.one</span>*/}
              </div>
            }
            navItems={navItems}
            cta={cta}
            sticky
          />
          {children}
          <FooterBase {...footerSectionConfig} />
          <TargetCursor 
             targetSelector="a, button, .cursor-target, .accordion-trigger" 
             cursorColor="#ffffff" 
             cursorColorOnTarget="#06b6d4" 
             hoverDuration={0.3} 
          />
          <CookieBanner 
            message="We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies."
            acceptText="Accept All"
            declineText="Reject All"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
