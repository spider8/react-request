import React, { Component } from 'react';
import { Fetch } from 'react-request';

class App extends Component {
  render() {
    return (
      <Fetch lazy url="https://jsonplaceholder.typicode.com/posts/1">
        {({ fetching, error, data, doFetch }) => (
          <div>
            <button onClick={() => doFetch()} disabled={fetching}>
              Fetch Post 1
            </button>
            {fetching && 'Loading...'}
            {error && 'There was a network error'}
            {data && (
              <div>
                <h1>Post title: {data.title}</h1>
                <h2>Post ID: {data.id}</h2>
              </div>
            )}
          </div>
        )}
      </Fetch>
    );
  }
}

export default App;
