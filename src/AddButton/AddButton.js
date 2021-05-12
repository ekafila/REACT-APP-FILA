import React from 'react';

const AddButton = ({ handleClick }) => {
    return (
      <button className='button_add' onClick={handleClick}>Add</button>
    )
  }

export default AddButton;