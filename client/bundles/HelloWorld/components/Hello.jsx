//client/bundles/HelloWorld/components/Hello.jsx
import React from 'react';
import { hot } from 'react-hot-loader/root';
class Hello extends React.Component {
    constructor(props, railsContext) {
      super(props);
      this.state = { text: '' , rt: railsContext.href};
      this.handleChange = this.handleChange.bind(this);
    }
  
    speak = function() {
      alert('I can speak gjhgdjs');
    };
  
    handleChange(event) {
      this.setState({text: event.target.value});
    }
  
    render() {
      return (<div>
        <h1>23Hello World {this.state.text}</h1>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <br/>
        <br/>
        <button id="speak" onClick={ this.speak }>Saysss something</button>
      </div>)
    }
  }
  export default hot(Hello);