import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
    <div className="logo">Wendy Gerrar Otu</div>
    <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

        
    );
};

export default Navbar;