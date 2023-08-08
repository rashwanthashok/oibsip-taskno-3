import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./Signup.css"
import { signInWithGoogle, signOutwithGoogle } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-in-container text-white  " >
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={signIn}>
                    <div class="user-box">
                        <input type="email"
                            placeholder="Enter your email" required="" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required="" />
                        <label>Password</label>
                    </div>
                    <a className="login" href="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit" href="/">Log In</button>
                    </a>
                    <hr className="my-5" />

                    <div>
                        Don't have an account? <a href="/register" className="text-white hover:text-blue-600">Sign Up</a>

                    </div>

                    <div className="mt-5 text-center ">
                        <button onClick={signInWithGoogle} type="submit" class="btn btn-primary"> <GoogleButton /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;