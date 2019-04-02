# react-hot-loader-react-on-rails-webpack-hmr
react-hot-loader integration with react-on-rails and webpacker HMR with example

we will use webpacker hmr 
<pre>
if (module.hot) {
  module.hot.accept('../bundles/HelloWorld/components/Search.jsx', () => {
    render(require('../bundles/HelloWorld/components/Search.jsx').default);
  });
}
</pre>
It reflects the changes that we made on the codebase in the browser without any page refresh. But it will lost the state of the application. So, we need to use react-hot-loader to keep the state in the app intact.
<pre>
//client/bundles/HelloWorld/components/Hello.jsx
import React from 'react';
import { hot } from 'react-hot-loader/root';
class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
      this.handleChange = this.handleChange.bind(this);
    }
  </pre>
    speak = function() {
      alert('I can speak gjhgdjs');
    };
  
    handleChange(event) {
      this.setState({text: event.target.value});
    }
  
    render() {
      return (<div>
        <h1>23Hello World</h1>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <br/>
        <br/>
        <button id="speak" onClick={ this.speak }>Saysss something</button>
      </div>)
    }
  }
export default hot(Hello);

Now rails + react + react_on_rails + webpack + react_hot_loader works perfectly.

<h3>Contact with Us</h3>
Our expertise <a href="http://garazlab.com/2019/03/10/expert-advice-free-technical-consulting-for-online-business-software-website-application-development/" target="_blank">here</a>. 
You can buy our popular products from <a href="https://garazlab.com/shop" target="_blank">GarazLab</a>

<div><a href="http://garazlab.com/product/real-time-health-data-from-every-where/" target="_blank">Real-time medical healthcare IoT app</a>.</div> 
<div><a href="http://garazlab.com/product/wp-firebase-chat-single-user-unlimited-group-realtime-messaging-with-file-share/" target="_blank">Firebase real-time chat app</a> .</div>
<div><a href="http://garazlab.com/product/wp-mikrotik-iot-plugin-for-realtime-network-management/" target="_blank">Network manager app </a>. </div>
