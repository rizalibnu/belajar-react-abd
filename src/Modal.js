import React from 'react';

class ModalClass extends React.Component {
  componentDidMount() {
    console.log('mounting');
  }

  componentDidUpdate() {
    console.log('updating');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  render() {
    return (
      <div style={{position: 'absolute', width: '100px', height: '200px', background: 'red'}}>
        <p>ini modal</p>
        <button className="button" onClick={this.props.handleClose}>close modal</button>
      </div>
    )
  }
}

const ModalFn = (props) => (
  <div style={{position: 'absolute', width: '100px', height: '200px', background: 'red'}}>
    <p>ini modal</p>
    <button className="button" onClick={props.handleClose}>close modal</button>
  </div>
)

export default ModalClass;