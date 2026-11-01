import React, { useState } from 'react';
import { MapPin, Instagram, Mail, Check, AlertCircle, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', category: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-[#FFF9F3] py-12 sm:py-20 text-[#4A4A4A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
            Get in Touch
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold font-playfair text-[#1A0F07]">
            Contact Raadnyi Clothing
          </h1>
          <p className="font-lato text-sm sm:text-base text-gray-600 mt-4 font-light leading-relaxed">
            Have questions about styling, sizing, or our Western Wear collections? Reach out or connect via our official Instagram.
          </p>
          <div className="w-16 h-0.5 bg-[#7A0B2E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: Brand Contact Cards (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4E6] text-[#7A0B2E] flex items-center justify-center mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-1">
                Brand Location
              </h3>
              <p className="text-sm font-semibold text-[#7A0B2E] font-montserrat mb-1">
                Pune, Maharashtra, India
              </p>
              <p className="text-xs text-gray-500 font-lato leading-relaxed">
                Operating in Pune, crafting Western Wear for contemporary lifestyles.
              </p>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4E6] text-[#7A0B2E] flex items-center justify-center mb-4">
                <Instagram size={20} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-1">
                Official Instagram
              </h3>
              <a
                href="https://www.instagram.com/raadnyi_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#7A0B2E] font-montserrat hover:underline block mb-1"
              >
                @raadnyi_clothing
              </a>
              <p className="text-xs text-gray-500 font-lato leading-relaxed">
                Send a direct message on Instagram for styling advice and lookbook drops.
              </p>
            </div>

            {/* Verification Notice Card */}
            <div className="bg-[#FFF9F3] rounded-3xl p-6 border border-[#7A0B2E]/15 text-xs text-gray-600 font-lato space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-[#7A0B2E] font-montserrat">
                <AlertCircle size={15} /> Verified Contact Notice
              </div>
              <p className="leading-relaxed">
                Direct customer support telephone numbers and studio visiting hours will be updated here once officially confirmed by Raadnyi Clothing.
              </p>
            </div>
          </div>

          {/* Right Column: Demo Inquiry Form (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#7A0B2E]/10">
            <h2 className="font-playfair text-2xl font-bold text-[#1A0F07] mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs text-gray-500 font-lato mb-6">
              Complete this form to submit a demo message or customer question.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <Check size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-emerald-950 mb-1">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs text-emerald-800 font-lato">
                  Your demonstration message has been received. This frontend form simulates customer inquiry submissions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Kulkarni"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Category of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-montserrat text-[#4A4A4A] bg-white"
                  >
                    <option value="General Inquiry">General Brand Inquiry</option>
                    <option value="Party Wear">Party Wear & Evening Gowns</option>
                    <option value="Casual Wear">Casual Co-ords & Denim</option>
                    <option value="Tops">Tops & Blouses</option>
                    <option value="Sizing">Sizing & Fit Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the styles or occasion you're shopping for..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-xs font-semibold uppercase tracking-wider font-montserrat transition-all shadow-md"
                >
                  Submit Demo Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

