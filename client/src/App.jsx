import { useState } from "react";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";
import Signup from "./pages/signup";
import Homepage from "./pages/Homepage"

export default function App() {
    const [isLoggedIn, setLoggedIn] = useState(true);

    return (
        <div>
          {isLoggedIn ? <Homepage /> : <Login />}
        </div>
    );
}
