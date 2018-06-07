import React, { Component } from 'react';
import Place from '.places/Place';

const places = [
  { name: 'Iceland', toSee:'Northern Lights' },
  { name: 'Scotland', toSee:'Loch Ness' },
  { name: 'Galapagos Islands', toSee:'Animal tour' }
];

export default class PlaceContainer extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    Promise.resolve(places)
      .then(places => this.setState({ places }));
  }

  render() {
    const { places } = this.state;
    return <Place places={places}/>;
  }

}
