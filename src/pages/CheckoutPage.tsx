import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CheckCircle2, ShoppingBag, ArrowLeft, AlertCircle } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoOrderRef, setDemoOrderRef] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Please provide a valid 10-digit phone number';
    if (!formData.address.trim()) errs.address = 'Please enter your delivery street address';
    if (!formData.city.trim()) errs.city = 'Please enter your city';
    if (!formData.pincode.trim() || formData.pincode.length < 6)
      errs.pincode = 'Please enter a valid 6-digit PIN code';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `RAADNYI-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
    setDemoOrderRef(ref);
    setIsSubmitted(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#7A0B2E]/10 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={44} />
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A0B2E] font-montserrat">
            Demo Showcase Confirmation
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A0F07] mt-2 mb-3">
            Demo Order Placed!
          </h1>

          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFF9F3] border border-[#7A0B2E]/20 text-xs font-mono font-semibold text-[#7A0B2E] mb-6">
            Ref: {demoOrderRef}
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-left text-xs text-amber-900 font-lato mb-8 space-y-2">
            <p className="font-semibold font-montserrat text-amber-950 flex items-center gap-1.5">
              <ShieldCheck size={16} /> Frontend Demonstration Notice:
            </p>
            <p>
              <strong>Demo order completed successfully.</strong> No real payment was processed, no financial credentials were collected, and no order was sent to the store.
            </p>
            <p className="text-[11px] text-amber-800">
              Demo recipient: {formData.fullName} ({formData.city}, {formData.state} - {formData.pincode})
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/shop"
              className="px-8 py-3.5 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
            >
              Continue Exploring Shop
            </Link>

            <Link
              to="/"
              className="px-8 py-3.5 rounded-xl border border-gray-200 text-[#4A4A4A] text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F7EDE6] text-[#7A0B2E] flex items-center justify-center mx-auto mb-4">
          <ShoppingBag size={28} />
        </div>
        <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A0F07] mb-2">
          Your Bag is Empty
        </h1>
        <p className="text-sm text-gray-500 font-lato mb-6">
          Add items to your bag before proceeding to checkout.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
        >
          Browse Western Wear
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFF9F3] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#7A0B2E] font-montserrat mb-8"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
            Raadnyi Clothing
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-playfair text-[#1A0F07] mt-1">
            Checkout
          </h1>
          <p className="text-xs text-gray-500 font-lato mt-1">
            Enter your delivery details to complete your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Demo Shipping Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
            <h2 className="font-playfair text-xl font-bold text-[#1A0F07] mb-6 pb-3 border-b border-gray-100">
              Shipping & Contact Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ananya Deshmukh"
                  className={`w-full px-4 py-3 text-sm rounded-xl border outline-none font-lato ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#7A0B2E]'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 text-sm rounded-xl border outline-none font-lato ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#7A0B2E]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    Phone Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className={`w-full px-4 py-3 text-sm rounded-xl border outline-none font-lato ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#7A0B2E]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Flat/House No., Building, Street Name"
                  className={`w-full px-4 py-3 text-sm rounded-xl border outline-none font-lato ${
                    errors.address ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#7A0B2E]'
                  }`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className={`w-full px-4 py-3 text-sm rounded-xl border outline-none font-lato ${
                      errors.pincode ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#7A0B2E]'
                    }`}
                  />
                  {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A0F07] font-montserrat mb-1">
                  Order Note / Special Delivery Request (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Ring doorbell, leave at front desk"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#7A0B2E] outline-none font-lato"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-sm font-semibold uppercase tracking-wider font-montserrat transition-all shadow-lg shadow-[#7A0B2E]/20"
                >
                  Confirm Order (₹{subtotal.toLocaleString('en-IN')})
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10 h-fit space-y-6">
            <h2 className="font-playfair text-xl font-bold text-[#1A0F07] pb-3 border-b border-gray-100 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-xs font-montserrat font-normal text-gray-500">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </h2>

            {/* Itemized list */}
            <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="py-3 flex items-center gap-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-16 object-cover object-top rounded-lg bg-[#F7EDE6] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#1A0F07] line-clamp-1 font-montserrat">
                      {item.product.name}
                    </p>
                    <p className="text-[11px] text-gray-500 font-lato">
                      Size: {item.selectedSize} • Qty: {item.quantity}
                    </p>
                    <p className="text-xs font-bold text-[#7A0B2E] font-montserrat mt-0.5">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 pt-3 border-t border-gray-100 text-xs font-montserrat">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1A0F07]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Standard Delivery</span>
                <span className="text-emerald-700 font-semibold">FREE</span>
              </div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between text-base font-bold text-[#1A0F07]">
                <span>Total Amount</span>
                <span className="text-[#7A0B2E]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Security Callout */}
            <div className="p-4 rounded-xl bg-[#FFF9F3] border border-[#7A0B2E]/15 flex items-start gap-3">
              <ShieldCheck size={20} className="text-[#7A0B2E] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-gray-600 font-lato leading-relaxed">
                <strong className="text-[#1A0F07] block font-montserrat mb-0.5">
                  Safe Demonstration Environment
                </strong>
                No real card information or bank OTPs are ever requested. This checkout simulates the customer order journey for Raadnyi Clothing Pune.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

