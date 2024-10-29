import ProductList from '../components/ProductList';
import products from '../data/product'; // Adjust the path based on your file structure
import products1 from '../data/product1'
function WishList() {
    return (
        <>
            <div>
                <ProductList  products={products} products1 = {products1}/>
            </div>
        </>
    );
}

export default WishList;
