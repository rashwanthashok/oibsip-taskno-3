import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./Signup.css"
import { Link } from "react-router-dom";
import { signInWithGoogle, signOutwithGoogle } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-in-container  text-white" >
            <div class="login-box">
                <h2>Register</h2>
                <form onSubmit={signUp}>
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
                    <Link className="login" href="/login">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit" href="/login"> Sign Up</button>
                        <div className="mt-5 text-center ">
                            <button onClick={signInWithGoogle} type="submit" class="btn btn-primary"> <GoogleButton /> </button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;