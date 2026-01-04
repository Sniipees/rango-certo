import React, { useState } from 'react';
import { View } from './types';
import { BottomNav } from './components/Shared';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { OrderTrackingScreen } from './screens/OrderTrackingScreen';
import { OrdersScreen } from './screens/OrdersScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);

  const renderScreen = () => {
    switch (currentView) {
      case View.LOGIN:
        return <LoginScreen onLogin={() => setCurrentView(View.HOME)} />;
      case View.HOME:
        return <HomeScreen onNavigate={(view) => setCurrentView(view)} />;
      case View.DETAILS:
        return <DetailsScreen onBack={() => setCurrentView(View.HOME)} onCheckout={() => setCurrentView(View.CHECKOUT)} />;
      case View.CHECKOUT:
        return <CheckoutScreen onBack={() => setCurrentView(View.DETAILS)} onPay={() => setCurrentView(View.TRACKING)} />;
      case View.TRACKING:
        return <OrderTrackingScreen onBack={() => setCurrentView(View.ORDERS)} />;
      case View.ORDERS:
        return <OrdersScreen />;
      case View.PROFILE:
        return <ProfileScreen onLogout={() => setCurrentView(View.LOGIN)} />;
      default:
        return <LoginScreen onLogin={() => setCurrentView(View.HOME)} />;
    }
  };

  const showBottomNav = currentView !== View.LOGIN && currentView !== View.CHECKOUT && currentView !== View.TRACKING && currentView !== View.DETAILS;

  // Determine nav theme based on view (Details/Discover usually has red theme in this concept, others orange)
  const navTheme = currentView === View.DETAILS ? 'red' : 'orange';

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark max-w-md mx-auto sm:shadow-2xl overflow-hidden pwa-container">
      {renderScreen()}

      {showBottomNav && (
        <BottomNav
          currentView={currentView}
          onChange={setCurrentView}
          theme={navTheme}
        />
      )}
    </div>
  );
};

export default App;
