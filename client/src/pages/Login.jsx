import { useState } from "react";

export default function Login() {
    return (
        <div>
            <div className="login-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>
        </div>
    )
}