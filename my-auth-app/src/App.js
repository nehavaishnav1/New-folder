import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/signup";
import "./App.css";
import SigninPage from "./pages/signin";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "sample@gmail.com", "132345")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  };

  return (
    <div className="App">
      <SignupPage/>
      <SigninPage/>
    </div>
  );
}




export default App;
