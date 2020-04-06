import React from 'react';
import './Greeting.css';

class GreetingClass extends React.Component {
  static defaultProps = {
    people: {
      tinggi: '50cm'
    }
  }

  render() {
    const {text, isLarge, count, people} = this.props;
    console.log("Greeting -> render -> count", count)
    return (
      <>
        <p className="red" style={{fontSize: isLarge ? '14px' : '8px'}}>
          {text}
        </p>
        <p>tinggi {people ? people.tinggi : '50cm'}</p>
        <p>satu minggu = {count} hari</p>
        <button className="button" onClick={this.props.handleClick}>tombol alert</button>
      </>
    )
  }
}

const GreetingFn = (props) => {
  const {text, isLarge, count, people} = props;
  return (
    <>
      <p className="red" style={{fontSize: isLarge ? '14px' : '8px'}}>
        {props.text}
      </p>
      <p>tinggi {people ? people.tinggi : '50cm'}</p>
      <p>satu minggu = {count} hari</p>
      <button className="button" onClick={props.handleClick}>tombol alert</button>
    </>
  )
}

export default GreetingFn;