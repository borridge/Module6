import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '🐆' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '🐈' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '🐆' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '🐆' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: '🦁' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '🐆' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '🐅' }
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const sortByName = () => {
    const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sorted);
  };

  const reverseList = () => {
    const reversed = [...cats].reverse();
    setCats(reversed);
  };

  const filterPanthera = () => {
    const filtered = initialCats.filter(cat => cat.latinName.startsWith('Panthera'));
    setCats(filtered);
  };

  const resetList = () => {
    setCats(initialCats);
  };

  const handleAddCat = (newCat) => {
    newCat.id = cats.length ? Math.max(...cats.map(c => c.id)) + 1 : 1;
    setCats([...cats, newCat]);
  };

  const handleDeleteCat = (idToRemove) => {
    setCats(cats.filter(cat => cat.id !== idToRemove));
  };

  return (
    <div className="BigCats componentBox">
      <h2>🐾 Big Cats</h2>

      <div className="button-group">
        <button onClick={sortByName}>Sort A–Z</button>
        <button onClick={reverseList}>Reverse</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset</button>
      </div>

      <AddCatForm onAddCat={handleAddCat} />

      <ul>
        {cats.map(cat => (
          <SingleCat key={cat.id} {...cat} onDelete={handleDeleteCat} />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
