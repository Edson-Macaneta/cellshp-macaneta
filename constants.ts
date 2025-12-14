import { FirebaseConfig } from './types';

// IMPORTANT: Replace these placeholders with your actual Firebase project configuration
// You can find these in your Firebase Console -> Project Settings
export const FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: "SEU_API_KEY", // e.g. "AIzaSy..."
  authDomain: "SEU_AUTH_DOMAIN", // e.g. "your-app.firebaseapp.com"
  projectId: "SEU_PROJECT_ID", // e.g. "your-app"
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

export const SUPABASE_CONFIG = {
  url: "SUA_SUPABASE_URL",
  anonKey: "SUA_SUPABASE_ANON_KEY"
};

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash';