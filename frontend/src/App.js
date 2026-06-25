import { Toaster } from 'sonner';
import '@/App.css';
import { ThemeProvider } from '@/components/landing/ThemeProvider';
import { ProductProvider } from '@/components/landing/ProductContext';
import Header from '@/components/landing/Header';
import PromoBar from '@/components/landing/PromoBar';
import Hero from '@/components/landing/Hero';
import Marquee from '@/components/landing/Marquee';
import KeyBenefits from '@/components/landing/KeyBenefits';
import ProductShowcase from '@/components/landing/ProductShowcase';
import PremiumAudio from '@/components/landing/PremiumAudio';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import LifestyleSection from '@/components/landing/LifestyleSection';
import ComparisonTable from '@/components/landing/ComparisonTable';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <div className="App relative min-h-screen bg-background text-foreground">
          <PromoBar />
          <Header />
          <main>
            <Hero />
            <Marquee />
            <KeyBenefits />
            <ProductShowcase />
            <PremiumAudio />
            <FeaturesGrid />
            <LifestyleSection />
            <ComparisonTable />
            <Pricing />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
          <Toaster
            position="bottom-center"
            theme="dark"
            toastOptions={{
              className: 'font-medium',
              style: { borderRadius: '16px' },
            }}
          />
        </div>
      </ProductProvider>
    </ThemeProvider>
  );
}
