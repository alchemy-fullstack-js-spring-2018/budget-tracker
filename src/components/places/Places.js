import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import PlaceForm from './PlaceForm';
import Place from './Place';
import { loadPlaces } from './actions';

class Places extends Component {
  
  static propTypes = {
    places: PropTypes.array,
    loadPlaces: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadPlaces();
  }

  render() {
    const { places } = this.props;
    if(!places) return null;

    return (
      <div>
        <h2>Places</h2>
        {/* <PlaceForm onComplete={addPlace} label='Add'/> */}
        <ul>
          {places.map(place => <Place
            key={place.name}
            place={place}
          />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ places: state.places }),
  { loadPlaces }
)(Places);