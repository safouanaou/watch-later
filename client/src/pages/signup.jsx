import { useState } from "react";
import "../styles/signup.css";

export default function Signup() {
    return (
        <div className="signup-page container min-vh-100 d-flex justify-content-center align-items-center">

                <section className="signup-form container-fluid d-flex align-items-center flex-column">

                    <h1>Create Account</h1>
                    <form action="" method="POST" className="form container d-flex justify-content-center align-items-center flex-column">
                            <input type="text" id="first-name" placeholder="First Name"/>
                            <input type="text" id="last-name" placeholder="Last Name"/>
                            <input type="email" id="email" placeholder="Email"/> 
                            <input type="password" id="password" placeholder="Password"/>
                        
                        <button id="submit-button" type="submit">Create</button>
                    </form>

                </section>


            </div>

            
    )
}