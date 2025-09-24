import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const BookingPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"teren-1"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#337a67"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold font-display text-gray-900 leading-tight mb-3">
          Rezerviši svoj padel termin
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Izaberi teren, trajanje termina i željeni dan
        </p>
      </header>
    <div className="w-full max-w-sm mx-auto px-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold font-display text-gray-900 leading-tight mb-3">
          Rezerviši svoj padel termin
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Izaberi teren, trajanje termina i željeni dan
        </p>
      </header>

      <div className="space-y-6">
        <button 
          data-cal-namespace="teren-1"
          data-cal-link="park-klub/teren-1"
          data-cal-config='{"layout":"month_view"}'
          className="w-full bg-[#337a67] hover:bg-[#2a6355] text-white font-semibold py-12 px-6 rounded-xl shadow-lg transition-colors duration-200 text-xl min-h-[120px] flex items-center justify-center"
        >
          Teren 1
        </button>
        
        <button 
          data-cal-namespace="teren-2"
          data-cal-link="park-klub/teren-2"
          data-cal-config='{"layout":"month_view"}'
          className="w-full bg-[#337a67] hover:bg-[#2a6355] text-white font-semibold py-12 px-6 rounded-xl shadow-lg transition-colors duration-200 text-xl min-h-[120px] flex items-center justify-center"
        >
          Teren 2
        </button>
      </div>
    </div>
  );
};

export default BookingPage;