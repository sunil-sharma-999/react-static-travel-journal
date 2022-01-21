import React from 'react';
import data from '../data.json';
import List from './List';

const Lists = () => {
  return (
    <div>
      {data.map((l) => {
        return <List key={l.title} data={l} />;
      })}
    </div>
  );
};

export default Lists;
