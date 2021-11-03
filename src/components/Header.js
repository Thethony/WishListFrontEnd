import { Link } from 'react-router-dom'
import { StyledHeader } from '../styles.js'
const Header = (props) => {
    return (
        <StyledHeader>
            <Link to="/">
            <h1>Wish list</h1>
            </Link>
        </StyledHeader>
    )
}

export default Header