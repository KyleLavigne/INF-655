import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAHJQreGinXDwcPeesAKNQt9gaRCkvFvM",
    authDomain: "task-manager-a77a6.firebaseapp.com",
    projectId: "task-manager-a77a6",
    storageBucket: "task-manager-a77a6.firebasestorage.app",
    messagingSenderId: "908494149028",
    appId: "1:908494149028:web:5db1684c783a3431e91d31",
    measurementId: "G-DHV4VTL9E7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
