import { doc, DocumentData, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../firebase/firebase";

const AuthContext = createContext({
  currentUser: null,
  userData: { username: "default", uid: "0" },
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState<DocumentData | undefined>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        const userData = await getDoc(doc(firestore, "users", user.uid));
        setUserData(userData.data());
      } else {
        setUserData({});
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
