import React from 'react';
import Badge from './app/Badge';
import Pallete from './app/Pallete';
import IconTitle from './app/Title/Icon';
import { AvatarImg } from './app/Avatar/AvatarImg';
import SvgIconFilter from './icons/IconFilter';
import AvatarName from './app/Avatar/AvatarName';
import useTheme from './hooks/useTheme';

const App: React.FC = () => {
  const toggleTheme = useTheme();

  console.log(`I'm rendered`);
  return (
    <div style={{ padding: '1rem' }}>
      <h1>
        Style Guide{' '}
        <button
          style={{ position: 'absolute', right: 10, top: 10 }}
          onClick={toggleTheme}>
          Toggle Dark Mode
        </button>
      </h1>
      <h2>Colors</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', marginRight: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>yellow</div>
          <Pallete color="yellow" />
        </div>
        <div style={{ textAlign: 'center', marginRight: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>purple</div>
          <Pallete color="purple" />
        </div>
        <div style={{ textAlign: 'center', marginRight: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>blue</div>
          <Pallete color="blue" />
        </div>
        <div style={{ textAlign: 'center', marginRight: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>green</div>
          <Pallete color="green" />
        </div>
      </div>
      <hr />
      <h2>Badges</h2>
      Usage:
      <pre>
        {`<Badge color="yellow">New</Badge>`}
        <br />
        {`<Badge color="purple">Producing content</Badge>`}
        <br />
        {`<Badge color="blue">Reviewing</Badge>`}
        <br />
        {`<Badge color="green">Approved</Badge>`}
      </pre>
      <hr />
      <div>
        Medium
        <div>
          <Badge size="md" color="yellow">
            New
          </Badge>
        </div>
        <div>
          <Badge size="md" color="purple">
            Producing content
          </Badge>
        </div>
        <div>
          <Badge size="md" color="blue">
            Reviewing
          </Badge>
        </div>
        <div>
          <Badge size="md" color="green">
            Approved
          </Badge>
        </div>
      </div>
      <hr />
      <div>
        IconTitle
        <IconTitle text="Propósito">
          <SvgIconFilter />
        </IconTitle>
      </div>
      <hr />
      Avatar
      <br />
      Small
      <pre>
        {`<AvatarImg size="md" src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png" />`}
        <br />
      </pre>
      <AvatarImg
        size="md"
        src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png"
      />
      <br />
      Medium
      <pre>
        {`<AvatarImg size="lg" src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png" />`}
        <br />
      </pre>
      <AvatarImg
        size="lg"
        src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png"
      />
      <hr />
      <AvatarName
        size="lg"
        src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png">
        Drieli Lopes
      </AvatarName>
    </div>
  );
};

export default App;
