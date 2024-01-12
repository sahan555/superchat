import { auth, db } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Successfully signed in with Google:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };
  return <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
