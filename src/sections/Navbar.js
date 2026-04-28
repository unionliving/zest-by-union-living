import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Properties', id: 'rooms' },
    { label: 'Community', id: 'community' },
];
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsOpen(false);
    };
    return (<header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-3 md:h-16 md:px-4">
        <a href="#home" className="flex items-center gap-2" onClick={() => scrollToSection('home')}>
          <img src="/assets/logoblack.webp" alt="Union Living" className="h-7 w-auto md:h-10"/>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (<button key={link.id} onClick={() => handleNavClick(link.id)} className="text-sm text-gray-700 transition-colors hover:text-gray-900 md:text-base">
              {link.label}
            </button>))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))} className="ml-3 inline-flex items-center gap-2 justify-center rounded-lg bg-[#D64C27] px-3 py-2 text-sm text-white transition-colors hover:bg-[#c44422] md:ml-4 md:px-4 md:text-base">
            <MessageCircle className="h-4 w-4"/>
            Enquire
          </button>

          <button type="button" className="inline-flex rounded-md p-2 text-neutral-900 md:hidden" aria-label="Toggle navigation" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {isOpen && (<div className="border-t border-neutral-200 bg-white px-3 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (<button key={link.id} onClick={() => handleNavClick(link.id)} className="text-left text-sm text-gray-700 transition-colors hover:text-gray-900">
                {link.label}
              </button>))}
          </div>
        </div>)}
    </header>);
}
export default Navbar;
