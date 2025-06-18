import React from 'react';
import Greeting from './components/Greeting';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <h1>🧪 Module 6: React Lab Exercises</h1>

      {/* Lab Exercise 1: Greeting with prop and children */}
      <section>
        <h2>1️⃣ Greeting Component</h2>
        <Greeting name="Boris">Welcome to your React Labs!</Greeting>
      </section>

      {/* Lab Exercise 2–5: Big Cats list, sorting, filtering, add/delete */}
      <section>
        <h2>2️⃣–5️⃣ Big Cats Component</h2>
        <BigCats />
      </section>

      {/* Lab Exercise 3: Emoji with toggle state */}
      <section>
        <h2>3️⃣ Emoji Toggle</h2>
        <Emoji />
      </section>

      {/* Lab Exercise 6: Calculator */}
      <section>
        <h2>6️⃣ Calculator</h2>
        <Calculator />
      </section>
    </div>
  );
}

export default App;
