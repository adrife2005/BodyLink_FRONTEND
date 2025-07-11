import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BodyLink - Plataforma de Gestión Corporal #1",
  description: "La plataforma más avanzada para gestionar y optimizar tu bienestar corporal. Gestiona rutinas, simula entrenamientos y toma decisiones inteligentes sobre tu salud.",
  keywords: ["gestión corporal", "bienestar", "rutinas", "entrenamientos", "simulador fitness", "gestión de salud", "planificación corporal"],
  authors: [{ name: "BodyLink Team" }],
  creator: "BodyLink",
  publisher: "BodyLink",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://bodylink.vercel.app",
    title: "BodyLink - Plataforma de Gestión Corporal #1",
    description: "La plataforma más avanzada para gestionar y optimizar tu bienestar corporal. Gestiona rutinas, simula entrenamientos y toma decisiones inteligentes sobre tu salud.",
    siteName: "BodyLink",
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyLink - Plataforma de Gestión Corporal #1",
    description: "La plataforma más avanzada para gestionar y optimizar tu bienestar corporal.",
    creator: "@bodylink",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://bodylink.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Analytics />
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-center" />
        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
