import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3 font-Inter'>
                <li><Link className="hover:underline" to="/">Home</Link></li>
                <li><Link className="hover:underline" to="filmes">Filmes</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;