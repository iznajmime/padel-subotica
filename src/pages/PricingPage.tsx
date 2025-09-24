import React, { useState } from 'react';

interface PricingPageProps {
  onNavClick: (page: 'rezervacije' | 'cenovnik' | 'kako-do-nas') => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavClick }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12 font-montserrat">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Morning Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Jutarnji Termini
            </h3>
            <p className="text-gray-500 text-lg">9:00 - 16:00</p>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="text-gray-700 font-semibold text-lg">Trajanje</div>
                <div className="text-gray-600">1 sat</div>
                <div className="text-gray-600">1.5 sata</div>
                <div className="text-gray-600">2 sata</div>
              </div>
              <div className="space-y-4">
                <div className="text-gray-700 font-semibold text-lg">Cena</div>
                <div className="text-[#337a67] font-bold">1500 RSD</div>
                <div className="text-[#337a67] font-bold">2200 RSD</div>
                <div className="text-[#337a67] font-bold">3000 RSD</div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavClick('rezervacije')}
            className="w-full bg-[#337a67] hover:bg-[#2a6355] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Rezerviši Sada
          </button>
        </div>

        {/* Afternoon Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Poslepodnevni Termini
            </h3>
            <p className="text-gray-500 text-lg">16:00 - 23:00</p>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="text-gray-700 font-semibold text-lg">Trajanje</div>
                <div className="text-gray-600">1 sat</div>
                <div className="text-gray-600">1.5 sata</div>
                <div className="text-gray-600">2 sata</div>
              </div>
              <div className="space-y-4">
                <div className="text-gray-700 font-semibold text-lg">Cena</div>
                <div className="text-[#337a67] font-bold">2000 RSD</div>
                <div className="text-[#337a67] font-bold">3000 RSD</div>
                <div className="text-[#337a67] font-bold">4000 RSD</div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavClick('rezervacije')}
            className="w-full bg-[#337a67] hover:bg-[#2a6355] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Rezerviši Sada
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;