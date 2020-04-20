import React from 'react';
import logo from './logo.svg';
import Greeting from './Greeting';
import Modal from './Modal';
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
  const [showModal, setShowModal] = React.useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const budi = {
    kelas: '1',
    tinggi: '160cm',
  }

  return (
    <React.Fragment>
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting text="halo semuanya apa kabar?" handleClick={handleClick} isLarge day={7} />
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
          {showModal && (
            <Modal handleClose={handleClose} />
          )}
        </Header>
      </div>
      <div>footer</div>
    </React.Fragment>
  );
}

export default App;
