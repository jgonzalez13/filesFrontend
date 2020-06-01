import React from 'react';
import SearchComponent from './Search.Component'
import FormExpedientes from './formexpedientes'

const Files = () => {
  return (
    <div className="table-container">
      <h1>FilesView</h1>
      <SearchComponent  />
      <FormExpedientes />
    </div>
  );
};

export default Files;
