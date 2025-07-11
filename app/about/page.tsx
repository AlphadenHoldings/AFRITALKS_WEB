
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(105, 75, 241, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://readdy.ai/api/search-image?query=African%20technology%20team%20working%20together%20in%20modern%20office%20space%2C%20diverse%20group%20of%20professionals%2C%20collaborative%20workspace%2C%20innovation%20and%20creativity%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20corporate%20photography%2C%20unity%20and%20teamwork%20concept%2C%20modern%20African%20business%20environment&width=1920&height=800&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Building Africa's <span className="text-[#694bf1] drop-shadow-lg">Digital Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
            We're on a mission to connect every African through technology, payments, and social innovation powered by the Pan African Payment and Settlement System.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To create the most comprehensive social and financial platform that unites Africa, enabling seamless communication, payments, and digital services across all 54 countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should break down barriers, not create them. That's why we've built Africhat to be more than just an app – it's a movement towards a more connected, prosperous Africa.
              </p>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=African%20continent%20digital%20connectivity%20visualization%2C%20network%20connections%20between%20countries%2C%20modern%20technology%20illustration%2C%20purple%20and%20black%20color%20scheme%2C%20professional%20graphic%20design%2C%20unity%20and%20connection%20theme%2C%20high-tech%20visualization%20of%20Pan-African%20integration&width=600&height=500&seq=mission-visual&orientation=landscape"
                alt="Our Mission"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-hearts-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Unity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in bringing people together across borders, cultures, and languages to create a stronger, more connected Africa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push the boundaries of what's possible, creating cutting-edge solutions for Africa's unique challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Security and reliability are at the core of everything we build, ensuring your data and money are always protected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Inclusion</h3>
              <p className="text-gray-600 leading-relaxed">
                We design for everyone, ensuring our platform is accessible and valuable to all Africans, regardless of their background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to building solutions that contribute to Africa's long-term economic and social development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#694bf1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-speed-fill text-[#694bf1] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest quality in everything we do, from user experience to customer support and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leaders from across Africa and beyond, united by a shared passion for transforming the continent through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20business%20executive%20portrait%2C%20confident%20CEO%20or%20founder%2C%20modern%20corporate%20headshot%2C%20professional%20lighting%2C%20business%20attire%2C%20leadership%20presence%2C%20high-end%20executive%20photography%2C%20modern%20office%20background&width=400&height=400&seq=ceo-portrait&orientation=squarish"
                  alt="CEO Portrait"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Amara Okafor</h3>
              <p className="text-[#694bf1] text-lg mb-4">Chief Executive Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Former fintech executive with 15+ years experience in African markets, passionate about financial inclusion and digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20technology%20executive%20portrait%2C%20confident%20CTO%20or%20technical%20leader%2C%20modern%20corporate%20headshot%2C%20professional%20lighting%2C%20business%20attire%2C%20innovation%20leadership%2C%20high-end%20executive%20photography%2C%20tech%20startup%20environment&width=400&height=400&seq=cto-portrait&orientation=squarish"
                  alt="CTO Portrait"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Kwame Asante</h3>
              <p className="text-[#694bf1] text-lg mb-4">Chief Technology Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Serial entrepreneur and software architect who previously built payment systems for major African banks and telecommunications companies.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20business%20executive%20portrait%2C%20confident%20CPO%20or%20product%20leader%2C%20modern%20corporate%20headshot%2C%20professional%20lighting%2C%20business%20attire%2C%20product%20innovation%20leadership%2C%20high-end%20executive%20photography%2C%20creative%20workspace%20background&width=400&height=400&seq=cpo-portrait&orientation=squarish"
                  alt="CPO Portrait"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fatima Al-Rashid</h3>
              <p className="text-[#694bf1] text-lg mb-4">Chief Product Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Product visionary with deep expertise in social platforms and user experience design, formerly at leading global tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAPPS Partnership */}
      <section className="py-20 bg-[#694bf1] text-white">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Proud PAPPS Partner
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            As an official partner of the Pan African Payment and Settlement System, we're at the forefront of Africa's financial integration, enabling instant cross-border transactions across participating countries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-exchange-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Settlement</h3>
              <p className="text-purple-100">
                Instant money transfers across African borders with real-time settlement and confirmation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Currency Support</h3>
              <p className="text-purple-100">
                Support for major African currencies with competitive exchange rates and transparent pricing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-secure-payment-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Bank-Grade Security</h3>
              <p className="text-purple-100">
                Enterprise-level security protocols ensure every transaction is protected and verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you're a user, partner, or investor, we'd love to hear from you and explore how we can build Africa's digital future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#694bf1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Contact Us
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all whitespace-nowrap cursor-pointer">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
