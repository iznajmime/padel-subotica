import React, { useState } from 'react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
          IZABERI TERMIN KOJI TI ODGOVARA
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 leading-tight mb-8">
          Pronađi Pravi Termin<br />
          za Tvoj Padel
        </h1>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
            Jutarnji
          </span>
          <div 
            className="relative w-16 h-8 bg-blue-500 rounded-full cursor-pointer transition-colors"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div 
              className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                isYearly ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </div>
          <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
            Poslepodnevni
          </span>
        </div>
        
        {/* Save Badge */}
        <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
          UŠTEDI DO 20%
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {/* Morning Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Jutarnji</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">1500</span>
              <span className="text-gray-500 text-lg">/sat</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Jutarnji Termini<br />
            9:00 - 16:00
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">1 sat - 1500 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">1.5 sata - 2200 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">2 sata - 3000 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Povoljnije cene</span>
            </li>
          </ul>

          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
            Rezerviši Sada
          </button>
        </div>

        {/* Afternoon Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            </div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Poslepodnevni</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">2000</span>
              <span className="text-gray-500 text-lg">/sat</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Poslepodnevni Termini<br />
            16:00 - 23:00
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">1 sat - 2000 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">1.5 sata - 3000 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">2 sata - 4000 RSD</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Prime vreme</span>
            </li>
          </ul>

          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
            Rezerviši Sada
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          * Molimo pročitajte <a href="#" className="underline">Uslove korišćenja</a>
        </p>
      </div>
    </div>
  );
};

export default PricingPage;