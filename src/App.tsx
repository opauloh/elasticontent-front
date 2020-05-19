import React from 'react';
import Badge from './components/Badge';
import Pallete from './components/Pallete';

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Boring Design System <button >Toggle Dark Mode</button></h1>

      <h2>Colors</h2>
      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>yellow</div>
          <Pallete color="yellow" />
        </div>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>purple</div>
          <Pallete color="purple" />
        </div>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>blue</div>
          <Pallete color="blue" />
        </div>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>green</div>
          <Pallete color="green" />
        </div>

      </div>
      <hr />
      <h2>Badges</h2>
      <p>
        Usage:
        <pre>
          {`<Badge color="yellow">New</Badge>`}<br />
          {`<Badge color="purple">Producing content</Badge>`}<br />
          {`<Badge color="blue">Reviewing</Badge>`}<br />
          {`<Badge color="green">Approved</Badge>`}
        </pre>
      </p>
      <div>
        <div><Badge color="yellow">New</Badge></div>
        <div><Badge color="purple">Producing content</Badge></div>
        <div><Badge color="blue">Reviewing</Badge></div>
        <div><Badge color="green">Approved</Badge></div>
      </div>
      <hr />
    </div>
  );
}

export default App;
