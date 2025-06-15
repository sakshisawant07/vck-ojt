import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <Link to="/home">Home   </Link>
                    <Link to="/about">About </Link>
                    <Link to="/admission">Admission </Link>
                    <Link to="/contact">Contact </Link>
                    <Link to="/course">Course   </Link>
                    <Link to="/notfound">NotFoundPage   </Link>
                </nav>
            </header>

        </>
    )
}

export default Header;