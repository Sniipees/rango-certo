import React from 'react';
import { Icon } from '../components/Shared';

interface Props {
  onBack: () => void;
}

export const OrderTrackingScreen: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32 animate-fade-in font-display">
      <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-6 flex items-center justify-between">
        <button onClick={onBack} className="size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Icon name="arrow_back" className="text-text-main dark:text-white" />
        </button>
        <h2 className="text-lg font-bold text-text-main dark:text-white">Order #2491</h2>
        <button className="size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Icon name="support_agent" className="text-text-main dark:text-white" />
        </button>
      </header>

      <div className="px-6 space-y-8">
          {/* Map */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-sm group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyYG5kIRslF4BG0C6Bq29305YpQ3tqZU_Fdxt5ZUWPWnAJdgp7Qpr9s5D_-vgUbH8snjVLlEUlgygCtE67MF726D9J7XBwPobf9Be5T7FIKWHwNlP-2F9lD3ghnb5mQHvsnktZLU0zwTmBKYG1TuGPgrEHs-N3v4TH89J99wzwOt9bo8ugv_8mdQa0eexteyvthCHXoauiefXR3KLfAVKIfFw4zHi-H36X_xguUsBqtyf8XQWl8SYtbNlomfyRJcm0T8AlCbVwXEvK')` }}
              ></div>
              <div className="absolute bottom-4 left-4 bg-white dark:bg-surface-dark px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-text-main dark:text-white">Live Tracking</span>
              </div>
          </div>

          {/* ETA */}
          <div className="text-center">
              <span className="text-sm font-bold text-primary tracking-wider uppercase">Estimated Arrival</span>
              <h1 className="text-4xl font-extrabold text-text-main dark:text-white mt-1">15-20 mins</h1>
              <p className="text-text-muted mt-1 font-medium">Around 6:25 PM</p>
          </div>

          <div className="h-px bg-gray-200 dark:bg-white/10 w-full"></div>

          {/* Timeline */}
          <div className="pl-4">
              {[
                  { status: 'Order Confirmed', time: '5:30 PM', icon: 'check', active: true, completed: true },
                  { status: 'Preparing Consciously', time: '5:45 PM', icon: 'skillet', active: true, completed: true },
                  { status: 'Out for Delivery', time: 'Driver is nearby', icon: 'two_wheeler', active: true, completed: false },
                  { status: 'Arriving', time: 'Est. 6:25 PM', icon: 'home_pin', active: false, completed: false },
              ].map((step, idx, arr) => (
                  <div key={idx} className="grid grid-cols-[32px_1fr] gap-4 mb-1">
                      <div className="flex flex-col items-center h-full">
                          <div className={`size-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                              step.completed ? 'bg-primary text-white' : 
                              step.active ? 'bg-white dark:bg-surface-dark border-2 border-primary text-primary shadow-lg shadow-primary/20' : 
                              'bg-gray-100 dark:bg-white/5 text-gray-400'
                          }`}>
                              <Icon name={step.icon} className="text-[18px]" />
                          </div>
                          {idx !== arr.length - 1 && (
                              <div className={`w-[2px] h-full my-1 rounded-full ${step.completed ? 'bg-primary' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                          )}
                      </div>
                      <div className={`pb-6 ${step.active ? 'opacity-100' : 'opacity-50'}`}>
                          <h4 className={`text-base font-bold ${step.active && !step.completed ? 'text-primary' : 'text-text-main dark:text-white'}`}>{step.status}</h4>
                          <p className="text-sm text-text-muted">{step.time}</p>
                      </div>
                  </div>
              ))}
          </div>

          {/* Driver */}
          <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <div className="relative">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXhXME437T68XQiEHJeuABxaAAmkHYowiFGmfz6YJ5rYIGXUACrNrJU67_yi9jXjuI7xbVp72n2PVV6342HQ5rCGO4FjQxIDleouuyHWwNASnQ6l9MU7oDQq0Gn5qg6FIKcmI4qxBeGJzI5TH6zncaypoZ7tGwM1WOA_rGgUSpkPWgq6teyeo6sS32JAXnBRbplT-wrtl0ZqlISN0K9egZQ6QmHHNEUzqxo-cHo9qCm7Q3asO4eIjbsTRk2N2g5xpcVY1JcDS4h0Hu" alt="Driver" className="size-14 rounded-full object-cover" />
                      <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
                  </div>
                  <div>
                      <h4 className="font-bold text-text-main dark:text-white">Michael</h4>
                      <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                          <Icon name="star" filled className="text-yellow-500 text-[14px]" />
                          <span>4.9 • Toyota Prius</span>
                      </div>
                  </div>
              </div>
              <div className="flex gap-2">
                  <button className="size-11 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-text-main dark:text-white hover:bg-gray-200 transition-colors">
                      <Icon name="chat" />
                  </button>
                   <button className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                      <Icon name="call" />
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};
