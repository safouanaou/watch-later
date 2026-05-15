import { useState } from "react";
import "../styles/login.css";

export default function Login() {
    return (
        <div className="login-page container min-vh-100 d-flex justify-content-center align-items-center">

                <section className="login-form container-fluid d-flex align-items-center flex-column">

                    <h1>Login</h1>
                    <form action="" method="POST" className="form container d-flex justify-content-center align-items-center flex-column">
                            <input type="email" id="email" placeholder="email"/> 
                            <input type="password" id="password" placeholder="password"/>
                        
                        <button id="submit-button" type="submit">Login</button>
                    </form>

                </section>


            </div>

            
    )
}