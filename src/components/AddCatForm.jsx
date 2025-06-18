import React, { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = {
      id: Date.now(), // Unique ID using timestamp
      name,
      latinName,
      image
    };

    onAddCat(newCat); // Call parent-provided handler
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-cat-form">
      <h3>Add a New Big Cat</h3>

      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>

      <label>
        Latin Name:
        <input 
          type="text" 
          value={latinName} 
          onChange={(e) => setLatinName(e.target.value)} 
          required 
        />
      </label>

      <label>
        Image URL:
        <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
        />
      </label>

      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
