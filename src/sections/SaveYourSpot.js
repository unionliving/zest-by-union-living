import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { submitLeadSquaredLead } from '../lib/leadSquared';

const STEPS = ['name', 'phone', 'email', 'college', 'budget'];

const BUDGET_OPTIONS = [
  { label: '0-10k', value: '10000' },
  { label: '11k-15k', value: '15000' },
  { label: '16k-20k', value: '20000' },
  { label: '21k-25k', value: '25000' },
];

const SaveYourSpot = () => {
  const [step, setStep] = useState('name');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    budget: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError('');
  };

  const currentIndex = STEPS.indexOf(step);

  const submitToLeadSquared = async () => {
    setIsSubmitting(true);
    try {
      const payload = [
        { Attribute: 'FirstName', Value: form.name },
        { Attribute: 'Phone', Value: form.phone },
        { Attribute: 'EmailAddress', Value: form.email },
        { Attribute: 'mx_College_or_Company_Name', Value: form.college },
        { Attribute: 'mx_Monthly_Budget', Value: form.budget },
        { Attribute: 'Source', Value: 'Ruturaj Zest Landing Page' },
        { Attribute: 'SearchBy', Value: 'Phone' },
        { Attribute: 'Ad Name' , Value: 'Facebook - KP Launch Ad'},
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

        if (window.fbq) window.fbq('trackCustom', 'Form_Submit');
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-11425120901/9ZMYCIbzufsbEIWF9scq',
            value: 1.0,
            currency: 'INR',
          });
        }
        setStep('done');
      } else {
        setError(`Submission failed: ${result?.ExceptionMessage || response.statusText || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    setError('');

    if (step === 'name') {
      if (!form.name.trim()) {
        setError('Please enter your full name');
        return;
      }
      setStep('phone');
      return;
    }

    if (step === 'phone') {
      if (form.phone.replace(/\D/g, '').length < 10) {
        setError('Enter a valid 10-digit mobile number');
        return;
      }
      setStep('email');
      return;
    }

    if (step === 'email') {
      if (!form.email.includes('@') || !form.email.includes('.')) {
        setError('Please enter a valid email address');
        return;
      }
      setStep('college');
      return;
    }

    if (step === 'college') {
      if (!form.college.trim()) {
        setError('Please enter your college / university / company');
        return;
      }
      setStep('budget');
      return;
    }

    if (step === 'budget') {
      if (!form.budget) {
        setError('Please select your monthly budget');
        return;
      }
      submitToLeadSquared();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleContinue();
    }
  };

  const stepQuestion = () => {
    if (step === 'name') return 'What is your full name?';
    if (step === 'phone') return 'What is your phone number?';
    if (step === 'email') return 'What is your email address?';
    if (step === 'college') return 'Your College / University / Company?';
    if (step === 'budget') return 'What is your monthly budget?';
    return '';
  };

  const stepSubLabel = () => {
    if (step === 'name') return 'Please enter your full name';
    if (step === 'phone') return 'Enter your 10-digit mobile number';
    if (step === 'email') return 'Please enter your email address';
    if (step === 'college') return 'Enter your college or university';
    if (step === 'budget') return 'Please choose an option';
    return '';
  };

  const buttonLabel = () => {
    if (step === 'budget') return isSubmitting ? 'Submitting...' : 'Submit';
    return 'Continue';
  };

  return (
    <section id="book" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 xl:grid-cols-[1.08fr_0.62fr_1fr] xl:gap-12">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="/save-spot.jpg"
              alt="Students enjoying a game night"
              className="h-[420px] w-full object-cover object-center md:h-[540px] xl:h-[665px]"
            />
          </div>

          <div className="flex h-full flex-col items-center justify-center text-center xl:items-center xl:justify-center xl:pt-10 xl:text-center">
            <h2 className=" text-[3rem] uppercase leading-[0.9] !tracking-[5px] text-black sm:text-[4.6rem] lg:text-[6rem]">
              <span className="block">Save</span>
              <span className="block">Your</span>
              <span className="block">Spot</span>
            </h2>
            <p className="mt-8 max-w-[350px] text-[18px] leading-[1.42] text-[#1f1f1f] sm:text-[20px] xl:text-[21px]">
              A lifestyle filled with networking, workshops, seminars, and housing made convenient.
            </p>

            <div className="mt-10 xl:mt-auto xl:pt-16">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="inline-flex min-w-[170px] items-center justify-center rounded-[12px] bg-[#ff5a24] px-9 py-4 text-[18px] font-medium text-white shadow-[8px_8px_0_rgba(0,0,0,0.12)] transition-colors hover:bg-[#f24b14]"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="px-6 py-8  sm:px-10 xl:min-h-[665px] xl:px-12 xl:py-10">
            <div className="mx-auto max-w-[470px]">
              <div className="border-t border-[#ececec] pt-5 text-center">
                <p className="text-[38px] font-semibold leading-none tracking-[-0.05em] text-[#2a3138] sm:text-[42px]">
                  Get Free Consultation
                </p>

                <div className="mx-auto mt-10 flex w-full max-w-[240px] items-center gap-2">
                  {STEPS.map((currentStep, index) => {
                    const done = step === 'done' || index < currentIndex;
                    const active = index === currentIndex;

                    return (
                      <span
                        key={currentStep}
                        className="h-[4px] flex-1 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: done || active ? '#ff7a53' : '#e6e6e6',
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {step !== 'done' ? (
                <div className="mt-14">
                  <p className="text-center text-[24px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#232323] sm:text-[28px]">
                    {stepQuestion()}
                  </p>

                  <p className="mt-10 text-center text-[17px] text-[#242424] sm:text-[18px]">{stepSubLabel()}</p>

                  <div className="mt-7 space-y-4">
                    {step === 'name' && (
                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) => update('name', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. Rahul Sharma"
                        autoFocus
                        className="flex h-[56px] w-full items-center justify-center rounded-[6px] border border-[#e6e6e6] bg-white px-5 text-center text-[16px] font-semibold text-[#232323] placeholder-[#b8b8b8] outline-none transition-colors focus:border-[#ff7a53]"
                      />
                    )}

                    {step === 'phone' && (
                      <div className="flex h-[56px] overflow-hidden rounded-[6px] border border-[#e6e6e6] bg-white transition-colors focus-within:border-[#ff7a53]">
                        <span className="flex shrink-0 items-center border-r border-[#e6e6e6] bg-[#fbfbfb] px-4 text-[15px] font-semibold text-[#5a5550]">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          value={form.phone}
                          onChange={(event) => update('phone', event.target.value.replace(/\D/g, ''))}
                          onKeyDown={handleKeyDown}
                          placeholder="10-digit mobile number"
                          autoFocus
                          className="flex-1 bg-transparent px-3 text-center text-[16px] font-semibold text-[#232323] placeholder-[#b8b8b8] outline-none"
                        />
                      </div>
                    )}

                    {step === 'email' && (
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => update('email', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="you@example.com"
                        autoFocus
                        className="flex h-[56px] w-full items-center justify-center rounded-[6px] border border-[#e6e6e6] bg-white px-5 text-center text-[16px] font-semibold text-[#232323] placeholder-[#b8b8b8] outline-none transition-colors focus:border-[#ff7a53]"
                      />
                    )}

                    {step === 'college' && (
                      <input
                        type="text"
                        value={form.college}
                        onChange={(event) => update('college', event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your college or university"
                        autoFocus
                        className="flex h-[56px] w-full items-center justify-center rounded-[6px] border border-[#e6e6e6] bg-white px-5 text-center text-[16px] font-semibold text-[#232323] placeholder-[#b8b8b8] outline-none transition-colors focus:border-[#ff7a53]"
                      />
                    )}

                    {step === 'budget' && (
                      <div>
                        {BUDGET_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => update('budget', option.value)}
                            className={`mb-4 flex h-[56px] w-full items-center justify-center rounded-[6px] border text-[16px] font-semibold transition-colors ${
                              form.budget === option.value
                                ? 'border-[#ff7a53] bg-[#fff5f1] text-[#232323]'
                                : 'border-[#e6e6e6] bg-white text-[#232323] hover:border-[#ffbea8]'
                            }`}
                          >
                            Rs. {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {error && <p className="mt-3 text-center text-[12px] text-red-500">{error}</p>}

                  <p className="mx-auto mt-12 max-w-[360px] text-center text-[17px] leading-[1.45] text-[#2f2f2f]">
                    No matter how long you&apos;re staying, you&apos;ll feel right at home.
                  </p>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={isSubmitting}
                    className="mt-10 flex h-[58px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#ff8b63] text-[16px] font-semibold text-white transition-colors hover:bg-[#ff7a53] disabled:opacity-60"
                  >
                    {buttonLabel()}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>

                  <p className="mt-4 text-center text-[11px] text-[#bfb9b1]">
                    Step {currentIndex + 1} of {STEPS.length}
                  </p>
                </div>
              ) : (
                <div className="mt-16 text-center">
                  <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ddf9e4]">
                    <Check className="h-9 w-9 text-[#18a957]" strokeWidth={2.4} />
                  </div>
                  <p className="mt-7 text-[1.85rem] font-semibold leading-none text-[#182033]">
                    Enquiry submitted
                  </p>
                  <p className="mx-auto mt-4 max-w-[320px] text-[1rem] leading-relaxed text-[#767c88]">
                    Our team will reach out shortly
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveYourSpot;
