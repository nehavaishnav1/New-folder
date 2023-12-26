import React, { useState } from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import{app} from "../firebase";
const auth =getAuth(app);

const SigninPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const SigninUser =()=>{
    signInWithEmailAndPassword(auth,email,password).then((value)=>
  console.log("Signin sucess"))
  .catch ((err) => console.log(err));

   };  

  return (
    
    <div className="signin-page">
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        required
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"/>
<button onClick={SigninUser}>SignIn</button>
    </div>
  );
};


export default SigninPage;
