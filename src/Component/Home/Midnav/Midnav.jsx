import Category from "../Category/Category";
import Product from "../Product/Product"
import "./midnav.css"


export default function Midnav(){
    return(
        <nav className="midnav">
            <div className="category">
                <Category name="Food" />
                <Category name="Fashion" />
            </div>
            <div className="products-for-sales">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </nav>
    )
}