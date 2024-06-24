import Navbar from "./Navbar";

function Header() {
    return ( 
        <header className="flex bg-[#041122] font-Inter text-white  p-4  mb-4  justify-between">
            <h1>CocchiFlix</h1>
            <Navbar/>
        </header>
     );
}

export default Header;