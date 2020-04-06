import React from 'react';
import logo from './logo.svg';
import Greeting from './Greeting';
import './App.css';

const getName = (name) => name;

const Header = (props) => {
  return (
    <header className="App-header">
      {props.children}
    </header>
  )
};

const App = () => {
  const handleClick = () => alert('showing alert')
  const budi = {
    kelas: '1',
    tinggi: '160cm',
  }

  return (
    <>
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting text="halo semuanya apa kabar?" isLarge count={7} />
          <Greeting text="kabar baik" handleClick={handleClick} people={budi}  />
          <a
            //class="App-link"
            className="App-link"
            href="https://reactjs.org"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Learn React {getName('John Doe')}
          </a>
        </Header>
      </div>
      <div>footer</div>
    </>
  );
}

export default App;
