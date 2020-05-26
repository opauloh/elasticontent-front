import React, { useEffect, useState } from 'react';
import Badge from './components/base/Badge';
import Pallete from './components/base/Pallete';
import IconTitle from './components/base/Title/Icon';
import { Avatar } from './components/base/Avatar';

const App: React.FC = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => (setTheme(theme => theme === "light" ? "dark" : "light"));

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Boring Design System <button style={{ position: "absolute", right: 10, top: 10 }} onClick={toggleTheme}>Toggle Dark Mode</button></h1>

      <h2>Colors</h2>
      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>yellow</div>
          <Pallete color="yellow" />
        </div>
        <div style={{ textAlign: "center", marginRight: "2rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>accent</div>
          <Pallete color="accent" />
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
          {`<Badge color="accent">Producing content</Badge>`}<br />
          {`<Badge color="blue">Reviewing</Badge>`}<br />
          {`<Badge color="green">Approved</Badge>`}
        </pre>
      </p>
      <div>
        Small
        <div><Badge color="yellow">New</Badge></div>
        <div><Badge color="accent">Producing content</Badge></div>
        <div><Badge color="blue">Reviewing</Badge></div>
        <div><Badge color="green">Approved</Badge></div>
      </div>
      <hr />
      <div>
        Medium
        <div><Badge size="md" color="yellow">New</Badge></div>
        <div><Badge size="md" color="accent">Producing content</Badge></div>
        <div><Badge size="md" color="blue">Reviewing</Badge></div>
        <div><Badge size="md" color="green">Approved</Badge></div>
      </div>
      <hr />
      <div>
        IconTitle
        <IconTitle icon="key">Propósito</IconTitle>
        <IconTitle icon="key">Direcionais</IconTitle>
      </div>
      <hr />
      Avatar<br />
      Small
      <pre>
        {`<Avatar size="sm" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />`}<br />
      </pre>
      <Avatar size="sm" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />
      <br />
      Medium
      <pre>
        {`<Avatar size="md" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />`}<br />
      </pre>
      <Avatar size="md" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />
    </div>
  );
}

export default App;
