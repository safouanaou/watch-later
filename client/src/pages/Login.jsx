import { useState } from "react";
import "../styles/login.css";

export default function Login() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <div className="login-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>
        </div>
    )
}