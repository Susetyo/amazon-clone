import React from "react";
import "./Home.css";
import Product from "./Product";
import ReCAPTCHA from "react-google-recaptcha";
function Home() {
    const onChange = (value) => {
        console.log("Captcha value:", value);
    };

    return (
        <div className="home">
            <ReCAPTCHA
                sitekey="6LfWvtwZAAAAAFOJcfHCqAz-Sa9AyC3zxax_ITku"
                onChange={onChange}
            />
            ,
            {/* <div className="home__container">
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
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
                            rating={5}
                        />
                        <Product
                            id="14"
                            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                            price={2998}
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
                            rating={4}
                        />
                        <Product
                            id="15"
                            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                            price={2998}
                            image="https://images-na.ssl-images-amazon.com/images/I/61By0A78n+L._AC_SY400_.jpg"
                            rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="16"
                            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                            price={2998}
                            image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._AC_SY400_.jpg"
                            rating={4}
                        />
                    </div>
                </div> */}
        </div>
    );
}

export default Home;
