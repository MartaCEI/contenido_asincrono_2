import { Link } from "react-router-dom";



const Header = () => {
    return (
        <>
            <Link to="/correos" >Correos</Link>
            <Link to="/nuevo" >Nuevo</Link>
        </>
    );
}

export default Header;