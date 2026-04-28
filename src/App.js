import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import EnquiryModal from './components/EnquiryModal';
import Navbar from './sections/Navbar';
import SaveYourSpot from './sections/SaveYourSpot';
import OurRooms from './sections/OurRooms';
import CommunityCulture from './sections/CommunityCulture';
import WhyChooseUs from './sections/WhyChooseUs';
import Reviews from './sections/Reviews';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
function App() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    useEffect(() => {
        const openModal = () => setIsEnquiryOpen(true);
        window.addEventListener('open-enquiry-modal', openModal);
        return () => window.removeEventListener('open-enquiry-modal', openModal);
    }, []);
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        if (window.location.pathname !== '/') {
            window.history.replaceState({}, '', '/');
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (<div className="min-h-screen bg-white">
      <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)}/>
      <Navbar />
      <Hero />
      <SaveYourSpot />
      <OurRooms />
      <CommunityCulture />
      <WhyChooseUs />
      <Reviews />
      <Footer />
      <button type="button" onClick={() => setIsEnquiryOpen(true)} className="fixed bottom-4 right-4 z-[70] inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-[#de5a28] px-3.5 py-2.5 text-[12px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#c94f21] md:bottom-6 md:right-6 md:px-4">
        <MessageCircle size={12} strokeWidth={2}/>
        Enquire
      </button>
    </div>);
}
export default App;
