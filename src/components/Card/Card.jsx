import './card.scss';
import {Link} from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/product/${item.id}`}
            style={{
                color: '#000',
                textDecoration: 'none'
            }}
            >

            <img src={item.image} alt="" className="card-img" />
            <h4 className="card-title">{
            item.title.length > 25
            ? item.title.slice(0, 22).trim() + '...'
            : item.title
            }</h4>
            <p className="card-description">{
            item.description.length > 30
            ? item.description.slice(0, 27).trim() + '...'
            : item.description
            }</p>

            </Link>
            <p className="card-text">{item.category}</p>
            <div className="card-block">
                <p className="card-text">${item.price}</p>

                <button className="card-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;
