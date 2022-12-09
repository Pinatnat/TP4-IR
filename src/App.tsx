import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useSearchImpl from './pages/Search/useSearchImpl';
import { render } from '@testing-library/react';

function App() {
  const { docs, onChange, onSubmit, renderDocs } = useSearchImpl()
  
  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </head>
      <body>
      <div className="App m-5">
        <h1 className='center mb-5'>Medical Search</h1>
        <div className='container'>
          <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search me" name='query' onChange={onChange}aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      {renderDocs()}
      </body>
    </>
  );
}

export default App;
