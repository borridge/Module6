function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy); // toggle between true/false
  };

  return (
    <div className="Emoji componentBox">
      <h2>Emoji Mood</h2>
      <p style={{ fontSize: '4rem' }}>
        {isHappy ? '😊' : '😠'}
      </p>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
