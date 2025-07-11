
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(105, 75, 241, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://readdy.ai/api/search-image?query=Modern%20African%20mobile%20services%20illustration%2C%20smartphone%20with%20various%20app%20interfaces%2C%20financial%20services%2C%20messaging%2C%20social%20media%20features%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20tech%20photography%2C%20digital%20services%20visualization%2C%20comprehensive%20platform%20display&width=1920&height=800&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Complete Digital <span className="text-[#694bf1] drop-shadow-lg">Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
            From messaging to payments, utilities to wellness - everything you need for modern African life, all in one powerful platform.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Core Platform Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services designed specifically for the African market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-message-3-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Messaging</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with anyone across Africa through our feature-rich messaging platform with voice, video, group chats, and file sharing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Voice & video calls</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Group chats up to 500 members</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">File sharing & media transfer</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-bank-card-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">PAPPS Payment System</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send and receive money instantly across African borders using the official Pan African Payment and Settlement System.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Real-time cross-border transfers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Support for 15+ African currencies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Low transaction fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Bank-grade security</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-camera-3-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Social Stories & Feed</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Share your moments, discover content, and connect with your community through our engaging social features.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">24-hour stories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Live streaming</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Community groups</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Content discovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Digital Wellbeing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Monitor and manage your digital habits with comprehensive tools designed to promote healthy technology use.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Screen time tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">App usage insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Digital detox modes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line text-[#694bf1]"></i>
                  <span className="text-gray-600">Wellness reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Utilities */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Digital Utilities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for daily life, accessible directly from your Africhat app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Airtime & Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Top up your phone or buy data bundles for any network across Africa with instant delivery and competitive rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-flashlight-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Utility Bills</h3>
              <p className="text-gray-600 leading-relaxed">
                Pay your electricity, water, internet, and other utility bills directly through the app with automated reminders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-tv-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Entertainment</h3>
              <p className="text-gray-600 leading-relaxed">
                Subscribe to streaming services, buy movie tickets, and access premium content with seamless payment integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-bus-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Transportation</h3>
              <p className="text-gray-600 leading-relaxed">
                Book rides, pay for public transport, and access mobility services across major African cities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shopping-cart-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">E-commerce</h3>
              <p className="text-gray-600 leading-relaxed">
                Shop from local and international merchants with integrated payment solutions and delivery tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-government-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Government Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Access digital government services, pay taxes, and complete official transactions where available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-black text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful tools for businesses to connect with customers, process payments, and grow across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Africhat for Business</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive suite of tools designed for African enterprises.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-customer-service-2-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Business Messaging</h4>
                    <p className="text-gray-400">Connect with customers through verified business accounts with advanced messaging features.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-wallet-3-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Payment Processing</h4>
                    <p className="text-gray-400">Accept payments from customers across Africa with PAPPS integration and competitive rates.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-bar-chart-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Analytics & Insights</h4>
                    <p className="text-gray-400">Understand your customers better with detailed analytics and business intelligence tools.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#694bf1] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-megaphone-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Marketing Tools</h4>
                    <p className="text-gray-400">Reach your target audience with integrated advertising and promotional features.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=African%20business%20professionals%20using%20mobile%20technology%20for%20payments%20and%20communication%2C%20modern%20office%20environment%2C%20team%20collaboration%20with%20smartphones%20and%20tablets%2C%20business%20growth%20and%20success%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20corporate%20photography&width=600&height=600&seq=business-solutions&orientation=squarish"
                alt="Business Solutions"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API & Developer Tools */}
      <section className="py-20 bg-[#694bf1] text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Developer Platform
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Build on top of Africhat with our comprehensive APIs and developer tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Messaging API</h3>
              <p className="text-purple-100 text-sm">
                Integrate messaging capabilities into your applications
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-secure-payment-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Payment API</h3>
              <p className="text-purple-100 text-sm">
                Process PAPPS payments through your platform
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-settings-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">User API</h3>
              <p className="text-purple-100 text-sm">
                Manage user accounts and authentication
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-webhook-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Webhooks</h3>
              <p className="text-purple-100 text-sm">
                Real-time notifications for your applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join millions of Africans already using our platform for their daily communication, payment, and digital service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#694bf1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Download Africhat
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all whitespace-nowrap cursor-pointer">
              Business Solutions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
