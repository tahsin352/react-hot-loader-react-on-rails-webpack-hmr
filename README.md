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

<h4>HOC with railsContext</h4>
railsContext is available for each react component as 2nd parameter. But when we implement HOC, then it return empty. Coz, only props can be passed from parent component to child component. So, if you want to pass railsContext to child component, then you need to pass it as props like below:

<pre>
//client/bundles/HelloWorld/components/WithSearch.jsx
import React from 'react';
import SearchContext from './SearchContext';
const WithSearch = (WrappedComponent) => (props, railsContext) => {
    return (
</pre>
      <div>
        <WrappedComponent {...{...props, railsContext}} />
      </div>
 <pre>     
    )
  }
export default WithSearch(SearchContext);

//client/bundles/HelloWorld/components/SearchContext.jsx
import React from 'react';
import { hot } from 'react-hot-loader/root';
const SearchContext = (props) => (
</pre>
  <div className="ui raised segment no padding">
    Your locale is {props.railsContext.i18nLocale}.<br/>
    Hello, {props.name}!
  </div>
<pre>
);
export default hot(SearchContext);
</pre>
<h3>Contact with Us</h3>
Our expertise <a href="http://garazlab.com/2019/03/10/expert-advice-free-technical-consulting-for-online-business-software-website-application-development/" target="_blank">here</a>. 
You can buy our popular products from <a href="https://garazlab.com/shop" target="_blank">GarazLab</a>

<div><a href="http://garazlab.com/product/real-time-health-data-from-every-where/" target="_blank">Real-time medical healthcare IoT app</a>.</div> 
<div><a href="http://garazlab.com/product/wp-firebase-chat-single-user-unlimited-group-realtime-messaging-with-file-share/" target="_blank">Firebase real-time chat app</a> .</div>
<div><a href="http://garazlab.com/product/wp-mikrotik-iot-plugin-for-realtime-network-management/" target="_blank">Network manager app </a>. </div>
