import { Check, Clock3, MapPin, ShieldCheck, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { submitLeadSquaredLead } from '../lib/leadSquared';

const benefitItems = [
  { icon: ShieldCheck, label: 'Verified Properties' },
  { icon: Clock3, label: '24/7 Support' },
  { icon: MapPin, label: 'Prime Locations' },
];

const budgetOptions = [
  { label: 'Below Rs. 10,000', value: '10000' },
  { label: 'Rs. 10,000 - Rs. 15,000', value: '15000' },
  { label: 'Rs. 15,000 - Rs. 20,000', value: '20000' },
  { label: 'Rs. 20,000 - Rs. 25,000', value: '25000' },
  { label: 'Above Rs. 25,000', value: '30000' },
];

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  college: '',
  budget: '',
};

function EnquiryModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleClose = useCallback(() => {
    setSubmitted(false);
    setError('');
    setForm(initialForm);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleClose]);

  if (!open) {
    return null;
  }

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = [
        { Attribute: 'FirstName',                  Value: form.fullName },
        { Attribute: 'Phone',                       Value: form.phone.replace(/\D/g, '') },
        { Attribute: 'EmailAddress',                Value: form.email },
        { Attribute: 'mx_College_or_Company_Name',  Value: form.college },
        { Attribute: 'mx_Monthly_Budget',           Value: form.budget },
        { Attribute: 'Source',                      Value: 'Ruturaj Zest Landing Page' },
        { Attribute: 'SearchBy',                    Value: 'Phone' },
        { Attribute: 'Ad Name' ,                    Value: 'Facebook - zest Launch Ad'},
      ];

      const { response, result } = await submitLeadSquaredLead(payload);

      if (response.ok && result?.Status === 'Success') {
        if (result?.Message) {
          console.log('Lead Created/Updated:', {
            Id: result.Message.Id,
            RelatedId: result.Message.RelatedId,
            IsCreated: result.Message.IsCreated,
          });
        }
        // Meta Pixel
        if (window.fbq) window.fbq('trackCustom', 'Form_Submit');
        // Google Ads conversion
        if (window.gtag) window.gtag('event', 'conversion', {
          send_to: 'AW-11425120901/9ZMYCIbzufsbEIWF9scq',
          value: 1.0,
          currency: 'INR',
        });
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setError('Submission failed: ' + (result?.ExceptionMessage || response.statusText || 'Unknown error'));
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-[rgba(34,29,24,0.24)] px-3 py-4 backdrop-blur-[4px] sm:items-center sm:px-6 sm:py-6">
      <div
        className="absolute inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative z-[1] my-auto w-full max-w-[700px] rounded-[24px] bg-white px-4 py-5 shadow-[0_36px_80px_rgba(24,18,11,0.28)] sm:rounded-[28px] sm:px-8 sm:py-8">
        <button
          type="button"
          aria-label="Close enquiry form"
          onClick={handleClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#66605a] transition-colors hover:bg-[#f6f3ee] hover:text-[#1e2432] sm:right-5 sm:top-5"
        >
          <X className="h-6 w-6" strokeWidth={2.2} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center">
              <h2 className="font-display pr-8 text-[1.8rem] text-[#182033] sm:pr-0 sm:text-[2.25rem]">
                Get Free Consultation
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#767c88] sm:text-[1.05rem]">
                Fill the form and our expert will call you within 2 hours
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {benefitItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#f8f8f8] px-4 py-3 text-[0.95rem] text-[#455064] sm:text-[0.98rem]"
                  >
                    <Icon className="h-4 w-4 text-[#ff6d45]" strokeWidth={2.2} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <form className="mt-7 sm:mt-8" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:gap-5">
                <label className="grid gap-2 text-[0.94rem] font-medium text-[#3e4654] sm:text-[0.98rem]">
                  <span>Full Name *</span>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                    placeholder="Enter your full name"
                    className="h-13 rounded-[16px] border border-[#d7dde8] px-4 text-[0.98rem] text-[#243041] outline-none transition-colors placeholder:text-[#a5adbb] focus:border-[#ff6d45] sm:h-14 sm:rounded-[18px] sm:px-5 sm:text-[1rem]"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-[0.94rem] font-medium text-[#3e4654] sm:text-[0.98rem]">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder="+91 98765 43210"
                      className="h-13 rounded-[16px] border border-[#d7dde8] px-4 text-[0.98rem] text-[#243041] outline-none transition-colors placeholder:text-[#a5adbb] focus:border-[#ff6d45] sm:h-14 sm:rounded-[18px] sm:px-5 sm:text-[1rem]"
                    />
                  </label>

                  <label className="grid gap-2 text-[0.94rem] font-medium text-[#3e4654] sm:text-[0.98rem]">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder="your@email.com"
                      className="h-13 rounded-[16px] border border-[#d7dde8] px-4 text-[0.98rem] text-[#243041] outline-none transition-colors placeholder:text-[#a5adbb] focus:border-[#ff6d45] sm:h-14 sm:rounded-[18px] sm:px-5 sm:text-[1rem]"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-[0.94rem] font-medium text-[#3e4654] sm:text-[0.98rem]">
                  <span>Your College/University *</span>
                  <input
                    type="text"
                    required
                    value={form.college}
                    onChange={(event) => updateField('college', event.target.value)}
                    placeholder="Enter your college or university"
                    className="h-13 rounded-[16px] border border-[#d7dde8] px-4 text-[0.98rem] text-[#243041] outline-none transition-colors placeholder:text-[#a5adbb] focus:border-[#ff6d45] sm:h-14 sm:rounded-[18px] sm:px-5 sm:text-[1rem]"
                  />
                </label>

                <div className="grid gap-5">
                  <label className="grid gap-2 text-[0.94rem] font-medium text-[#3e4654] sm:text-[0.98rem]">
                    <span>Monthly Budget *</span>
                    <select
                      required
                      value={form.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      className="h-13 rounded-[16px] border border-[#d7dde8] bg-white px-4 text-[0.98rem] text-[#243041] outline-none transition-colors focus:border-[#ff6d45] sm:h-14 sm:rounded-[18px] sm:px-5 sm:text-[1rem]"
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              {error && (
                <p className="mt-3 text-center text-[0.88rem] text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-[16px] bg-[#df4f24] px-6 text-[1rem] font-semibold text-white shadow-[0_16px_30px_rgba(223,79,36,0.28)] transition-colors hover:bg-[#cb431a] disabled:opacity-60 sm:mt-6 sm:h-16 sm:rounded-[18px] sm:text-[1.08rem]"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
              </button>
            </form>
          </>
        ) : (
          <div className="px-1 py-4 text-center sm:px-2 sm:py-6">
            <h2 className="font-display pr-8 text-[1.8rem] text-[#182033] sm:pr-0 sm:text-[2.25rem]">
              Get Free Consultation
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-[#767c88] sm:text-[1.05rem]">
              Fill the form and our expert will call you within 2 hours
            </p>
            <div className="mx-auto mt-8 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ddf9e4] sm:mt-9">
              <Check className="h-9 w-9 text-[#18a957]" strokeWidth={2.4} />
            </div>
            <h3 className="mt-7 text-[1.85rem] font-semibold leading-none text-[#182033] sm:text-[2.1rem]">
              Enquiry submitted
            </h3>
            <p className="mx-auto mt-4 max-w-[320px] text-[1rem] leading-relaxed text-[#767c88] sm:text-[1.05rem]">
              Our team will reach out shortly
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-[16px] bg-[#df4f24] px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-[#cb431a] sm:mt-9 sm:h-16 sm:rounded-[18px] sm:text-[1.08rem]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;
