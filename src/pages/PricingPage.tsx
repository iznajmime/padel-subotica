import React from 'react';

const PricingPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 leading-tight mb-4">
          Cenovnik
        </h1>
        <p className="text-xl text-gray-600">
          Izaberite vreme koje vam odgovara
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Morning Sessions Card */}
        <div className="bg-white rounded-xl shadow-custom p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">
              Jutarnji Termini
            </h2>
            <p className="text-lg text-gray-600">9:00 - 16:00</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">1 sat</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">1.500</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">1 sat 30 min</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">2.200</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">2 sata</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">2.800</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-[#337a67] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Povoljnije cene za jutarnje termine
            </div>
          </div>
        </div>

        {/* Afternoon Sessions Card */}
        <div className="bg-white rounded-xl shadow-custom p-8 border-2 border-[#337a67] relative hover:shadow-lg transition-shadow duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-[#337a67] text-white px-4 py-2 rounded-full text-sm font-semibold">
              POPULARAN
            </span>
          </div>

          <div className="text-center mb-8 mt-4">
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">
              Poslepodnevni Termini
            </h2>
            <p className="text-lg text-gray-600">16:00 - 23:00</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">1 sat</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">2.000</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">1 sat 30 min</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">2.800</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className="text-lg font-semibold text-gray-900">2 sata</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#337a67]">3.500</span>
                <span className="text-sm text-gray-600 ml-1">RSD</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-[#337a67] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Najpopularniji termini
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;