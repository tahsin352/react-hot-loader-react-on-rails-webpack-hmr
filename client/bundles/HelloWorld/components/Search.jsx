import React from 'react';
import { hot } from 'react-hot-loader/root';
const Search = () => (
  <div className="ui raised segment no padding">
    <form method="GET" action="search">test48
      <div className="ui fluid icon transparent large input">
        <input name="query" type="text" placeholder="Search apps..." autoComplete="off" />
        <button type="submit">
          <i className="search icon"></i>
        </button>
      </div>
    </form>
  </div>
);

export default hot(Search)