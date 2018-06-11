import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import PlaceForm from './PlaceForm';

export default class Place extends Component {

   static propTypes = {
     place: PropTypes.array,
     //onRemove: PropTypes.func.isRequired,
     //onUpdate: PropTypes.func.isRequired
   };

   render() {
     const { place } = this.props;
     //const { name, toSee } = place;

     return (
     //  <li key={name} style={{ toSee }}>
       <li key={name}>
         {name}
         <button style={{ color: 'black' }} onClick={() => (place)}>X</button>
       </li>
     );
   }
}