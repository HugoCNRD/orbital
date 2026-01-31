import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "home.html");
};

window.signup = async () => {
  const user = await createUserWithEmailAndPassword(
    auth,
    signupEmail.value,
    signupPassword.value
  );

  await setDoc(doc(db, "users", user.user.uid), {
    ifc: ifc.value,
    callsign: callsign.value,
    va: va.value,
    pireps: 0,
    role: "pilot"
  });

  location.href = "home.html";
};

