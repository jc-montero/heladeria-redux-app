import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import { actions as actionsFreezer } from "../../ducks/freezer";

import store from "../../store";

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.icecreams,
    temperature: store.getState().freezer.temperature,
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => this.setState({
      flavors: store.getState().freezer.icecreams,
      temperature: store.getState().freezer.temperature,
    }))

    setInterval(() => {
      const randomTemp = Math.round(Math.random() * 10)
      store.dispatch(actionsFreezer.updateTemperature(randomTemp))
    }, 2000);
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleRestock = (flavorName) => {
    const amount = parseInt(window.prompt(`Enter number of scoops to restock ${flavorName}`))

    if (!isNaN(amount)) {
      store.dispatch(actionsFreezer.addIcecream(flavorName, amount))
    }
  }

  render() {
    console.log(this.state);
    const flavors = this.state.flavors;
    const freezerFlavors = Object.keys(flavors).map(
      flavorName => <FreezerFlavor
                        key={flavorName}
                        flavorName={flavorName}
                        scoops={flavors[flavorName]}
                        onClickRestock={() => this.handleRestock(flavorName)} />
    )

    return (
      <Panel title={`Freezer (º${this.state.temperature}C)`}>
        {freezerFlavors}
      </Panel>
    );
  }
}

export default Freezer;

