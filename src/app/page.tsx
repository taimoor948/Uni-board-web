import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow mt-32">
        <HeroSection />
      </main>
      
      <Footer />
    </div>
  );
}
