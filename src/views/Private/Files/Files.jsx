import React from 'react';
import SearchComponent from './Search.Component'
import FormExpedientes from './formexpedientes'
import FormAud from './formAudiencias';


const Files = () => {
  return (
    <div className="table-container">
      <h1>FilesView</h1>
      <SearchComponent  />
      <FormExpedientes />
      <FormAud />
    </div>
  );
};

export default Files;
