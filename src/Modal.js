import React from 'react';

const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("budi");
    }, 2000);
  });
}

class ModalClass extends React.Component {
  state = {
    name: '',
    loading: false,
  }

  async componentDidMount() {
    console.log('mounting');
    this.setState({loading: true});
    const result = await resolveAfter2Seconds();
    if (result) {
      this.setState({loading: false, name: result});
    }
  }

  componentDidUpdate() {
    console.log('updating');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  componentDidCatch() {
    console.log('error')
  }

  handleChangeState = () => {
    this.setState({
      name: 'andi'
    }, () => {
      console.log('triggered after set state');
    })
  }

  render() {
    return (
      <div style={{position: 'absolute', width: '100px', height: '200px', background: 'red'}}>
        {this.state.error && <div>error</div>}
        {this.state.loading ? (
          <div>loading....</div>
        ) : (
          <>
            <p>ini modal</p>
            <p>namaku {this.state.name}</p>
            <button className="button" onClick={this.handleChangeState}>change state</button>
            <br />
            <button className="button" onClick={this.props.handleClose}>close modal</button>
          </>
        )}
      </div>
    )
  }
}

const ModalFn = (props) => {
  const [name, setName] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log('mounting');
    const onMounting = async () => {
      setLoading(true);
      const result = await resolveAfter2Seconds();
      if (result) {
        setLoading(false);
        setName('budi');
      }
    }
    onMounting();
    return () => {
      console.log('unmounting');
    }
  }, [])

  React.useEffect(() => {
    console.log('triggering state name');
  }, [name])

  const handleChangeState = () => {
    setName('andi');
  }

  return (
    <div style={{position: 'absolute', width: '100px', height: '200px', background: 'red'}}>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          <p>ini modal</p>
          <p>namaku {name}</p>
          <button className="button" onClick={handleChangeState}>change state</button>
          <br />
          <button className="button" onClick={props.handleClose}>close modal</button>
        </>
      )}
    </div>
  )
}

export default ModalClass;