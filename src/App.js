import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51HRhSXBtRU7ZYeOS90R5iWmwHHteMTwv0ZHmGHOlyD5KcDuEV09z7AY8SE9BOLGFRdS2XcKJikw6ANdP4gUtnjB000TG1w4Wva"
);

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/checkout">
                        <Header />

                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />

                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
