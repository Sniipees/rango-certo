import React from 'react';
import { Icon } from '../components/Shared';
import { Order } from '../types';

export const OrdersScreen: React.FC = () => {
  const orders: Order[] = [
      { id: '1', restaurantName: 'Trattoria al Forno', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXwiX4y4flwUguyo65La-27ZaP48Pj7vIeB0nrNTnvSEXzBgBYaO3OaWNhc_Z45pwyUTNie7Jah8jrtkAbEbwIk6xReyDVO1ffe9cWJHEPb6duCVNIP2l_hQMcO1jbEDXQbxeO_yFEgiUg5zwghCaE1YIr19174zmfUjyl7Vv6Pr_2Mqe9EvJh1l5dgU0aoaz06I4hrFW6KOYsVzv_WyA1OhdUM8EDVHIJqnr2VK7Qo-mQasxRG791dwiCxV7vTs2Fk6J2oxK0cH_M', date: 'Oct 12', price: '$42.50', status: 'Delivered', itemsCount: 2 },
      { id: '2', restaurantName: 'Green Earth Cafe', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1LFqDlYHkoKUpbkN3gtZq1AL8Qii8az6dPgVyUn7Okc8THB4jgSlkn5dJLeUUTcUOjMqT-I3ZtnXPwMDw4zSNHOEAR_HtO0r1I5S5JvwTvy9nsAM-K8pxGLR6yyAPkXQDcW3-6vcght409FDT1fD6AS92PI8Y7GlLz0EMFf--kqVGzK8XTYsMlHjyyy1RVTQV1P1mjsTFAG43q9bvXncUpqEPT5DT-obthm4dMEMEqHVKcKTkADmG4_3snfPi3XNIJ-T0SR_mcS1', date: 'Oct 08', price: '$18.20', status: 'Delivered', itemsCount: 1 },
      { id: '3', restaurantName: 'Sushi Zen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-fTZdEiDZHfghGr6o9-zZtiRpcL0bR0b-APrUmwvOtEUVcHI7il2oVIQSu8r_P6Vx73QnOTrWBRjbuxLnoagx3tAnCmY-DLsnl8gmomEX5k0Ic2xUo6YEzkkLrcdOXov9uBwA3G6qgNCUk1BnST31WECqAp6vA3qkAK5sHVwRHq11hJzmcE5R9gJCluPXK8dF-FYgpgyWnMwRI5m38U0h636khUF13I_b9dW1Wb_PZvlJhxHL8Giz-om5767QOBPoICqb58Q5EZlw', date: 'Sep 28', price: '$55.00', status: 'Delivered', itemsCount: 4 },
      { id: '4', restaurantName: 'Burger & Co.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMrG8g7JiK1odE54osiUZkiZeZNurFiHd3Fu59Yp-TY8iKiUSGLTEyvU6ebyKlLVLdteHSOpJ_L6EvFbzmeSn6Tm60BK3yunmMYlUT4zKazgxIE2L5XO2hqBayvx-fOtmexRuZ9CQuXS5Au8xu_yUszUqx2vGqiNoJG65iqX1AhFwyeAGAU4shwAuT-sueTCGnKuTsFgf_-YI6Z9TRulyGTl4eH9C_SulMsQc3Wl1thwR2tSQ2eNj1_7bzujNDAJh9NIb_COo3udSj', date: 'Sep 15', price: '$22.40', status: 'Cancelled', itemsCount: 2 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24 animate-fade-in font-display">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text-main dark:text-white">Orders</h1>
          <button><Icon name="search" className="text-2xl text-text-main dark:text-white" /></button>
      </header>

      {/* Tabs */}
      <div className="sticky top-[68px] z-10 bg-background-light dark:bg-background-dark pb-4 px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3">
              <button className="h-9 px-5 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20 flex-shrink-0">All Orders</button>
              <button className="h-9 px-5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-gray-300 text-sm font-medium flex-shrink-0">Completed</button>
              <button className="h-9 px-5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-gray-300 text-sm font-medium flex-shrink-0">Cancelled</button>
          </div>
      </div>

      <div className="px-6 space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-text-muted mt-2">October 2023</div>
          
          {orders.slice(0, 2).map((order) => (
              <div key={order.id} className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 active:scale-[0.99] transition-transform">
                  <div className="flex gap-4 mb-4">
                      <div className="size-16 rounded-xl bg-gray-200 bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${order.image}')` }}></div>
                      <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                              <h3 className="font-bold text-lg leading-tight text-text-main dark:text-white truncate">{order.restaurantName}</h3>
                              <button><Icon name="more_horiz" className="text-gray-400" /></button>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-muted mt-1 font-medium">
                              <span>{order.date}</span>
                              <span className="size-1 bg-gray-300 rounded-full"></span>
                              <span>{order.price}</span>
                              <span className="size-1 bg-gray-300 rounded-full"></span>
                              <span className="text-green-600 dark:text-green-400">{order.status}</span>
                          </div>
                      </div>
                  </div>
                  <div className="border-t border-gray-100 dark:border-white/5 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                          <Icon name="receipt_long" className="text-[16px]" />
                          <span>{order.itemsCount} items</span>
                      </div>
                      <button className="h-9 px-4 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">Reorder</button>
                  </div>
              </div>
          ))}

          <div className="text-xs font-bold uppercase tracking-wider text-text-muted pt-4">September 2023</div>
          
          {orders.slice(2).map((order) => (
               <div key={order.id} className={`bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 active:scale-[0.99] transition-transform ${order.status === 'Cancelled' ? 'opacity-80' : ''}`}>
                  <div className="flex gap-4 mb-4">
                      <div className={`size-16 rounded-xl bg-gray-200 bg-cover bg-center shrink-0 ${order.status === 'Cancelled' ? 'grayscale' : ''}`} style={{ backgroundImage: `url('${order.image}')` }}></div>
                      <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                              <h3 className="font-bold text-lg leading-tight text-text-main dark:text-white truncate">{order.restaurantName}</h3>
                              <button><Icon name="more_horiz" className="text-gray-400" /></button>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-muted mt-1 font-medium">
                              <span>{order.date}</span>
                              <span className="size-1 bg-gray-300 rounded-full"></span>
                              <span>{order.price}</span>
                              <span className="size-1 bg-gray-300 rounded-full"></span>
                              <span className={order.status === 'Cancelled' ? 'text-red-500' : 'text-green-600'}>{order.status}</span>
                          </div>
                      </div>
                  </div>
                  <div className="border-t border-gray-100 dark:border-white/5 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                          <Icon name={order.status === 'Cancelled' ? 'help' : 'receipt_long'} className="text-[16px]" />
                          <span>{order.status === 'Cancelled' ? 'Support' : `${order.itemsCount} items`}</span>
                      </div>
                      <button className={`h-9 px-4 rounded-lg text-sm font-bold transition-colors ${order.status === 'Cancelled' ? 'border border-gray-200 dark:border-white/10 text-text-main dark:text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                          {order.status === 'Cancelled' ? 'Details' : 'Reorder'}
                      </button>
                  </div>
              </div>
          ))}
      </div>
      
      <div className="py-10 text-center opacity-50">
          <div className="size-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="restaurant" className="text-primary text-2xl" />
          </div>
          <p className="text-sm text-text-muted">No more past orders</p>
      </div>
    </div>
  );
};
