import React from 'react';

export class App extends React.Component {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {keyPressed ? (
          <p className="App__message">{`The last pressed key is [${keyPressed}]`}</p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
