import "../styles/homepage.css";

export default function Homepage() {
    return (
        <div className="home">

            <header className="header">
                <h2>Watchlist</h2>

                <nav className="navigation">
                    <ul>
                        <li>login</li>
                        <li>Watchlist</li>
                    </ul>
                </nav>
            </header>

            <main className="home-container">

                <div className="category movies">

                </div>

                <div className="category series">

                </div>

                <div className="category anime">

                </div>

            </main>
        </div>
    )
}