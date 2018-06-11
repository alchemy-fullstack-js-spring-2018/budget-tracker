import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import PlaceContainer from './PlaceContainer';

export default class Place extends Component {

   static propTypes = {
     places: PropTypes.array,
     //onRemove: PropTypes.func.isRequired,
     //onUpdate: PropTypes.func.isRequired
   };

   render() {
     const { places } = this.props;
     const { name, toSee } = places;

     return (
       <li key={name}>
         <h2>{name}
           {toSee}
           <button style={{ color: 'black' }} onClick={() => (places)}>X</button>
         </h2>
       </li>
     );
   }
}