import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav className="w-full h-16 px-5">
            <ul className="w-full h-full flex items-center justify-end gap-4">
                <li className="hover:underline cursor-pointer">
                    <Link to={'/contato'}>
                        Contato
                    </Link>
                </li>
                <li className="hover:underline cursor-pointer">
                    <Link to={'/sobre-nos'}>
                        Sobre nós
                    </Link>
                </li>
                <li className="hover:underline cursor-pointer">
                    <Link to={'/login'}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}