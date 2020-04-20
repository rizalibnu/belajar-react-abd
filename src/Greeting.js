import React from 'react';
import './Greeting.css';

class GreetingClass extends React.Component {
  static defaultProps = {
    people: {
      tinggi: '50cm'
    }
  }

  state = {
    count: 0,
    name: "budi"
  }

  setCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  setCountDown = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const {text, isLarge, day, people} = this.props;
    return (
      <>
        <p className="red" style={{fontSize: isLarge ? '14px' : '8px'}}>
          {text}
        </p>
        <p>tinggi {people ? people.tinggi : '50cm'}</p>
        <p>satu minggu = {day} hari</p>
        <p>ini name: {this.state.name}</p>
        <p>ini count: {this.state.count}</p>
        <button className="button" onClick={this.setCountDown}>-</button>
        <button className="button" onClick={this.setCountUp}>+</button>
        <button className="button" onClick={this.props.handleClick}>tombol alert</button>
      </>
    )
  }
}

const GreetingFn = (props) => {
  const {text, isLarge, day, people} = props;
  // const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState({
    count: 0,
    name: "budi"
  })
  console.log("GreetingFn -> state", state)

  const setCountUp = () => {
    // setCount(count + 1);
    setState({
      ...state,
      count: state.count + 1,
    })
  }

  const setCountDown = () => {
    // setCount(count - 1);
    setState({
      ...state,
      count: state.count - 1,
    })
  }

  return (
    <>
      <p className="red" style={{fontSize: isLarge ? '14px' : '8px'}}>
        {props.text}
      </p>
      <p>tinggi {people ? people.tinggi : '50cm'}</p>
      <p>satu minggu = {day} hari</p>
      <p>ini count: {state.count}</p>
      <p>ini name: {state.name}</p>
      <button className="button" onClick={setCountDown}>-</button>
      <button className="button" onClick={setCountUp}>+</button>
      <button className="button" onClick={props.handleClick}>tombol alert</button>
    </>
  )
}

export default GreetingClass;