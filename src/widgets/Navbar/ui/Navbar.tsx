import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-5">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/shop"}>Shop</Link>
                </li>
            </ul>
        </nav>
    );
}