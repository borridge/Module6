function Greeting({ name = "World", children }) {
  return (
    <div className="Greeting componentBox">
      <h2>Hello {name}!</h2>
      {/* Optional custom message passed as children */}
      {children && <p>{children}</p>}
    </div>
  );
}

export default Greeting;
