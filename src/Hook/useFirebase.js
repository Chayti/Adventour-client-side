import intializeFirebase from "./../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } else {

      }
      setIsLoading(false);
    });
  }, []);

  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  return {
    handleGoogleLogin,
    handleLogout,
    setIsLoading,
    user,
    isLoading
  };
};

export default useFirebase;
