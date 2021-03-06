import React from 'react';
import Pet from './Pet.js';

const OwnerPetList = (props) => {
  const pets = props.pets.map((pet) => {
    return (
      <li key={pet.id}>
      <div>
      <Pet pet={pet} />
      </div>
      </li>
    )
  })
  return (<ul className='list-output'>{pets}</ul>)
}


export default OwnerPetList;
