import Category from "../Category/Category";
import Product from "../Product/Product"
import Singlecard from "./Singlecards/Singlecard";
import Widgetcard from "./Widgetcard/widgetcard";
import "./midnav.css"


export default function Midnav(){
    return(
        <nav className="midnav">
            <div className="category">
                <Category name="Food" />
                <Category name="Fashion" />
            </div>
            <div className="cards">
                <Singlecard />
                <Widgetcard />
                <Singlecard />
                <Widgetcard />
                <Singlecard />
                <Widgetcard />
                <Singlecard />
                <Widgetcard />
            </div>
            <div className="products-for-sales">
                {/* <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product /> */}
            </div>
        </nav>
    )
}