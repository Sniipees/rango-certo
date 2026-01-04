import React from 'react';
import { Icon } from '../components/Shared';
import { View } from '../types';

interface Props {
  onLogin: () => void;
}

export const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Hero Header */}
      <div className="relative w-full h-[35vh] min-h-[280px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxsjBmRpZTDTR8yNqFEnTqN3njl1mpjwNtvCovUhV-JJZUf_0yD5zy0ed-4tlWxu98oN6q1XF9e2Ypie_Z0QEOj0qGyDQTmJLmncG-fahXl5rw9P8xAwQcHv_QHB0r82BGW8HK-cx0i0pqO-C6kWBKXwowdKlnH6BjEtkgUgEKmDMffYvSLAaBD0kQ1YgHePUVoOA51nLLWdXJV5QJN7vr5eFtTUmED_d_sEoSOmpGNHG1af5ltW_mQ_QTty3z301FqBWeEVVZaL5R')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background-light dark:to-background-dark" />
        </div>
        
        {/* Logo/Icon */}
        <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-4">
            <Icon name="restaurant_menu" className="text-primary text-5xl" />
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-8 -mt-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-semibold text-text-main dark:text-white mb-2">Welcome Back</h1>
          <p className="text-text-muted dark:text-gray-400 text-sm font-medium">Log in to continue your culinary journey</p>
        </div>

        <form className="w-full max-w-sm space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon name="mail" className="text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="email" 
              placeholder="Email Address"
              className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-white/5 border-none rounded-xl text-text-main dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon name="lock" className="text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="password" 
              placeholder="Password"
              className="block w-full pl-12 pr-12 py-4 bg-white dark:bg-white/5 border-none rounded-xl text-text-main dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm"
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <Icon name="visibility_off" className="text-gray-400 hover:text-primary transition-colors" />
            </button>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-primary text-sm font-bold hover:text-primary-dark transition-colors">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all duration-200 text-base mt-4"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 mb-6 relative w-full max-w-sm">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background-light dark:bg-background-dark text-gray-500 font-medium">Or continue with</span>
          </div>
        </div>

        <div className="flex gap-4 w-full max-w-sm">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 py-3.5 rounded-xl transition-all shadow-sm active:scale-95">
             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
             <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 py-3.5 rounded-xl transition-all shadow-sm active:scale-95">
             <svg className="w-6 h-6 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
               <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-.93 3.57-.93 1.6 0 2.93.84 3.8 2.37-3.62 1.55-2.8 5.75.92 7.15-.36 1.4-1.28 3-2.6 4.3l-.77.64zm-3.62-13.6c.45-2.3 2.18-3.9 4.31-4.25.44 2.5-2.43 4.67-4.31 4.25z"/>
             </svg>
             <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Apple</span>
          </button>
        </div>

        <div className="mt-8 text-center pb-8">
          <p className="text-text-muted text-sm">
            New here? <button className="text-primary font-bold hover:underline">Create an account</button>
          </p>
        </div>
      </div>
    </div>
  );
};