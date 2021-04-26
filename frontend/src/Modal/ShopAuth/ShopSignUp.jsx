import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { SignUpStep1 } from "../../components/organisms/Modal/ShopAuth/node_modules/components/organisms/Modal/ShopAuth/SignUpStep1";
import { SignUpStep2 } from "../../components/organisms/Modal/ShopAuth/node_modules/components/organisms/Modal/ShopAuth/SignUpStep2";
import { Confirm } from "../../components/organisms/Modal/ShopAuth/node_modules/components/organisms/Modal/ShopAuth/Confirm";

createStore({
  data: {
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    email: "",
    password: "",
    password_repeat: "",
  },
});

export const ShopSignUp = () => {
  return (
    <StateMachineProvider>
      <Router>
        <Route exact path="/SignUpStep1" component={SignUpStep1} />
        <Route path="/SignUpStep2" component={SignUpStep2} />
        <Route path="/Confirm" component={Confirm} />
      </Router>
    </StateMachineProvider>
  );
};
