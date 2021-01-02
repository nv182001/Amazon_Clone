import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
const Promise = loadStripe(
  "pk_test_51I4OimCCH82VdymCF7krnaTqDwqH8iWVOngucAPr1qXNKMXuAnGKYx2dRz5r9yKHqhxQQF181gflxJZHiHkdyVSa00B0NtYL38"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
            <Footer hideButton/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={Promise}>
              <Payment />
            </Elements>
            <Footer/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
