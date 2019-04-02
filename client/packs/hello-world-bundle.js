// client/packs/hello-world-bundle.js
import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import WithSearch from '../bundles/HelloWorld/components/WithSearch';
import Hello from '../bundles/HelloWorld/components/Hello';

if (module.hot) {
  module.hot.accept('../bundles/HelloWorld/components/Search.jsx', () => {
    render(require('../bundles/HelloWorld/components/Search.jsx').default);
  });
}

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  WithSearch,
  Hello,
});
