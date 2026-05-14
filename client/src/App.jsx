import { useState } from "react";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";

export default function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div>
          {isLoggedIn ? <Watchlist /> : <Login />}
        </div>
    );
}
