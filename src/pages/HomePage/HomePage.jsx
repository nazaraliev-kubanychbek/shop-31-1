import { useSelector } from "react-redux";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const HomePage = () => {
    const categories = useSelector(s => s.reducer.category);
    return (
        <div>
           {
            categories.map(item => {
                return <CategoryComponent key={item.id} category={item} limit={4} />
            })
           }
        </div>
    );
}

export default HomePage;
