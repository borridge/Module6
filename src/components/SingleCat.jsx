function SingleCat({ name, latinName, image, id, onDelete }) {
  return (
    <li>
      <span>{image} <strong>{name}</strong> — <em>{latinName}</em></span>
      <button onClick={() => onDelete(id)} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
  );
}

export default SingleCat;
