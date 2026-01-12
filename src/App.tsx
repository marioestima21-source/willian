import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { Navbar } from './components/NavBar';
import { VideoGrid } from './components/VideoGrid';
import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';


function App() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <StatsCounter />
      <VideoGrid />
      <AboutSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;