import React from 'react';
import PetInfo from '../components/PetInfo';

const Pet = props => {
  const pet = props.location.state;
  return (
    <div className="Pet">
      <div className="pet-container">
        <div className="Pet-items">
          <PetInfo pet={pet} />
        </div>
      </div>
    </div>
  );
}

export default Pet;