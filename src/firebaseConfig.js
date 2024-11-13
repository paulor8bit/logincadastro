// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AaaaaaaaaaaaaaaaPY74",
  authDomain: "aaaaaaaaaaaaa.firebaseapp.com",
  projectId: "aaaaaaaaaaa-92d7d",
  storageBucket: "aaaaaaaaaaaa-92d7d.firebasestorage.app",
  messagingSenderId: "741232132aaaa",
  appId: "1:7aaaaaaaa:web:93aaaaaaaaaaaaaaaasb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Inicializar a autenticação
export { db, auth };  // Exportar tanto db quanto auth
// export { db, auth };  // Exportar tanto db quanto auth