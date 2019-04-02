import React from 'react';
import SearchContext from './SearchContext';
const WithSearch = (WrappedComponent) => (props, railsContext) => {
    return (
      <div>
        <WrappedComponent {...{...props, railsContext}} />
      </div>
    )
  }
export default WithSearch(SearchContext);