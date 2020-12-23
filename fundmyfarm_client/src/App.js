import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./shared/home/Home";
import Overview from "./lender/screens/Overview";
import LendingMarket from "./lender/screens/LendingMarket";
import PaymentPage from "./lender/screens/PaymentPage";
import Error404 from "./shared/error404/Error404";
import FundeeRegister from "./lendee/screens/FundeeRegister"
import FunderRegister from "./lender/screens/FunderRegister"

import FundeeLogin from "./lendee/screens/FundeeLogin"
import FunderLogin from "./lender/screens/FunderLogin"

import JoinUs from "./shared/JoinUs/JoinUsPage"
import Login from "./shared/Login/LoginPage"
import HomeNav from "./shared/components/HomeNav";

function App() {
  return (
    <BrowserRouter>
    <HomeNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lender/lending-market" component={LendingMarket} />
        <Route exact path="/lender/overview" component={Overview} />
        <Route exact path="/lender/view-campaign/2" component={PaymentPage} />
        <Route exact path="/register" component={JoinUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/lendee/register" component={FundeeRegister} />
        <Route exact path="/lender/register" component={FunderRegister} />
        <Route exact path="/lendee/login" component={FundeeLogin} />
        <Route exact path="/lender/login" component={FunderLogin} />
        {/* <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />  */}

        {/* Private Route available to only authenticated User */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/new-resume" component={New_resume} />
        <PrivateRoute path="/template-a" component={TemplateA} /> */}

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
