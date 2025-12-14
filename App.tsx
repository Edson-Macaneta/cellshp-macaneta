import React, { useEffect, useState } from 'react';
import { subscribeToAuthChanges } from './services/firebaseService';
import { UserProfile } from './types';
import { LoginView } from './components/LoginView';
import { ChatInterface } from './components/ChatInterface';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to Firebase Auth state
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 mb-4">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-slate-400 font-medium animate-pulse">Initializing Nexus...</p>
      </div>
    );
  }

  // If user is authenticated, show Chat, otherwise show Login
  return user ? <ChatInterface user={user} /> : <LoginView />;
};

export default App;
