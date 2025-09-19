// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIGS_UC0iwIOr8RLCohDBeqtg9ftcGRng",
  authDomain: "priyangshu-9cffa.firebaseapp.com",
  databaseURL: "https://priyangshu-9cffa-default-rtdb.firebaseio.com",
  projectId: "priyangshu-9cffa",
  storageBucket: "priyangshu-9cffa.firebasestorage.app",
  messagingSenderId: "841620052503",
  appId: "1:841620052503:web:f07c36f895e17418b55a52",
  measurementId: "G-EG10K7D36R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };