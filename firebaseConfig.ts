import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase com as chaves fornecidas
const firebaseConfig = {
  apiKey: "AIzaSyAujxHg83RSa04PJifN_5FO2-Q7qrbBCP8",
  authDomain: "cashflow-c4aae.firebaseapp.com",
  databaseURL: "https://cashflow-c4aae-default-rtdb.firebaseio.com",
  projectId: "cashflow-c4aae",
  storageBucket: "cashflow-c4aae.firebasestorage.app",
  messagingSenderId: "388129047802",
  appId: "1:388129047802:web:4da7772b7bf17f216ab543",
  measurementId: "G-NWQMRZX9WT"
};

// Verificação simples para garantir que as chaves existem
const isConfigured = !!firebaseConfig.apiKey;

let app;
let auth;
let db;
let googleProvider;

try {
  if (isConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
    console.log("Firebase inicializado com sucesso.");
  }
} catch (error) {
  console.error("Erro na inicialização do Firebase:", error);
}

export { auth, db, googleProvider, isConfigured };