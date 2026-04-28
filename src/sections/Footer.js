import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const sitemap = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#rooms' },
    { name: 'Community', href: '#community' },
    { name: 'Our Story', href: 'https://www.unionliving.in/ourstory' },
    { name: 'Our Blogs', href: 'https://www.unionliving.in/blogs' },
  ];

  
  const importantLinks = [
    { name: 'Rules and Regulations', href: 'https://www.unionliving.in/onboardingpolicy' },
    { name: 'Terms and Condition', href: 'https://www.unionliving.in/termsandcondition' },
    { name: 'Privacy Policy', href: 'https://www.unionliving.in/privacy-policy' },
  ];

  return (
    <footer className="bg-white px-4 pb-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[18px] bg-[#f6f2eb] px-8 py-8">
          <div className="grid gap-8 md:grid-cols-[1.25fr_1fr_1.15fr_1.15fr]">
            <div>
              <a href="#home" className="inline-flex items-center">
                <img src="/assets/logoblack.webp" alt="Union" className="h-11 w-auto" />
              </a>
              <p className="mt-2 text-[10px] text-[#4b4b4b]">Live Easy. Live United</p>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="mt-5 inline-flex items-center justify-center rounded-[8px] bg-[#f97316] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#ea580c]"
              >
                Book Now
              </button>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-black">Sitemap</h3>
              <ul className="mt-3 space-y-2.5 text-[12px] text-[#212121]">
                {sitemap.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="transition-colors hover:text-[#f97316]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-black">Important Links</h3>
              <ul className="mt-3 space-y-2.5 text-[12px] text-[#212121]">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="transition-colors hover:text-[#f97316]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-black">Contact</h3>
              <div className="mt-3 space-y-3 text-[12px] text-[#212121]">
                <div>
                  <p className="font-semibold text-black">General Enquiry</p>
                  <a href="mailto:info@unionliving.in" className="transition-colors hover:text-[#f97316]">
                    info@unionliving.in
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black">Support</p>
                  <a href="mailto:support@unionliving.in" className="transition-colors hover:text-[#f97316]">
                    support@unionliving.in
                  </a>
                </div>
                <a href="tel:+919137915406" className="block transition-colors hover:text-[#f97316]">
                  +91 91379 15406
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[#2b2b2b]">
                <a href="https://www.instagram.com/union_living/?hl=en" aria-label="Instagram" className="transition-colors hover:text-[#f97316]">
                  <Instagram size={14} strokeWidth={2} />
                </a>
                
                <a href="https://www.youtube.com/@unioncoliving" aria-label="YouTube" className="transition-colors hover:text-[#f97316]">
                  <Youtube size={14} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#ddd6ca] pt-5">
            <p className="text-[11px] text-[#414141]">© 2026 Union Living. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
