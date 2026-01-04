import React, { useState } from 'react';
import { Icon } from '../components/Shared';
import { View } from '../types';

interface Props {
  onBack: () => void;
  onPay: () => void;
}

export const CheckoutScreen: React.FC<Props> = ({ onBack, onPay }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32 animate-fade-in font-display">
      <header className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <button onClick={onBack} className="size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
           <Icon name="arrow_back" className="text-2xl text-text-main dark:text-white" />
        </button>
        <h1 className="text-lg font-bold text-text-main dark:text-white">Checkout</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-5 pt-2">
        {/* Delivery Map */}
        <section className="mb-8">
            <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-xl font-bold text-text-main dark:text-white">Delivery Location</h2>
                <button className="text-sm font-bold text-primary hover:text-orange-600">Edit</button>
            </div>
            
            <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm border border-orange-100 dark:border-white/10 mb-4 group cursor-pointer">
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuARdnkZnBEmSYVIAx-g-hlg7YymsQKM10OAphbObx4OKZe4if_kJ7G8YWu5rfe1dr-CFToxmK-GovPoW5K9gWED4ek9mKJx-cGwS1W56Z-KoC9wQfUsdYO008BdXIQ4opW99tD4oVfl227YflaIvcNhh6-Qp6h9pP6S6mLGO980ASkxnzOTghZtbNrDH4_yzTakWOmv3mZHzUel1C9QZnjf5Tb--0sfBkuRjcThd7hcQVDjYv9oN2chRkuJW85BjjRVyaAhPho-x9kf')` }}></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4">
                     <Icon name="location_on" filled className="text-4xl text-primary drop-shadow-md" />
                 </div>
                 <div className="absolute bottom-3 right-3 bg-white dark:bg-surface-dark p-2 rounded-full shadow-md">
                     <Icon name="my_location" className="text-primary" />
                 </div>
            </div>

            <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-text-muted pl-1">Street Address</label>
                    <input type="text" defaultValue="1428 Elm Street" className="w-full rounded-xl border-orange-100 dark:border-white/10 bg-white dark:bg-surface-dark py-3.5 px-4 font-sans text-text-main dark:text-white focus:ring-primary focus:border-primary transition-shadow shadow-sm" />
                </div>
                <div className="flex gap-4">
                     <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase text-text-muted pl-1">City</label>
                        <input type="text" defaultValue="Portland" className="w-full rounded-xl border-orange-100 dark:border-white/10 bg-white dark:bg-surface-dark py-3.5 px-4 font-sans text-text-main dark:text-white focus:ring-primary focus:border-primary transition-shadow shadow-sm" />
                    </div>
                     <div className="w-1/3 flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase text-text-muted pl-1">Zip</label>
                        <input type="text" defaultValue="97205" className="w-full rounded-xl border-orange-100 dark:border-white/10 bg-white dark:bg-surface-dark py-3.5 px-4 font-sans text-text-main dark:text-white focus:ring-primary focus:border-primary transition-shadow shadow-sm" />
                    </div>
                </div>
                 <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-text-muted pl-1">Delivery Instructions</label>
                    <input type="text" placeholder="Gate code, door bell..." className="w-full rounded-xl border-orange-100 dark:border-white/10 bg-white dark:bg-surface-dark py-3.5 px-4 font-sans text-text-main dark:text-white focus:ring-primary focus:border-primary transition-shadow shadow-sm" />
                </div>
            </div>
        </section>

        <hr className="border-dashed border-orange-200 dark:border-white/10 my-6 opacity-50" />

        {/* Payment */}
        <section>
             <h2 className="text-xl font-bold text-text-main dark:text-white mb-5">Payment Method</h2>
             <div className="flex gap-3 overflow-x-auto pb-4 -mx-5 px-5 no-scrollbar mb-2">
                 <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-shrink-0 flex items-center gap-3 pl-3 pr-6 py-3 rounded-xl transition-all ${
                        paymentMethod === 'card' 
                        ? 'border-2 border-primary bg-primary/5' 
                        : 'border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark opacity-60 hover:opacity-100'
                    }`}
                 >
                     <div className={`size-5 rounded-full border transition-colors ${
                         paymentMethod === 'card' 
                         ? 'border-[5px] border-primary bg-white' 
                         : 'border-gray-400'
                     }`}></div>
                     <span className="font-bold text-text-main dark:text-white">Credit Card</span>
                 </button>

                  <button 
                    onClick={() => setPaymentMethod('apple')}
                    className={`flex-shrink-0 flex items-center gap-3 pl-3 pr-6 py-3 rounded-xl transition-all ${
                        paymentMethod === 'apple' 
                        ? 'border-2 border-primary bg-primary/5' 
                        : 'border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark opacity-60 hover:opacity-100'
                    }`}
                 >
                     <div className={`size-5 rounded-full border transition-colors ${
                         paymentMethod === 'apple' 
                         ? 'border-[5px] border-primary bg-white' 
                         : 'border-gray-400'
                     }`}></div>
                     <div className="flex items-center gap-2 font-medium text-text-main dark:text-white">
                         <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-.93 3.57-.93 1.6 0 2.93.84 3.8 2.37-3.62 1.55-2.8 5.75.92 7.15-.36 1.4-1.28 3-2.6 4.3l-.77.64zm-3.62-13.6c.45-2.3 2.18-3.9 4.31-4.25.44 2.5-2.43 4.67-4.31 4.25z"/>
                         </svg>
                         <span>Apple Pay</span>
                     </div>
                 </button>
             </div>

             <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-sm space-y-4 relative overflow-hidden min-h-[290px] flex flex-col justify-center">
                 <div className="absolute -top-12 -right-12 size-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                 
                 {paymentMethod === 'card' ? (
                     <div className="space-y-4 relative z-10 animate-fade-in w-full">
                        <div className="flex flex-col gap-1.5">
                             <label className="text-xs font-bold uppercase text-text-muted pl-1">Card Number</label>
                             <div className="relative">
                                 <Icon name="credit_card" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                 <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-11 pr-4 py-3.5 rounded-xl border-orange-100 dark:border-white/10 bg-background-light dark:bg-background-dark font-mono text-text-main dark:text-white focus:ring-primary focus:border-primary" />
                                 <Icon name="lock" filled className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 text-lg" />
                             </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-xs font-bold uppercase text-text-muted pl-1">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3.5 rounded-xl border-orange-100 dark:border-white/10 bg-background-light dark:bg-background-dark font-mono text-text-main dark:text-white focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-xs font-bold uppercase text-text-muted pl-1 flex items-center gap-1">CVV <Icon name="help" className="text-[14px]" /></label>
                                <input type="text" placeholder="123" className="w-full px-4 py-3.5 rounded-xl border-orange-100 dark:border-white/10 bg-background-light dark:bg-background-dark font-mono text-text-main dark:text-white focus:ring-primary focus:border-primary" />
                            </div>
                        </div>
                         <div className="flex flex-col gap-1.5">
                             <label className="text-xs font-bold uppercase text-text-muted pl-1">Cardholder Name</label>
                             <input type="text" placeholder="Name on card" className="w-full px-4 py-3.5 rounded-xl border-orange-100 dark:border-white/10 bg-background-light dark:bg-background-dark text-text-main dark:text-white focus:ring-primary focus:border-primary" />
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="size-5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent flex items-center justify-center">
                                <Icon name="check" className="text-xs text-transparent" />
                            </div>
                            <span className="text-sm font-medium text-text-main dark:text-gray-300">Save card securely</span>
                        </div>
                     </div>
                 ) : (
                     <div className="relative z-10 w-full flex flex-col items-center justify-center py-4 animate-fade-in text-center">
                        <div className="size-20 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6 shadow-xl">
                            <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-.93 3.57-.93 1.6 0 2.93.84 3.8 2.37-3.62 1.55-2.8 5.75.92 7.15-.36 1.4-1.28 3-2.6 4.3l-.77.64zm-3.62-13.6c.45-2.3 2.18-3.9 4.31-4.25.44 2.5-2.43 4.67-4.31 4.25z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Pay with Apple Pay</h3>
                        <p className="text-sm text-text-muted max-w-[200px] leading-relaxed">
                            Authenticate with Face ID or Touch ID to complete your order.
                        </p>
                        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                             <Icon name="lock" filled className="text-sm" />
                             <span>Secure Payment</span>
                        </div>
                     </div>
                 )}
             </div>
        </section>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#221910]/95 backdrop-blur-xl border-t border-orange-100 dark:border-white/5 p-5 pb-8 max-w-md mx-auto shadow-2xl">
          <div className="flex justify-between items-center mb-4 text-sm font-medium">
              <span className="text-text-muted">Total (incl. tax & delivery)</span>
              <span className="text-2xl font-bold text-text-main dark:text-white">$45.50</span>
          </div>
          <button 
            onClick={onPay}
            className="w-full bg-primary hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
              {paymentMethod === 'apple' ? (
                   <>
                     <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-.93 3.57-.93 1.6 0 2.93.84 3.8 2.37-3.62 1.55-2.8 5.75.92 7.15-.36 1.4-1.28 3-2.6 4.3l-.77.64zm-3.62-13.6c.45-2.3 2.18-3.9 4.31-4.25.44 2.5-2.43 4.67-4.31 4.25z"/>
                     </svg>
                     <span>Pay with Apple Pay</span>
                   </>
              ) : (
                   <>
                     <Icon name="lock" className="text-white/80" />
                     <span>Review & Pay</span>
                   </>
              )}
          </button>
           <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-1">
              <Icon name="verified_user" className="text-[12px]" />
              Secure 256-bit SSL encrypted payment
           </p>
      </div>
    </div>
  );
};