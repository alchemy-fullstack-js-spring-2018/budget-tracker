import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import PlaceContainer from './PlaceContainer';

export default class Place extends Component {

   static propTypes = {
     place: PropTypes.object,
     onRemove: PropTypes.func.isRequired,
     //onUpdate: PropTypes.func.isRequired
   };

   render() {
     const { place, onRemove } = this.props;
     const { name, toSee } = place;

     return (
       <li key={name}>
         <h2>{name}
           {toSee}
           <button style={{ color: 'black' }} onClick={() => onRemove(place)}>X</button>
         </h2>
       </li>
     );
   }
}