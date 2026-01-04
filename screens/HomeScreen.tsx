import React from 'react';
import { Icon } from '../components/Shared';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

export const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24 animate-fade-in font-display">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 border-b border-transparent transition-colors">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-primary-red">
            <Icon name="location_on" filled className="text-2xl" />
          </div>
          <h2 className="text-lg font-bold text-text-main dark:text-white">SoHo, NY</h2>
          <button 
            onClick={() => onNavigate(View.PROFILE)}
            className="size-10 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden"
          >
            <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmwXv36eduAddnkQkQmGBwoGaK13n55a24a4wOBHjR5mtDyovQSLZcrfF7SeAKcoejs70kqiZalM7EZzvkizUJsXolEpsgl_dQWGWVsDTVtLTWgMi_zg4RSxRFmZoW_qwmRQo7X805aZxs2Z7GESXpSedEbUuRso-Qh9GxkrYVug7bpl6XpwGQvKbdgfHUqoUGmgkesD-bb03ToXPxmfBbm9_ZRDQIA0YU4xwzwMEYJPxkig9R3tNMJN_A542My4NfofNGoCN44ZmK" 
               alt="User" 
               className="w-full h-full object-cover"
            />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative shadow-sm rounded-xl overflow-hidden bg-white dark:bg-[#3a1c24] ring-1 ring-black/5">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="text-text-muted dark:text-white/50" />
          </div>
          <input 
            type="text" 
            placeholder="Find sustainable dining..." 
            className="w-full py-3 pl-10 pr-4 bg-transparent border-none text-text-main dark:text-white placeholder-text-muted dark:placeholder-white/40 focus:ring-2 focus:ring-primary-red/50"
          />
        </div>
      </header>

      <div className="px-4 py-4 space-y-6">
        {/* Featured Pick */}
        <div 
          onClick={() => onNavigate(View.DETAILS)}
          className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
        >
          <div className="flex-1">
            <span className="inline-block px-2.5 py-1 mb-2 text-[10px] font-bold tracking-wide uppercase text-white bg-primary-red rounded-full">
              Featured Pick
            </span>
            <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight">Today's Conscious Choice</h3>
            <p className="text-text-muted dark:text-gray-400 text-xs mt-1 line-clamp-2 font-medium">
              Seasonal Tasting Menu with locally sourced ingredients.
            </p>
          </div>
          <div 
            className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1O2MfcVP1e4D_kRNvflPwP16txM2o2gRIeuWnDj-ayPENNOxoA0tgYI_2Xxj5qvexxMmXm2V5gAsCadBYmKFUMppUfEExsuP7p7pUkTSRrHU_7FC2ZZFcpY0avanP0y6YoEpPO2ztEvsy_HJo4wXJ9cB7TbfSCIEJsFiJYLG_3YyTen7WoaIVAw7P2n330zYjcZ6IiZwrlWQWMz3jwmsNj4RkK-H9XC_dCLCreWimOvJmGSqTnh7oPm19XshVTlYy5gWVYoDOB0mc')` }}
          />
        </div>

        {/* Curated Nearby */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-text-main dark:text-white">Curated Nearby</h3>
            <button className="text-primary-red text-sm font-semibold hover:underline">See all</button>
          </div>

          {/* List Items */}
          {[
            {
              name: "Farm-to-Table Bistro",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8r0H0xKEKN6qrv0VY6hS1G8mcG_So8thb5KBrlyp52F8ok0P-AyHZRlNpYDiUlFP-HenHk8USJ24Kwatx_8Ni8hR-dNaG3HlacpzSBabqBL99Jeyig2qDm2kjNeILCPgsvX8yVMUUKSAwSrl5BGUAK5w5aJVYPlKD6nlW_iwcTux-h9DwG4Ct-bp5iDLNrF_uIE0R2aJbqgJCS736gB1Wv2kZIsF2o1rrfO1XEco6D3dHgiTLA8nqnvA38rLUsL99KRK7yOWMgcuB",
              rating: "9.2",
              price: "$$$",
              tags: ["GF", "Organic"],
              desc: "Locally sourced organic produce.",
              dist: "0.2mi"
            },
            {
              name: "The Artisan Baker",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBRWtzEZFdhSwhC2uZ08iioslSVnxyh5asKecz1i7SDO9wg674mI_iS4dcbMz6A5Vs1cr-o5U2wVYIyYK8hujasf-enlzY0-7OtkMjLIN-SEmnVdan629ceu9h8OD2F5oGPGvE5ex55F2Tou3MwocfAfthC2k6W1knYQQneBuwpVWUIZV5naiTPEtHlQ-UIsOEbHV5wOnkjTD23tl8bEeo3JmBCGUaLzguvAV15ZgeRcY8bGO-S4aYjBmy8bTiacWmuKVhgy14fRWd",
              rating: "8.9",
              price: "$$",
              tags: ["V", "Vegan Opt."],
              desc: "Handcrafted pastries, fair-trade coffee.",
              dist: "0.5mi"
            },
            {
              name: "Coastal Catch",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLKKolj2LwKtdfjiZodTz9CugTTAASd862gVYpfrcdTknT4pek2feOhYPvQ8oOBl7jK6f_seaY_Rsh_9OmsuQ-DBf40VjfapKom2qywRwCSZb9kDdhhLgcMzdaoCYJbmaoD42Dt-EFuojdZh0o7LUXWPlHOmslY31s6L2YbSvKbqzmPunvXzG-JeQAy4vxePcbWBr89dcTbHGBtdFRkn-nt3Onny5QcAoMbAOdgx-GLQ1awJRJxhPZabSjT0CCLTAvZTjBq15VQUN7",
              rating: "9.5",
              price: "$$$$",
              tags: ["Pescatarian", "Dairy-Free"],
              desc: "Sustainably sourced seafood.",
              dist: "0.8mi"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate(View.DETAILS)}
              className="flex gap-4 p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              <div 
                className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="flex flex-col flex-1 justify-between py-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold text-text-main dark:text-white">{item.name}</h4>
                  <div className="flex items-center gap-1 bg-background-light dark:bg-white/5 px-1.5 py-0.5 rounded-md">
                    <Icon name="eco" filled className="text-[12px] text-green-500" />
                    <span className="text-[10px] font-bold">{item.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-text-muted dark:text-gray-400 font-medium">French • <span className="text-primary-red">{item.price}</span></p>
                <p className="text-[10px] text-gray-500 line-clamp-1">{item.desc}</p>
                <div className="flex gap-2 mt-1">
                   {item.tags.map(t => (
                     <span key={t} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-semibold text-gray-600 dark:text-gray-300">{t}</span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
