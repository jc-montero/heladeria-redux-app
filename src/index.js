import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import store from './store';
import * as flavors from "./constants/icecreams_flavors";
import { actions as actionsFreezer} from "./ducks/freezer";
//import { actions as actionsOrders } from "./ducks/orders";

/* console.log(store.getState())

store.subscribe(() => console.log(store.getState()))
store.dispatch(actionsFreezer.updateTemperature(-9))
store.dispatch(actionsFreezer.addIcecream(flavors.TIRAMISU, 5))
store.dispatch(actionsOrders.placeOrder({

})) */

setInterval(() => {
    store.dispatch(actionsFreezer.addIcecream(flavors.TIRAMISU, 5))
}, 1500);

ReactDOM.render(<App/>, document.getElementById('root'))