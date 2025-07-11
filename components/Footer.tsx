
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#694bf1] to-purple-600 rounded-xl flex items-center justify-center">
                <i className="ri-chat-smile-3-fill text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
                africhat
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The ultimate social media platform for Africa, powered by PAPPS for seamless cross-border payments and connections across the continent.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#694bf1] transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#694bf1] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#694bf1] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#694bf1] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Messaging</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Payments</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Stories</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Utilities</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Africhat. All rights reserved. Powered by PAPPS.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
