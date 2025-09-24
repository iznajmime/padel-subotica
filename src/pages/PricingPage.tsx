import React from 'react';
import { Clock } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-custom p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight mb-8 text-center">
          Cenovnik
        </h1>

        <div className="space-y-8">
          {/* Morning Sessions Table */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold font-display text-gray-800 mr-3">
                Jutarnji Termini
              </h2>
              <Clock className="w-6 h-6 text-[#337a67]" />
            </div>
            <p className="text-center text-gray-600 mb-6 flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              9:00 - 16:00
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#337a67] text-white">
                    <th className="py-3 px-4 text-left font-semibold rounded-l-lg">Trajanje</th>
                    <th className="py-3 px-4 text-right font-semibold rounded-r-lg">Cena</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">1h</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">1.500 RSD</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">1h 30min</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">2.200 RSD</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">2h</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">2.800 RSD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Afternoon Sessions Table */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold font-display text-gray-800 mr-3">
                Poslepodnevni Termini
              </h2>
              <Clock className="w-6 h-6 text-[#337a67]" />
            </div>
            <p className="text-center text-gray-600 mb-6 flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              16:00 - 23:00
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#337a67] text-white">
                    <th className="py-3 px-4 text-left font-semibold rounded-l-lg">Trajanje</th>
                    <th className="py-3 px-4 text-right font-semibold rounded-r-lg">Cena</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">1h</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">2.000 RSD</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">1h 30min</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">2.800 RSD</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">2h</td>
                    <td className="py-4 px-4 text-right font-bold text-[#337a67]">3.500 RSD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;