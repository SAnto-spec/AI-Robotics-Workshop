import React, { useState } from 'react';
import { User, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

type SubmitStatus = 'success' | 'error' | null;

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export default function RegisterForm(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [apiMessage, setApiMessage] = useState<string>('');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Dynamically clear errors
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Client-Side Validation
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Parent Full Name is required';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else {
      // Strips non-digit chars to validate length
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 15) {
        tempErrors.phone = 'Phone must be between 7 and 15 digits';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitStatus(null);
    setApiMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // API Target
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    const apiUrl = `${baseUrl.replace(/\/$/, '')}/api/enquiry`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setApiMessage(data.message || 'Registration request sent successfully!');
        setFormData({ name: '', email: '', phone: '' }); // Reset fields
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors(data.errors);
          setApiMessage('Please fix the validation errors below.');
        } else {
          setApiMessage(data.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setApiMessage('Unable to connect to the backend server. Please make sure the API is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register-section" className="py-24 relative overflow-hidden bg-white">
      {/* Playful background blobs */}
      <div className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-orange-100/40 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-purple-100/30 blur-[90px] pointer-events-none"></div>

      <div className="mx-auto max-w-xl px-4 sm:px-6">
        
        {/* Bento Form Card */}
        <div className="bento-card bg-white/70 backdrop-blur-xl border-3 border-slate-800 p-8 sm:p-12 shadow-[6px_6px_0px_0px_#1e293b] relative z-10">
          
          <div className="text-center mb-8 space-y-3">
            <span className="text-3xl">🎒</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 font-heading">
              Secure Your Spot
            </h2>
            <p className="text-slate-500 text-sm font-bold">
              Fill in your details below. Our admissions advisor will contact you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-slate-500">
                Parent's Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Parent's Name"
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border-3 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                    errors.name
                      ? 'border-red-400/50 focus:ring-2 focus:ring-red-500/10'
                      : 'border-slate-800 focus:ring-2 focus:ring-orange-500/10'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1 font-bold">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-slate-500">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="parent@example.com"
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border-3 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                    errors.email
                      ? 'border-red-400/50 focus:ring-2 focus:ring-red-500/10'
                      : 'border-slate-800 focus:ring-2 focus:ring-orange-500/10'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1 font-bold">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-black uppercase tracking-wider text-slate-500">
                WhatsApp / Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Mobile Number"
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border-3 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                    errors.phone
                      ? 'border-red-400/50 focus:ring-2 focus:ring-red-500/10'
                      : 'border-slate-800 focus:ring-2 focus:ring-orange-500/10'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1 font-bold">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Submit Banner Message */}
            {submitStatus && (
              <div
                className={`p-4 rounded-2xl flex gap-3 text-sm border-3 border-slate-800 ${
                  submitStatus === 'success'
                    ? 'bg-emerald-100 text-emerald-800 shadow-[3px_3px_0px_0px_#1e293b]'
                    : 'bg-red-100 text-red-800 shadow-[3px_3px_0px_0px_#1e293b]'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                )}
                <span className="leading-snug font-bold">{apiMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bubbly-btn w-full flex items-center justify-center gap-2 py-4 bg-orange-400 text-white font-black rounded-2xl cursor-pointer text-base uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                  <span>Submitting Details...</span>
                </>
              ) : (
                <span>Register for Workshop</span>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
