
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(105, 75, 241, 0.15) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://readdy.ai/api/search-image?query=Modern%20African%20digital%20technology%20landscape%20with%20mobile%20phones%2C%20social%20media%20connections%2C%20financial%20technology%20elements%2C%20vibrant%20purple%20and%20blue%20gradient%20background%2C%20clean%20minimalist%20design%2C%20professional%20photography%20style%2C%20high-tech%20atmosphere%2C%20connectivity%20symbols%2C%20pan-African%20unity%20theme&width=1920&height=1080&seq=hero-main&orientation=landscape')`
        }}
      >
        <div className="px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Connect Africa,<br />
            <span className="text-[#fff] drop-shadow-lg">Pay Seamlessly</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
            The all-in-one social platform powered by PAPPS for cross-border payments, messaging, stories, and digital utilities across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#694bf1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all whitespace-nowrap cursor-pointer backdrop-blur-sm shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Everything You Need in <span className="text-[#694bf1]">One App</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From instant messaging to cross-border payments, Africhat brings together all the tools you need to connect and transact across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-message-3-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Instant Messaging</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with friends, family, and businesses across Africa with our lightning-fast messaging platform featuring voice, video, and group chats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-bank-card-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">PAPPS Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Send and receive money across African borders instantly using the Pan African Payment and Settlement System for secure, fast transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-camera-3-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Social Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your moments, experiences, and culture with our engaging story features that celebrate the diversity and beauty of Africa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Digital Utilities</h3>
              <p className="text-gray-600 leading-relaxed">
                Pay bills, buy airtime, book services, and access essential utilities all from within the app for maximum convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Digital Wellbeing</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your digital habits, set healthy boundaries, and maintain balance with our comprehensive wellbeing tools and insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data and transactions are protected with enterprise-grade encryption and security measures trusted by financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              How Africhat <span className="text-[#694bf1]">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with Africa's most comprehensive social and payment platform is simple and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#694bf1] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Download & Register</h3>
              <p className="text-gray-600">
                Download the app and create your account with just your phone number and basic information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#694bf1] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Verify & Setup</h3>
              <p className="text-gray-600">
                Complete identity verification and link your payment methods for secure transactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#694bf1] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Connect & Explore</h3>
              <p className="text-gray-600">
                Add friends, join communities, and discover all the features Africhat has to offer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#694bf1] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Start Transacting</h3>
              <p className="text-gray-600">
                Send money, pay bills, and access services across Africa with just a few taps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAPPS Section */}
      <section className="py-20 bg-black text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powered by <span className="text-[#694bf1]">PAPPS</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The Pan African Payment and Settlement System enables instant, secure, and cost-effective cross-border payments across participating African countries, making Africhat the future of continental connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Instant Settlements</h4>
                    <p className="text-gray-400">Real-time cross-border transactions across Africa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Low Transaction Costs</h4>
                    <p className="text-gray-400">Minimal fees for maximum value transfer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Multiple Currencies</h4>
                    <p className="text-gray-400">Support for major African currencies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=African%20financial%20technology%20mobile%20payment%20system%20interface%2C%20modern%20smartphone%20displaying%20payment%20app%2C%20PAPPS%20system%20visualization%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20fintech%20photography%2C%20cross-border%20payment%20illustration%2C%20African%20continent%20map%20background%2C%20digital%20currency%20symbols&width=600&height=600&seq=papps-feature&orientation=squarish"
                alt="PAPPS Payment System"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What Our Users <span className="text-[#694bf1]">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join millions of satisfied users across Africa who trust Africhat for their daily communication and payment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20woman%20smiling%2C%20business%20portrait%2C%20confident%20entrepreneur%2C%20modern%20professional%20headshot%2C%20happy%20customer%20testimonial%20photo%2C%20high-quality%20photography&width=80&height=80&seq=testimonial-1&orientation=squarish"
                  alt="User testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-black">Amina Hassan</h4>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Africhat has completely transformed how I send money to my family in Ghana. The PAPPS integration makes it so fast and affordable compared to traditional methods."
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20man%20smiling%2C%20business%20portrait%2C%20confident%20professional%2C%20modern%20executive%20headshot%2C%20satisfied%20customer%20testimonial%20photo%2C%20high-quality%20photography&width=80&height=80&seq=testimonial-2&orientation=squarish"
                  alt="User testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-black">Kwame Osei</h4>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "As a small business owner, Africhat's business features have helped me connect with customers across West Africa and process payments seamlessly."
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20woman%20entrepreneur%2C%20confident%20business%20leader%2C%20modern%20corporate%20headshot%2C%20successful%20professional%20portrait%2C%20happy%20customer%20testimonial%20photo%2C%20high-quality%20photography&width=80&height=80&seq=testimonial-3&orientation=squarish"
                  alt="User testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-black">Fatou Diop</h4>
                  <p className="text-gray-600">Dakar, Senegal</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "The social features are amazing! I love sharing stories and connecting with friends across Africa. It's like having WhatsApp and Venmo in one app."
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Countries */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Available Across <span className="text-[#694bf1]">Africa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Africhat is currently available in 15 African countries with more being added regularly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇳🇬
              </div>
              <p className="font-semibold text-black">Nigeria</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇰🇪
              </div>
              <p className="font-semibold text-black">Kenya</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇬🇭
              </div>
              <p className="font-semibold text-black">Ghana</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇿🇦
              </div>
              <p className="font-semibold text-black">South Africa</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇸🇳
              </div>
              <p className="font-semibold text-black">Senegal</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇺🇬
              </div>
              <p className="font-semibold text-black">Uganda</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇹🇿
              </div>
              <p className="font-semibold text-black">Tanzania</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇷🇼
              </div>
              <p className="font-semibold text-black">Rwanda</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇨🇮
              </div>
              <p className="font-semibold text-black">Côte d'Ivoire</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                🇿🇲
              </div>
              <p className="font-semibold text-black">Zambia</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              More countries coming soon! Stay tuned for updates.
            </p>
            <button className="bg-[#694bf1] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
              Request Your Country
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#694bf1] text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connecting Africa, One User at a Time
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2.5M+</div>
              <div className="text-lg text-purple-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-lg text-purple-100">Countries Connected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">₦250B+</div>
              <div className="text-lg text-purple-100">Transactions Processed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg text-purple-100">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Your Security is <span className="text-[#694bf1]">Our Priority</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We use the same security standards as major banks to protect your data and money, ensuring every transaction is safe and secure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-shield-check-fill text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">End-to-End Encryption</h4>
                    <p className="text-gray-600">All messages and transactions are encrypted using military-grade security protocols.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-fingerprint-fill text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">Biometric Authentication</h4>
                    <p className="text-gray-600">Secure your account with fingerprint, face recognition, or PIN protection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#694bf1]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-eye-off-fill text-[#694bf1] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">Privacy First</h4>
                    <p className="text-gray-600">We never share your personal data with third parties without your consent.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Mobile%20security%20and%20privacy%20illustration%2C%20smartphone%20with%20shield%20protection%2C%20cybersecurity%20visualization%2C%20digital%20safety%20concept%2C%20purple%20and%20black%20color%20scheme%2C%20modern%20tech%20security%20graphics%2C%20encrypted%20data%20protection%2C%20professional%20security%20imagery&width=600&height=500&seq=security-visual&orientation=landscape"
                alt="Security Features"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Download Africhat today and experience the most advanced social and payment platform designed specifically for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#694bf1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-smartphone-line mr-2"></i>
              Download for iOS
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-google-play-line mr-2"></i>
              Download for Android
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
