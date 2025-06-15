import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Job Alert',
  description: 'Find latest government jobs, sarkari naukri, recruitment notifications, admit cards, and results.',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
} 