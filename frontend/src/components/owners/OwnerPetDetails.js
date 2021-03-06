import React from 'react';

const OwnerPetDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.id);
  }

  const onEdit = () => {
    window.location = '/pets/edit/' + props.id;
  }

  if (!props.pet) {
    return null;
  }

  return (
    <div>
      <p className="para-details">Pet Name: {props.pet.name}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  )

}

export default OwnerPetDetails;
