import { Link } from "react-router-dom"

export default function Header(){
    return(
        <section className="header--container">
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </section>
    )
}