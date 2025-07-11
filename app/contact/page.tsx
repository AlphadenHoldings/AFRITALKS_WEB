
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'contact-form',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(105, 75, 241, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://readdy.ai/api/search-image?query=Modern%20African%20business%20communication%20center%2C%20customer%20service%20representatives%20with%20headsets%2C%20professional%20office%20environment%2C%20diverse%20team%20helping%20customers%2C%20technology%20and%20communication%20theme%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20corporate%20photography&width=1920&height=800&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Get in <span className="text-[#694bf1] drop-shadow-lg">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
            We're here to help you succeed with Africhat. Reach out to our team for support, partnerships, or any questions about our platform.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#694bf1] focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#694bf1] focus:border-transparent text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#694bf1] focus:border-transparent text-sm"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#694bf1] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="PAPPS Integration">PAPPS Integration</option>
                    <option value="Developer API">Developer API</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="Investment Opportunity">Investment Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#694bf1] focus:border-transparent resize-none text-sm"
                    placeholder="Tell us more about your inquiry... (max 500 characters)"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-[#694bf1] text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're a potential user, business partner, or developer, we'd love to hear from you. Here's how you can reach us:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-map-pin-line text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      Victoria Island, Lagos, Nigeria<br />
                      Plot 1234, Ahmadu Bello Way<br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-phone-line text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Phone</h3>
                    <p className="text-gray-600">
                      General: +234 1 234 5678<br />
                      Business: +234 1 234 5679<br />
                      Support: +234 1 234 5680
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-mail-line text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600">
                      General: hello@africhat.com<br />
                      Business: business@africhat.com<br />
                      Support: support@africhat.com<br />
                      Press: press@africhat.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-time-line text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM (WAT)<br />
                      Saturday: 9:00 AM - 2:00 PM (WAT)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <i className="ri-twitter-x-line text-white text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#694bf1] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <i className="ri-facebook-fill text-white text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#694bf1] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-white text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#694bf1] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Offices Across Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have presence in major African cities to better serve our users and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lagos, Nigeria</h3>
              <p className="text-gray-600 mb-4">
                Victoria Island<br />
                Plot 1234, Ahmadu Bello Way<br />
                Lagos State, Nigeria
              </p>
              <p className="text-[#694bf1] font-semibold">Headquarters</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Nairobi, Kenya</h3>
              <p className="text-gray-600 mb-4">
                Westlands<br />
                ABC Place, Waiyaki Way<br />
                Nairobi, Kenya
              </p>
              <p className="text-[#694bf1] font-semibold">East Africa Hub</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Cape Town, South Africa</h3>
              <p className="text-gray-600 mb-4">
                Waterfront<br />
                Clock Tower Centre<br />
                Cape Town, South Africa
              </p>
              <p className="text-[#694bf1] font-semibold">Southern Africa Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Visit our headquarters in Lagos, Nigeria
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7837045815537!2d3.4205552!3d6.4281407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4bfc7b0f37f%3A0x26b8e95c1c2b7ad8!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
