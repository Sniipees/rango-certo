import React from 'react';
import { Icon } from '../components/Shared';
import { View } from '../types';

interface Props {
  onBack: () => void;
  onCheckout: () => void;
}

export const DetailsScreen: React.FC<Props> = ({ onBack, onCheckout }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-28 animate-slide-up font-display">
      {/* Navbar Overlay */}
      <div className="fixed top-0 z-50 w-full max-w-md p-4 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
        <button onClick={onBack} className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <Icon name="arrow_back" className="text-2xl" />
        </button>
        <div className="flex gap-3">
           <button className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Icon name="share" className="text-2xl" />
          </button>
           <button className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Icon name="favorite" className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div 
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_9C_1_TU3FZ_gnpnLrcpDQZxFHzZAYOxkhwhIXfFb4VRG5X5yVMEz8K3XAtWIPs9BFNlFHLWFcR7WmYeJsvDkWpANEiZZFerYWMQiTd2w1A_pvKZ5vSKBpMwcpc25ofyPiqfiCA9FW75fu1gFWzxGL7WIYi-cKW8kOYo4TH9Bwc3_riKGXPhaF5dx-j-6B_VdroAearE1s0yMqHR35Xw0PX8uSWhQmUhHLpUBG_2G0hh_b_JzpS01KXvDxOopnkxFCZsynUg5FaE1')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-10 relative z-10">
        <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-bold text-text-main dark:text-white leading-tight w-3/4">Le Jardin Bistro</h1>
            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2.5 py-1 rounded-lg">
                <Icon name="eco" filled className="text-[16px] text-green-700 dark:text-green-400" />
                <span className="text-xs font-bold text-green-800 dark:text-green-300">98%</span>
            </div>
        </div>

        <div className="flex items-center gap-2 text-primary-red font-medium text-sm mb-4">
             <span>French Contemporary</span>
             <span className="size-1 bg-current rounded-full"></span>
             <span>0.4 mi</span>
             <span className="size-1 bg-current rounded-full"></span>
             <span>$$$</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
            {['Organic', 'Quiet Ambiance', "Chef's Choice"].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-surface-dark">
                    {tag}
                </span>
            ))}
        </div>

        <div className="mb-8">
            <h2 className="text-lg font-bold mb-3 text-text-main dark:text-white">About the Menu</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                A sanctuary for slow dining. Chef Laurent prioritizes locally sourced root vegetables and sustainable seafood. The ambiance is designed for conversation, not consumption, allowing you to savor every delicate flavor profile in peace.
            </p>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
             <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm">
                 <div className="size-10 rounded-full bg-primary-red/10 flex items-center justify-center shrink-0">
                     <Icon name="location_on" className="text-primary-red" />
                 </div>
                 <div className="flex-1">
                     <h3 className="text-sm font-bold text-text-main dark:text-white">128 Rue de la Paix</h3>
                     <p className="text-xs text-gray-500 mb-3">Paris, France • Open in Maps</p>
                     <div className="h-24 w-full rounded-lg overflow-hidden relative">
                         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW-B0-Qsl6pFmvQ0NUqnEveCLnB5pdOAzFrw-nA3ohI7pv9AK5q07VLLnVEa6h8198TlO2_I9dmzVmULDFfrl4PrXr7mY2Jz38PEreoDrSzuE15CeNF5-sO7MbhjN9CeCJ6CwFlgnmZOJ8VmZA9jxfb57RlEBFTmnfBXWqyGJ71Ky_OTAS027pgsWGJKoEGtR50osB0Ye2znURtDMICyDNVQF2sZP01PxyBHThqstECN_QhVkbbKsGhUGozhR_1DcrHQSIBtEKOsts')` }}></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-3 bg-primary-red rounded-full ring-4 ring-white/50 animate-pulse"></div>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm items-center">
                 <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                     <Icon name="schedule" className="text-orange-600 dark:text-orange-400" />
                 </div>
                 <div>
                     <h3 className="text-sm font-bold text-text-main dark:text-white">Open until 10:00 PM</h3>
                     <p className="text-xs text-gray-500">Kitchen closes at 9:30 PM</p>
                 </div>
             </div>

             <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm items-center">
                 <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                     <Icon name="restaurant_menu" className="text-blue-600 dark:text-blue-400" />
                 </div>
                 <div>
                     <h3 className="text-sm font-bold text-text-main dark:text-white">Dietary Friendly</h3>
                     <p className="text-xs text-gray-500">Gluten-Free & Vegan Options</p>
                 </div>
             </div>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#221015]/95 backdrop-blur-lg border-t border-gray-100 dark:border-white/5 p-4 max-w-md mx-auto">
          <div className="flex gap-3">
              <button 
                onClick={onCheckout}
                className="flex-1 bg-primary-red hover:bg-red-700 active:scale-[0.98] transition-all text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary-red/25"
              >
                  <Icon name="calendar_month" />
                  <span>Request Table</span>
              </button>
              <button className="size-12 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <Icon name="menu_book" className="text-2xl" />
              </button>
          </div>
      </div>
    </div>
  );
};
