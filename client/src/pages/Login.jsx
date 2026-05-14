import "../styles/login.css";

export default function Login({ onLogin }) {
    function handleSubmit(event) {
        event.preventDefault();
        onLogin();
    }

    return (
        <div className="login-page">
            <section className="login-shell" aria-label="Sign in">
                <div className="login-hero">
                    <p className="login-eyebrow">Watch Later</p>
                    <h1>Save the stories you do not want to miss.</h1>
                    <p className="login-copy">
                        Keep your films, shows, and videos in one focused space with a watchlist that feels calm and easy to return to.
                    </p>
                    
                </div>

                <form className="login-container" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <p>Welcome back</p>
                        <h2>Login</h2>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="you@example.com" autoComplete="email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" autoComplete="current-password" />
                    </div>

                    <button type="submit" className="login-button">Sign in</button>

                    <p className="signup-note">
                        New here? <a href="/">Create an account</a>
                    </p>
                </form>
            </section>
        </div>
    )
}
