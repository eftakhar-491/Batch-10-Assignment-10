import {
  createUser,
  resetUserPass,
  updateUserData,
  useGoogleAuth,
  userSignIn,
  userSignOut,
} from "./Firebase/Firebase";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import { firebaseContest } from "./Context/FirebaseContext";
import { stateContext } from "./Context/StateContext";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebase.init";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Lemail, setLEmail] = useState("");
  const [myAdded, setMyAdded] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  theme
    ? (document.body.style.backgroundColor = "#0f0f0f")
    : (document.body.style.backgroundColor = "#fff");
  return (
    <>
      <stateContext.Provider
        value={{
          Lemail,
          setLEmail,
          loading,
          user,
          theme,
          setTheme,
          myAdded,
          setMyAdded,
          feedback,
          setFeedback,
        }}
      >
        <firebaseContest.Provider
          value={{
            useGoogleAuth,
            createUser,
            userSignOut,
            updateUserData,
            userSignIn,
            resetUserPass,
          }}
        >
          <HelmetProvider>
            <Layout />
            <ToastContainer />
          </HelmetProvider>
        </firebaseContest.Provider>
      </stateContext.Provider>
    </>
  );
}

export default App;
