import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector(s => s.reducer.category);
    return (
        <header className='header'>
            <div className="container header-container">
                <h2 className="header-logo">
                    <Link to={'/'}>shop</Link>
                </h2>

                <nav className="header-nav">
                    <Link to={'/'} className='header-nav-link'>home</Link>
                    {
                        categories.map(item =>{
                            return <Link 
                            to={`/category/${item}`} 
                            key={item} 
                            className='header-nav-link'
                            >{item}</Link>
                        })
                    }
                    <Link to={'/cart'} className='header-nav-link'>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
