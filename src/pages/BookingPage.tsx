import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const BookingPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"teren-1"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#0056bf"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  useEffect(() => {
    // Cal element-click embed code for Teren 2
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    window.Cal("init", "teren-2", {origin:"https://app.cal.com"});
    window.Cal.ns["teren-2"]("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#0056bf"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
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

      <div className="flex-grow flex flex-col gap-6 max-w-md mx-auto w-full px-4 min-h-[500px]">
        <button 
          data-cal-namespace="teren-1"
          data-cal-link="park-klub/teren-1"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          className="bg-[#0056bf] hover:bg-[#004299] text-white font-semibold rounded-xl shadow-lg transition-colors duration-200 text-xl flex items-center justify-center py-8 h-20"
        >
          Teren 1
        </button>
        
        <button 
          data-cal-namespace="teren-2"
          data-cal-link="padelklubpark/teren-2"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          className="bg-[#0056bf] hover:bg-[#004299] text-white font-semibold rounded-xl shadow-lg transition-colors duration-200 text-xl flex items-center justify-center py-8 h-20"
        >
          Teren 2
        </button>
      </div>
    </div>
  );
};

export default BookingPage;