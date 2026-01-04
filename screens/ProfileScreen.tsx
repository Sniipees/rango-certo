import React from 'react';
import { Icon } from '../components/Shared';

interface Props {
  onLogout: () => void;
}

export const ProfileScreen: React.FC<Props> = ({ onLogout }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24 animate-fade-in font-display">
      <header className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
          <div className="w-8"></div>
          <h1 className="text-lg font-bold text-text-main dark:text-white">Profile</h1>
          <button className="text-primary font-bold hover:text-orange-700">Edit</button>
      </header>

      <div className="flex flex-col items-center px-6 pt-4 pb-8">
          <div className="relative mb-4">
              <div className="size-32 rounded-full p-1 bg-gradient-to-tr from-primary/30 to-transparent">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmwXv36eduAddnkQkQmGBwoGaK13n55a24a4wOBHjR5mtDyovQSLZcrfF7SeAKcoejs70kqiZalM7EZzvkizUJsXolEpsgl_dQWGWVsDTVtLTWgMi_zg4RSxRFmZoW_qwmRQo7X805aZxs2Z7GESXpSedEbUuRso-Qh9GxkrYVug7bpl6XpwGQvKbdgfHUqoUGmgkesD-bb03ToXPxmfBbm9_ZRDQIA0YU4xwzwMEYJPxkig9R3tNMJN_A542My4NfofNGoCN44ZmK" alt="Elena" className="size-full rounded-full object-cover border-4 border-background-light dark:border-background-dark shadow-sm" />
              </div>
              <button className="absolute bottom-1 right-1 bg-white dark:bg-surface-dark p-2 rounded-full shadow-md text-primary hover:scale-105 transition-transform">
                  <Icon name="photo_camera" className="text-[18px]" />
              </button>
          </div>
          <h2 className="text-2xl font-bold text-text-main dark:text-white">Elena Fisher</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Conscious Eater • Member since 2023</p>

          <div className="flex gap-4 mt-6">
              <div className="flex flex-col items-center px-5 py-2.5 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-orange-50 dark:border-white/5">
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Reviews</span>
                  <span className="text-xl font-bold text-text-main dark:text-white">42</span>
              </div>
              <div className="flex flex-col items-center px-5 py-2.5 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-orange-50 dark:border-white/5">
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Saved</span>
                  <span className="text-xl font-bold text-text-main dark:text-white">128</span>
              </div>
          </div>
      </div>

      <div className="flex-1 px-5 space-y-6">
          <div className="space-y-3">
              <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-text-muted opacity-80">Personal Details</h3>
              <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 divide-y divide-gray-100 dark:divide-white/5">
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary flex items-center justify-center">
                              <Icon name="mail" />
                          </div>
                          <div>
                              <p className="text-sm font-bold text-text-main dark:text-white">Email</p>
                              <p className="text-xs text-text-muted">elena.fisher@example.com</p>
                          </div>
                      </div>
                      <Icon name="chevron_right" className="text-gray-300" />
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary flex items-center justify-center">
                              <Icon name="call" />
                          </div>
                          <div>
                              <p className="text-sm font-bold text-text-main dark:text-white">Phone</p>
                              <p className="text-xs text-text-muted">+1 (555) 012-3456</p>
                          </div>
                      </div>
                      <Icon name="chevron_right" className="text-gray-300" />
                  </div>
              </div>
          </div>

          <div className="space-y-3">
              <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-text-muted opacity-80">My Kitchen</h3>
              <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 divide-y divide-gray-100 dark:divide-white/5">
                   <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary flex items-center justify-center">
                              <Icon name="restaurant_menu" />
                          </div>
                          <div>
                              <p className="text-sm font-bold text-text-main dark:text-white mb-1">Dietary Preferences</p>
                              <div className="flex gap-2">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">Vegan</span>
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Gluten-Free</span>
                              </div>
                          </div>
                      </div>
                      <Icon name="chevron_right" className="text-gray-300" />
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary flex items-center justify-center">
                              <Icon name="credit_card" />
                          </div>
                          <p className="text-sm font-bold text-text-main dark:text-white">Payment Methods</p>
                      </div>
                      <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-text-muted">Visa ••42</span>
                          <Icon name="chevron_right" className="text-gray-300" />
                      </div>
                  </div>
                   <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary flex items-center justify-center">
                              <Icon name="location_on" />
                          </div>
                          <p className="text-sm font-bold text-text-main dark:text-white">Saved Addresses</p>
                      </div>
                      <Icon name="chevron_right" className="text-gray-300" />
                  </div>
              </div>
          </div>

          <div className="space-y-3">
              <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-text-muted opacity-80">App Settings</h3>
              <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 divide-y divide-gray-100 dark:divide-white/5">
                   <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300 flex items-center justify-center">
                              <Icon name="notifications" />
                          </div>
                          <p className="text-sm font-bold text-text-main dark:text-white">Push Notifications</p>
                      </div>
                      <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                          <div className="absolute right-0.5 top-0.5 size-5 bg-white rounded-full shadow-sm"></div>
                      </div>
                  </div>
                   <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300 flex items-center justify-center">
                              <Icon name="dark_mode" />
                          </div>
                          <p className="text-sm font-bold text-text-main dark:text-white">Dark Mode</p>
                      </div>
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer">
                          <div className="absolute left-0.5 top-0.5 size-5 bg-white rounded-full shadow-sm"></div>
                      </div>
                  </div>
              </div>
          </div>

          <button onClick={onLogout} className="w-full py-4 text-center rounded-2xl border border-gray-200 dark:border-white/10 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
              Log Out
          </button>

          <p className="text-center text-xs text-gray-400 pb-4">App Version 2.4.0 (Build 124)</p>
      </div>
    </div>
  );
};
