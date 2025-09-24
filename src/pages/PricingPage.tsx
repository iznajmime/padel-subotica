import React, { useState } from 'react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Morning Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
              Jutarnji Termini
            </h3>
            <p className="text-gray-500 text-lg font-montserrat">9:00 - 16:00</p>
          </div>

          <ul className="space-y-5 mb-10">
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">1 sat - <span className="font-bold text-green-600">1500 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">1.5 sata - <span className="font-bold text-green-600">2200 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">2 sata - <span className="font-bold text-green-600">3000 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Povoljnije cene</span>
            </li>
          </ul>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg font-montserrat">
            Rezerviši Sada
          </button>
        </div>

        {/* Afternoon Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
              Poslepodnevni Termini
            </h3>
            <p className="text-gray-500 text-lg font-montserrat">16:00 - 23:00</p>
          </div>

          <ul className="space-y-5 mb-10">
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">1 sat - <span className="font-bold text-green-600">2000 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">1.5 sata - <span className="font-bold text-green-600">3000 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">2 sata - <span className="font-bold text-green-600">4000 RSD</span></span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Prime vreme</span>
            </li>
          </ul>

          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg font-montserrat">
            Rezerviši Sada
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;