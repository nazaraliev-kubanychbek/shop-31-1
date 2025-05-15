import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="container header-container">
                <h2 className="header-logo">
                    <Link to={'/'}>shop</Link>
                </h2>

                <nav className="header-nav">
                    <Link to={'/'} className='header-nav-link'>home</Link>
                    <Link to={'/cart'} className='header-nav-link'>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
