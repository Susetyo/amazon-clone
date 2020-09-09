import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="11"
                        title="The Lean Statup"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/6161t1nNOhL._AC_SX118_SY170_QL70_.jpg"
                        rating={5}
                    />
                    <Product
                        id="12"
                        title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="13"
                        title="The Lean Statup"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/6161t1nNOhL._AC_SX118_SY170_QL70_.jpg"
                        rating={5}
                    />
                    <Product
                        id="14"
                        title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
                        rating={4}
                    />
                    <Product
                        id="15"
                        title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="15"
                        title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                        price={2998}
                        image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
