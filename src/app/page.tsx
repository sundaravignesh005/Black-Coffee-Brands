import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { StickyNav } from '@/components/StickyNav';
import { Amenities, Faq, Nearby, VisitForm } from '@/components/Interactive';
import { About, HomeLoans, Location, QuoteBanner, VideoBanner, WhyUs } from '@/components/Sections';

export default function Page() {
  return (
    <main className="w-full md:w-auto">
      <StickyNav />
      <Hero />
      <About />
      <VideoBanner />
      <WhyUs />
      <Amenities />
      <QuoteBanner />
      <Location />
      <Nearby />
      <HomeLoans />
      <Faq />
      <VisitForm />
      <Footer />
    </main>
  );
}
