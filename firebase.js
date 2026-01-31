<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyA-KQGhyjrVhcstiQfqKcDQkiJjQQXf19M",
  authDomain: "orbital---va-manager.firebaseapp.com",
  projectId: "orbital---va-manager",
  storageBucket: "orbital---va-manager.firebasestorage.app",
  messagingSenderId: "162057702983",
  appId: "1:162057702983:web:f8ed3f5d115c7c53cbeb62",
  measurementId: "G-K1CGXQ83SE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
