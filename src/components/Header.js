import { Link } from 'react-router-dom'
import { logOut } from "../services/firebase"
import { StyledHeader } from '../styles.js'
const Header = (props) => {
    return (
        <StyledHeader>
            <h1>Wish list</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li onClick={logOut}>Logout</li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header